import inquirer from "inquirer"
const currency: any = { 
         USD: 1, //base currency
         EUR:0.91,
         GBP:0.76,
         INR:74.75,
         PKR:280,

};

let userAnswer = await inquirer.prompt(
   [
        {
            name:"from",
            message:"Enter from currency",
            type:"list",
            choices:["USD","EUR","GBP","INR","PKR"]

         },
        {
            name:"to",
            message:"Enter to currency",
            type:"list",
            choices:["USD","EUR","GBP","INR","PKR"]


        },
         {
            name:"amount",
            message:"Enter your amount",
            type:"number",
         }
        
    ]
);

let fromAmount = currency[userAnswer.from]     //exchange rate
let toAmount =  currency[userAnswer.to]         //exchange rate
let amount = userAnswer.amount           //usd base currency 4
let baseAmount = amount / fromAmount 
let convertedAmount = baseAmount * toAmount
console.log(convertedAmount)

