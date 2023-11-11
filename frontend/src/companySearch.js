const url = "http://localhost:9098";

const headers = {
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
    const response = await fetch(url, {
      method: "POST",
      headers: headers,
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

// keywords: Array<string>
// locations: Array<{country: string, city?: string, region?: string}>
export async function searchCompanies(keywords, locations) {
  return fetchData(buildRequestBody(keywords, locations));
}
