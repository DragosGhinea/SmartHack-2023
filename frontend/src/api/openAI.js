import axios from 'axios'

const apiKey = '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';

export async function getIndustryKeywords(inputContent) {
    try {
        const response = await axios.post('https://api.openai.com/v1/chat/completions', {
            model: 'gpt-4',
            messages: [
                { role: 'system', content: "You are a custom assistant. You receive from a user a text that is his description or something similar to a resume. " +
                    "In that text he presents some of his skills, projects, interests, maybe previous jobs or education." +
                    "From all of those information, I want you to provide me a list of industries where that user would fit best. That list should be " +
                    "ordered by the relevance of each industry based on the user description. That user wants to search for companies using a list of keywords " +
                    "that represent industries. Examples are 'consultancy', 'software development', 'outsourcing firm'. I want you to write only 10 list items," +
                    "between quotes. Add no other text or explanations. Make sure to suggest synonyms and variants of the same keywords, to catch all variations of " +
                    "industries with the same meaning." },
                { role: 'user', content: `Suggest a list of 10 items that contain keywords for the industries which fit the best for this resume: ${inputContent}` },
            ],
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`,
            },
        });

        return response.data.choices[0].message.content;
    } catch (error) {
        console.error('Error:', error.message);
        return null;
    }
}

export default getIndustryKeywords;

// // Assuming you have a function to read PDF content in JavaScript
// // You can replace the following line with your own PDF reading logic
// const pdfContent = "Your PDF content here";

// getIndustryKeywords(pdfContent)
//     .then(industryKeywordsResponse => {
//         const responseData = {
//             industryKeywordResponse: industryKeywordsResponse,
//         };

//         const outputFilePath = 'response.json';
//         const fs = require('fs');
//         fs.writeFileSync(outputFilePath, JSON.stringify(responseData, null, 2));

//         console.log(industryKeywordsResponse);
//     })
//     .catch(error => console.error('Error:', error.message));
