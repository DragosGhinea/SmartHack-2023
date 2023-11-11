export function filterCities(allCities, filters) {
    const viableCities = [];
  
    for (const city of allCities) {
        let isViable = true;
        const scores = city.scores;
  
        for (const [indexName, indexValue] of Object.entries(filters)) {
            if (scores[indexName] < indexValue) {
                isViable = false;
                break;
            }
        }
  
        if (isViable) {
            viableCities.push(city);
        }
    }
  
    return viableCities;
  }
