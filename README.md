# <div align="center">GoIT - HW 8 - Raport</div>

<p align="center">JSON and JavaScript</p>

---

## <div align="center">Task 1</div>

> Analysis of user.json file (Specifying key: value pair and data type of each value and representing overall JSON file structure)

Provided [JSON file](./user.json):

![user.json file](./imageFiles/Code%20I%20HW%208%20I%20Task%201%20AI.png)

Using JSON data from user.json as a JS object to comment (JSON files doesn't allow comments)

![user.json data commented](./imageFiles/Code%20I%20HW%208%20I%20Task%201%20BI.png)

JSON (Java Script Object Notation) <br>
file structure starts with curly brackets {} that opens and closes the structure, after opening the curly bracket in a new line we start to write a key which is used to access its value, all key should be write in double quotes and have a colon after end,
the value should be written in corresponding data-type syntax, space between colon and value is necessary, and after it, if we have another key: value pair a colon should be placed.
Note: JSON doesn't allow trailing commas at the last key: value pair

## <div align="center">Task 2</div>

> Analysis of JSON.parse() method

Creating a JS Object from JSON data string

![Task 2 JSON.parse() method](./imageFiles/Code%20I%20HW%208%20I%20Task%202%20I.png)

JS Object that was created using the JSON.parse() method corresponds its properties and values with the keys and their values from the JSON string, which can be seen in Node.js Terminal output

[script.js file](./scriptTask2.js)

## <div align="center">Task 3</div>

> Parsing invalid JSON string, using `try…catch` to handle errors
