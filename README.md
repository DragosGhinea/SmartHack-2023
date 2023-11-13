# SmartHack-2023
* 24 hours hackathon

### Team

* Name: WhileTrue
* Members:
   - Ancuța Andrei
   - Ghinea Dragoș-Dumitru
   - Putineanu Bogdan
   - Rîncu Ștefania

### Theme
Build a tool on top of Veridion APIs that has at least one layer of data interpretation and solves a relevant business case

## Our Idea

An application that helps people who need or want to relocate themselves by providing possible cities and companies that match their profile.

### What are we trying to offer

* Saving time for people that are considering relocation and have to do a lot of research beforehand.

* Potentially exposing professional opportunities a person would not be aware of having, by suggesting them some companies that are processed from their profile instead of simply providing a criteria filter.

### Implementation

For this project we relied on 3 APIs:
  - [Veridion](https://veridion.com/) - Companies information
  - [Teleport.org](https://developers.teleport.org/api/) - Life quality data information for cities
  - [OpenAI](https://openai.com/) - Processing the user's CV content and "Describe yourself" section into keywords that would help our companies search

For the implementation of this idea, we only built a frontend using React with MaterialUI (to save time) that would handle the external API requests. For Veridion, we had to setup a proxy since accessing it directly from a browser is not allowed. For the Teleport.org API, we cached some request results in json format, so we wouldn't spam their server during our intensive testing from the hackathon. Normally, for very up to date information, direct API calls should be used instead.


### Technical Flow

![FlowDiagram](https://github.com/DragosGhinea/SmartHack-2023/blob/main/FlowDiagram.svg)


As you can see in the above diagram, we take two types of input from the user.

**Professional and personal information** - An uploaded CV and a personal description, or even a professional one, that can be an addition or a substitute for the CV.

**Life quality data** - Through sliders with scores from 0-10 we let the user set preferences for how much a property that the slider expresses is of importance to them. 0 meaning that the user doesn't really care and 10 being of maximum importance for the person.

After extracting this data, two **processes** take place:
  - Through OpenAI we extract from the first type of input 10 industries that best match the person, which will be used later for matching companies in Veridion's API.
  - Through Teleport.org we select the cities that match the life quality preferences of the user, which will also be applied as filters for company fetching in Veridion's API.

Finally, we can **search** for companies in Veridion's API and do a last **processing** to group companies based on cities and also limit the number of companies per city. After that, we can display the final companies information along with the cities' scores.

## Screenshots
Since the API keys no longer work after the hackathon, we present the following screenshots taken from a CV search.

![AppScreenshot1](https://github.com/DragosGhinea/SmartHack-2023/blob/main/AppScreenshot1.png)

![AppScreenshot2](https://github.com/DragosGhinea/SmartHack-2023/blob/main/AppScreenshot2.png)

![AppScreenshot3](https://github.com/DragosGhinea/SmartHack-2023/blob/main/AppScreenshot3.png)
