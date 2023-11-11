import './App.css';
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import { workflow } from './workflow.js';


function App() {
  React.useEffect(() => {
        const CVData = `EDUCAȚIE
Bogdan Putineanu 
Matematică și Informatică, UNIBUC
Licență anul 2
Media pe ultimul an: 9,93 
call 0770941785
mail_outline bogdanputineanu@gmail.com
“ I love competition, puzzles, good lyrics and the feeling of
improving at something. I appreciate people that give me new
insights. ”
Aptitudini
fast learning, algorithmics, python, c++, oop 
Limbi străine
Engleza 
Pasiuni
Video games, Rap music, Team sports 
Cursuri preferate:
Data Structures (efficiency addict), Computer Architecture, Advanced
Algorithms 
2021 - Prezent 
University of Bucharest 
Specializarea: IT 
EXPERIENȚĂ
PROIECTE ȘI ACTIVITĂȚI EXTRAȘCOLARE
March 2022
Categorisation of words in natural language
For a NLP hackaton, we trained a model that puts words into a few given
categories (names, places, dates etc.) using python's spacy module. As we all
severely lacked experience, we mainly participated for learning purposes,
although the result was good enough (#13 out of 40 something teams).
July 2022
Web scraping of sports betting odds
For a personal project, I wrote a python script using Selenium that gets all
football prematch betting odds from 2 gambling sites. I also used pandas and
pickle to save and present it in an useful manner. This information can be very
useful for various betting strategies.
January 2023
Automatic analysis of student assignments
For an university project (for Malardalens Hogskola), we created a program
that allows teachers to create custom tests in order to automatically grade
students' programming assignments. I played major parts in choosing
software architecture, creating a responsive UI (using python's Tkinter) and
integrating Canvas' API (using python's requests), the web platform the
university uses for managing courses and grading. I had to learn from scratch
how to create a GUI and how to work with API calls, as I lacked prior
experience, and I'm happy with the result.
December 2022
Monitoring of room conditions
For an university project, we created a very basic IOT system that monitors
room conditions (light intensity, temperature, existence of fire) and beeps in
case of alarm. For this, we programmed an ESP32 microcontroller using the
Arduino IDE and a bunch of sensors. We also displayed this information on a
web page built with Node-RED, the information being sent using the MQTT
protocol.
2021-2023
A LOT of university stuff
• implementations of many algorithms (sorting, geometrics, formal automatas
etc., mostly in C++)
• a recursive sudoku solver in Assembly x86 AT&T (painful)
• a RISC-V machine code interpreter in python
• a simple games tutorial website using Node.js and plain html + css +
javascript
• a simple database simulating a restaurant business
• OOP system simulating an university using C++
• others`
    console.log(CVData);
    workflow(CVData);
  }, []);
//   React.useEffect(() => {
//     const CVData = `EDUCAȚIE
// Bogdan Putineanu 
// Matematică și Informatică, UNIBUC
// Licență anul 2
// Media pe ultimul an: 9,93 
// call 0770941785
// mail_outline bogdanputineanu@gmail.com
// “ I love competition, puzzles, good lyrics and the feeling of
// improving at something. I appreciate people that give me new
// insights. ”
// Aptitudini
// fast learning, algorithmics, python, c++, oop 
// Limbi străine
// Engleza 
// Pasiuni
// Video games, Rap music, Team sports 
// Cursuri preferate:
// Data Structures (efficiency addict), Computer Architecture, Advanced
// Algorithms 
// 2021 - Prezent 
// University of Bucharest 
// Specializarea: IT 
// EXPERIENȚĂ
// PROIECTE ȘI ACTIVITĂȚI EXTRAȘCOLARE
// March 2022
// Categorisation of words in natural language
// For a NLP hackaton, we trained a model that puts words into a few given
// categories (names, places, dates etc.) using python's spacy module. As we all
// severely lacked experience, we mainly participated for learning purposes,
// although the result was good enough (#13 out of 40 something teams).
// July 2022
// Web scraping of sports betting odds
// For a personal project, I wrote a python script using Selenium that gets all
// football prematch betting odds from 2 gambling sites. I also used pandas and
// pickle to save and present it in an useful manner. This information can be very
// useful for various betting strategies.
// January 2023
// Automatic analysis of student assignments
// For an university project (for Malardalens Hogskola), we created a program
// that allows teachers to create custom tests in order to automatically grade
// students' programming assignments. I played major parts in choosing
// software architecture, creating a responsive UI (using python's Tkinter) and
// integrating Canvas' API (using python's requests), the web platform the
// university uses for managing courses and grading. I had to learn from scratch
// how to create a GUI and how to work with API calls, as I lacked prior
// experience, and I'm happy with the result.
// December 2022
// Monitoring of room conditions
// For an university project, we created a very basic IOT system that monitors
// room conditions (light intensity, temperature, existence of fire) and beeps in
// case of alarm. For this, we programmed an ESP32 microcontroller using the
// Arduino IDE and a bunch of sensors. We also displayed this information on a
// web page built with Node-RED, the information being sent using the MQTT
// protocol.
// 2021-2023
// A LOT of university stuff
// • implementations of many algorithms (sorting, geometrics, formal automatas
// etc., mostly in C++)
// • a recursive sudoku solver in Assembly x86 AT&T (painful)
// • a RISC-V machine code interpreter in python
// • a simple games tutorial website using Node.js and plain html + css +
// javascript
// • a simple database simulating a restaurant business
// • OOP system simulating an university using C++
// • others`


// //workflow(CVData);
//   }, []);
  return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
      <Stack spacing={3} direction="row">
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>
    </Box>
  );
}

export default App;
