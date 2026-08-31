"use strict";
// // Topic: 01 (Primitive Types: String, Number, Boolean, Null, Undefined, Symbol, BigInt)
// let userName: string = 'Tusar';
// let experience: number = 4;
// let isFreelancing: boolean = false;
// const calculateDiscount = (price: number, discountPercent: number): number => {
//     return price - (price * discountPercent / 100);
// }
// const discountedPrice = calculateDiscount(100, "10%");
// console.log(discountedPrice);
// const calculateDiscount1 = (price: any, discountPercent: any): any => {
//     return price - (price * discountPercent / 100);
// }
// const discountedPrice1 = calculateDiscount1(100, "10%");
// console.log(discountedPrice1);
function greetUser(name, greeting = "Hello", role) {
    if (role) {
        return `${greeting}, ${name} (${role})!`;
    }
    return `${greeting}, ${name}!`;
}
const message = greetUser("Tusar", "Welcome to TypeScript!", 'Web Developer');
console.log(message);
