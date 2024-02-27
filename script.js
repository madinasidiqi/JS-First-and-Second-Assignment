
// JS First Assignment

//  First Answer.................


// let numNeighbours = prompt("How many neighbour countries does your country have?");

// //  Second Answer...............


// if(numNeighbours==1)

// {
//     console.log("only 1 border");

// }
// // Third Answer...............


// else if(numNeighbours>1)
// {
//     console.log("more than 1 border");

// }

// // Fourth Answer..............

// else
// {
//     console.log("no borders");

// }

// //  5th Answer...............


// if( numNeighbours===1)

// {
//     console.log("only 1 border");

// }

// //  6th Answer...............


// if(Number(numNeighbours)===1)

// {
//     console.log("only 1 border");

// }

//  7th Answer...............

// bucase the prompt box retuens string,and === compares the value and datatype so we need conversion.


// Logical Operators


// 3th and 4th  Answer...........

// let contry = "Afg"
// let language ="Dari";
// let population =30;
// let island= false;

// if(language =="Eng" && population < 50 && island == false)
// {
//     console.log("you should live in " + contry);
// }
// else
// {
//     console.log(contry + " does not meet your criteria");

// }

// // 5th  Answer...........

//  contry = "Canada"
//  language ="Eng";
//  population =30;
//  island= false;

// if(language =="Eng" && population < 50 && island == false)
// {
//     console.log("you should live in " + contry);
// }
// else
// {
//     console.log(contry + " does not meet your criteria");

// }


// switch stetment

// let language = "mandarin";

// switch(language)
// {
// case "chinese": case "mandarin": 
// console.log("Most number of native speakers");
// break;
// case "spanish":
// console.log("2nd place number of native speakers");
// break;
// case "english":
// console.log("3rd place ");
// break;
// case "hindi":
// console.log("number 4");
// break;
// case "arabic":
// console.log("5th most spoken language ");
// break;
// default:
//     console.log("great language too");
//     break;
// }

//-------------------------------------------------------------------------------

// JS Second Assignment

//Lecture: Functions

// Part 1
// function describeCountry(contry, population, capitalcity)
// {
//    return contry + " has "+ population + " milion population and its capital city is " +capitalcity
// }

// // the part is fully dynamic and it is extra work by myself 
// let contry= prompt("enter your contry");
// let pop= prompt("enter the population");
// let capital= prompt("enter the capital");
//console.log(describeCountry(contry, pop, capital));

// part 2
//  let afgInfo = describeCountry("Afg", 30, "kabul");
//  let pkInfo = describeCountry("Pak", 20, "Islamabad");
//  let indiaInfo = describeCountry("india", 360, "Delhi");

//  console.log(afgInfo);
//  console.log(pkInfo);
//  console.log(indiaInfo);

//Lecture: Functions declarition vs expression 

//Question 1, 2 and 3
// function percentageOfWorld1(population){
// return (Number(population) * 100) / 7900 ; 
// }
// console.log("Chaina Percentage is : " + percentageOfWorld1(1441)); 
// console.log("Chaina Percentage is : " + percentageOfWorld1(1441)); 
// console.log("India Percentage is : " + percentageOfWorld1(360)); 

// question 4

// let Demo= function percentageOfWorld2(population) {
//     return (Number(population) * 100) / 7900 ; 
// }

// console.log("Chaina Percentage is : " + Demo(1441)); 
// console.log("Chaina Percentage is : " + Demo(1441)); 
// console.log("India Percentage is : " + Demo(360)); 

//  introduction to Array

//question 1 and 2
// let pops = [30, 40 , 1441, 360];

// if(pops.length == 4)
// {
//     console.log(true);
// }
// else{
//     console.log(false);
// }

// question 3 

// let Percentages= [1441, 360 , 30 , 25]
// console.log("Chaina Percentage is : " + percentageOfWorld1(Percentages[0]));
// console.log("India Percentage is : " + percentageOfWorld1(Percentages[1]));
// console.log("Afg Percentage is : " + percentageOfWorld1(Percentages[2]));
// console.log("Pak Percentage is : " + percentageOfWorld1(Percentages[3]));


// Lecture Basic Array operations:

// let Neighbours = ["Tajikistan", "Uzbakistan" , "Iran"];

// Neighbours.push("Utopia");

// Neighbours.pop();

// if(!Neighbours.includes("Germany")){
//     console.log("Probably not a central europian contry")
// }

// let iranindex = Neighbours.indexOf("Iran");
// Neighbours[iranindex] = "Pakistan";
// console.log(Neighbours);


//Lecture introduction to object

let myCountry  ={
    country : "Afghanistan", 
    capital: "Kabul", 
    Language: ["Dari", "Pashto"], 
    population:30, 
    Neighbours:["Pakistan", "Iran", "Tajikstan", "Uzbakistan"]
}
