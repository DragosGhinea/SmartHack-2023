import { searchCompanies } from "./companySearch";
//import { getIndustryKeywords } from "./api/openAI";
import cities from "./cities";

function filterCities(allCities, filters) {
    return allCities.filter(city => {
        const scores = city.scores[0];

        return Object.entries(filters).every(([indexName, indexValue]) => scores[indexName] >= indexValue);
    });
}
export async function workflow(CVData)
{
    // get filters from frontend
    //const keywords = await getIndustryKeywords(CVData);
     const keywords = ["software", "developer", "backend", "IT", "Networking", "Cybersecurity"];
    const filters = {"Housing": 7,
                "Cost of Living": 7,
                "Commute": 5,
                "Safety": 6,
                "Healthcare": 5};
    const viableCities = filterCities(cities, filters);
    console.log(viableCities);
    for(const city of viableCities)
    {
        let cityLocation = {"country": city.country, "city": city.name};
        const companies = await searchCompanies(keywords, cityLocation);
        console.log(companies);
    }

}