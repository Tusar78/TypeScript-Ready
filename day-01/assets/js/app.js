"use strict";
// // // Topic: 01 (Primitive Types: String, Number, Boolean, Null, Undefined, Symbol, BigInt)
// // let userName: string = 'Tusar';
// // let experience: number = 4;
// // let isFreelancing: boolean = false;
// // const calculateDiscount = (price: number, discountPercent: number): number => {
// //     return price - (price * discountPercent / 100);
// // }
// // const discountedPrice = calculateDiscount(100, "10%");
// // console.log(discountedPrice);
// // const calculateDiscount1 = (price: any, discountPercent: any): any => {
// //     return price - (price * discountPercent / 100);
// // }
// // const discountedPrice1 = calculateDiscount1(100, "10%");
// // console.log(discountedPrice1);
// function greetUser(
//   name: string,
//   greeting: string = "Hello",
//   role?: string,
// ): string {
//   if (role) {
//     return `${greeting}, ${name} (${role})!`;
//   }
//   return `${greeting}, ${name}!`;
// }
// const message = greetUser("Tusar", "Welcome to TypeScript!", "Web Developer");
// console.log(message);
// // Webflow API call Helper Example
// const fetchWebflowData = (
//   category: string,
//   limit: number = 10,
//   sortBy?: string,
// ): string => {
//   return `${limit} items fetched from ${category} ${sortBy ? `sorted by ${sortBy}` : ""}`;
// };
// const webflowData = fetchWebflowData("Portfolio", 5, "price");
// console.log(webflowData);
// // when return type void
// const logAnimation = (animationName: string): void => {
//   console.log(`Animation ${animationName} started.`);
// }
// logAnimation("FadeIn");
// // First Problem
// const formatPrice = (amount: number, currency : string = '$'): string => {
//     return `${currency}${amount.toFixed(2)}`;
// }
// const fruitPrice = formatPrice(10.5, '€');
// console.log(fruitPrice);
// // Second Problem
// const logError = (message: string): void => {
//     console.log(`Error: ${message}`);
// };
// logError("An unexpected error occurred.");
// // Third Problem
// const applyToNumbers = (numbers: number[], callback: (n : number) => number): number[] => {
//     return numbers.map(callback);
// }   
// const numbers = [1, 2, 3, 4, 5];
// const squaredNumbers = applyToNumbers(numbers, (n) => n * n);
// console.log(squaredNumbers);
// // Fourth Problem (My Creative Problem)
// const applyToString = (numbers: string[], callback: (n : string) => string): string[] => {
//     return numbers.map(callback);
// };
// const flower = ['Rose', 'Tulip', 'Lily', 'Daisy', 'Sunflower'];
// const squareNumbers = applyToString(flower, (n) => n + ' is a beautiful flower');
// console.log(squareNumbers);
// let skills: string[] = ['JavaScript', 'TypeScript', 'React', 'Node.js'];
// let scores: number[] = [85, 90, 95, 80];
// let anotherSkills: Array<string> = ['JavaScript', 'TypeScript', 'React', 'Node.js'];
// let userInfo: [string, number, string] = ['Tusar', 123456789, 'Jannat'];
// console.log(userInfo);
// const getAverageScore = (scores: number[]): number => {
//     const total = scores.reduce((acc, score) => acc + score, 0);
//     return total / scores.length;
// }
// const averageScore = getAverageScore(scores);
// console.log(`Average Score: ${averageScore}`);
// const useToggle = (initial : number): [number, () => void] => {
//     let state = initial;
//     const toggle = () => state = ++state;
//     return [ state, toggle];
// }
// const [result, toggle] = useToggle(10);
// console.log(toggle());
// const num: [number, number] = [10, 20];
// num.push(30); // This is allowed because push does not violate the tuple's fixed length
// console.log(num.length);
// Problem One
// const getTopSkills = (skills: string[]): string => {
//     let bigString: string = '';
//     skills.map(skill => {
//         if (bigString.length < skill.length) {
//             bigString = skill;
//         }
//     });
//     return bigString;
// }
// let skills: string[] = ['JavaScript', 'Next.js', 'React', 'Node.js', 'Python', 'C++'];
// const topSkills = getTopSkills(skills);
// console.log(topSkills); 
// // Problem Two
// const createCordinate = (x: number, y: number): [number, number] => {
//     return [x, y];
// }
// const cordinate = createCordinate(10, 20);
// console.log(cordinate); 
// // Problem Three
// const parseFullName = (fullName: string): [string, string] => {
//     const [firstName, lastName] = fullName.split(' ');
//     return [firstName, lastName];
// }
// const fullName = "Tusar Ali";
// const [firstName, lastName] = parseFullName(fullName);
// console.log(`First Name: ${firstName}, Last Name: ${lastName}`);
// type Status = "loading" | "success" | "error"; 
// type ID = string | number;
// const fetchData = (id: ID): Status => {
//     if (typeof id === "string") {
//         console.log(`Fetching data for string ID: ${id}`);
//     } else {
//         console.log(`Fetching data for numeric ID: ${id}`);
//     }
//     // Simulating a fetch operation
//     return "success";
// }   
// const result1 = fetchData("abc123");
// console.log(result1);   
// // Problem One
// type Address = {
//     street: string,
//     city: string,
// }
// interface Company {
//     name: string,
//     address: Address,
// }
// const company: Company = {
//     name: "Innovation Teach",
//     address: {
//         street: "Dhaka, Bangladesh",
//         city: "Mirpur-7"
//     }
// };
// console.log(`Company Name: ${company.name}`);
// // problem Two
// interface Vehicle {
//     brand: string;
// }
// interface Car extends Vehicle {
//     doors: string;
// }
// const myCar: Car = {
//     brand: "Toyota",
//     doors: "4"
// };  
// console.log(`Car Brand: ${myCar.brand}, Doors: ${myCar.doors}`);
// // Problem Three
// type Theme = "light" | "dark" | "colorful";
// const applyTheme = (theme: Theme): string => {
//     if (theme === "light") {
//         return "Applying light theme";
//     } else if (theme === "dark") {
//         return "Applying dark theme";
//     } else {
//         return "Applying colorful theme";
//     }
// }
// const themeMessage = applyTheme("dark");
// console.log(themeMessage);  
// Problem One
const formatValue = (value) => {
    if (typeof value === 'number') {
        return `The number is ${value.toFixed(2)}`;
    }
    else {
        return `The string is "${value.toUpperCase()}"`;
    }
};
const formattedNumber = formatValue(123.456);
console.log(formattedNumber);
const formattedString = formatValue("tusar love to Jannat");
console.log(formattedString);
const getArea = (shape) => {
    if (shape.kind === "circle") {
        return Math.PI * (shape.radius * shape.radius);
    }
    else if (shape.kind === "rectangle") {
        return shape.width * shape.height;
    }
    else {
        throw new Error("Unknown shape");
    }
};
const circleArea = getArea({ kind: "circle", radius: 5 });
console.log(`Circle Area: ${circleArea.toFixed(2)}`);
const rectangleArea = getArea({ kind: "rectangle", width: 10, height: 5 });
console.log(`Rectangle Area: ${rectangleArea.toFixed(2)}`);
