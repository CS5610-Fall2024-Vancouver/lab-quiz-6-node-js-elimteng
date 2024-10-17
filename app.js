"use strict";
console.log("Hello World");

"use strict";

const express = require("express"); // Import Express
const app = express(); // Create an Express application

const PORT = process.env.PORT || 8000; // Set the port number

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
