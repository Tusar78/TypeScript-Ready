"use strict";
// // // Topic: 01 (Primitive Types: String, Number, Boolean, Null, Undefined, Symbol, BigInt)
const company = {
    name: "Innovation Teach",
    address: {
        street: "Dhaka, Bangladesh",
        city: "Mirpur-7"
    }
};
console.log(`Company Name: ${company.name}`);
const myCar = {
    brand: "Toyota",
    doors: "4"
};
console.log(`Car Brand: ${myCar.brand}, Doors: ${myCar.doors}`);
const applyTheme = (theme) => {
    if (theme === "light") {
        return "Applying light theme";
    }
    else if (theme === "dark") {
        return "Applying dark theme";
    }
    else {
        return "Applying colorful theme";
    }
};
const themeMessage = applyTheme("dark");
console.log(themeMessage);
