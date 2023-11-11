import { searchCompanies } from "./companySearch";
import { filterCities } from "./filterCities";
import cities from "./cities";

export async function workflow(gpt_input)
{
    // gpt the input => keywords
    // get filters from frontend
    console.log(gpt_input);
    const keywords = ["Software development", "Information technology and services", "Data analysis", "Web development", "Machine Learning and Artificial Intelligence", "Computer Software", "Computer programming", "Database Administration", "3D Modeling", "Education and E-learning"];
    const filters = {"Housing": 7,
                "Cost of Living": 7,
                "Commute": 5,
                "Safety": 6,
                "Healthcare": 5};
    const viableCities = filterCities(cities, filters);
    console.log(viableCities);
    for(const city of viableCities)
    {
        location = {"country": city.country, "city": city.name};
        const companies = await searchCompanies(keywords, location);
        console.log(companies);
    }

}