import { filterAllCitiesByMinScores } from './cities';

const URL = "http://localhost:9098";

const HEADERS = {
  "Content-Type": "application/json"
};

function buildRequestBody(keywords, locations) {
  return {
    filters: [
      {
        attribute: "company_keywords",
        relation: "match_expression",
        value: {
          match: {
            operator: "or",
            operands: keywords,
          },
        },
        strictness: 1,
      },
      {
        attribute: "company_location",
        relation: "in",
        value: locations,
        strictness: 2,
      },
    ],
  };
}

async function fetchData(body) {
  try {
    const response = await fetch(URL, {
      method: "POST",
      headers: HEADERS,
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error:", error.message);
  }
}

function groupCompaniesByLocation(companies, cities) {
  const grouped = {};
  for (const loc of cities) {
    if (!(loc.country in grouped)) {
      grouped[loc.country] = {};
    }
    grouped[loc.country][loc.city] = [];
  }

  for (const company of companies) {
    for (const loc of company.locations) {
      if (loc.country in grouped && loc.city in grouped[loc.country]) {
        const companiesInCity = grouped[loc.country][loc.city];
        if (companiesInCity.length > 0 && companiesInCity[companiesInCity.length - 1].company_name == company.company_name) {
          // Deduplicate companies that have multiple locations in the same city
          continue;
        }
        companiesInCity.push(company);
      }
    }
  }

  const resultsByLocation = [];
  for (const [country, byCity] of Object.entries(grouped)) {
    for (const [city, companies] of Object.entries(byCity)) {
      if (companies.length > 0) {
        resultsByLocation.push({ country, city, companies });
      }
    }
  }

  return resultsByLocation;
}

// keywords: Array<string>
// locations: Array<{country: string, city?: string, region?: string}>
export async function searchCompanies(keywords, locations) {
  return fetchData(buildRequestBody(keywords, locations));
}

// cityScores: Array<{[scoreName]: number}>
// companyKeywords: Array<string>
export async function searchCompaniesWithCityScores(cityScores, companyKeywords) {
  const filteredCities = filterAllCitiesByMinScores(cityScores);
  filteredCities.sort((loc1, loc2) => loc2.overall_score - loc1.overall_score);
  const topCities = filteredCities.slice(0, 10).map(({ name, country }) => { return { city: name, country } });
  
  try {
    const fetchResult = await searchCompanies(companyKeywords, topCities);
    const allCompanies = fetchResult.result;

    // Group countries by country and city
    return groupCompaniesByLocation(allCompanies, topCities);
  } catch (error) {
    console.log("Error:", error.message);
    throw error;
  }
}