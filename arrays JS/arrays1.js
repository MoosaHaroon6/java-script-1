
function task1forloop() {
    let qualifications = ["SSC", "HSC", "BS", "BCOM", "MS", "MPHIL", "PHD"]
    let index = 0;
    for (let i = 0; i < qualifications.length; i++) {
        document.write(`
     <ol><li>${qualifications[index++]}</li></ol>
    `);
    }
}


function task1noloop() {
    let i = 0;
    document.write("<ol>");
    document.write("<li>" + qualifications[i++] + "</li>");
    document.write("<li>" + qualifications[i++] + "</li>");
    document.write("<li>" + qualifications[i++] + "</li>");
    document.write("<li>" + qualifications[i++] + "</li>");
    document.write("<li>" + qualifications[i++] + "</li>");
    document.write("<li>" + qualifications[i++] + "</li>");
    document.write("<li>" + qualifications[i++] + "</li>");
    document.write("<li>" + qualifications[i++] + "</li>");
    document.write("</ol>");
    // 
    // 
}

// 
// let qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil", "PhD"];
// 
// let lastIndex = qualifications.length - 1
// 
// qualifications[lastIndex]
// 
// document.write (qualifications)



function task2() {
    document.write("<h1>TOP MOVIES</h1>");
    let movies = ["Avngers: Age of Ultron", "Batman vs Superman", "Iron Man 2", "End Game"]
    let i = 0;

    document.write("<ol>")
    document.write("<li>" + movies[i++] + "</li>");
    document.write("<li>" + movies[i++] + "</li>");
    document.write("<li>" + movies[i++] + "</li>");
    document.write("<li>" + movies[i++] + "</li>");
    document.write("</ol>");
    // for (let index = 0 ; i <movies.length ; i++){
    // Document.write (`
    // <ol><li>${movies[]}</li></ol>
    // `)
    // }
}

function taskk3() {
    let myFavCars = ["Audi R8", "BMW V12", "Lamborghini Aventedor",
        "Vezel", "Porsche", "Sunata"];
    console.log(myFavCars[2]);
    console.log(myFavCars[1]);
    console.log(myFavCars[0]);
    console.log(myFavCars[4]);
    console.log(myFavCars[3]);
    console.log(myFavCars[5]);
}









let studentsName = ["Moosa", "Usman", "Saad"];
let studentScores = [475, 480, 483];
let totalMarks = 500;
let i = 0;
let percentage = (studentScores / totalMarks * 100);

console.log("Score Of " + studentsName[0] + " is " + studentScores[0] +
    " And Percentage Is " + percentage[0]);
    console.log("Score Of " + studentsName[1] + " is " + studentScores[1] +
    " And Percentage Is " + percentage[1]);
console.log("Score Of " + studentsName [2]+ " is " + studentScores[2] +
    " And Percentage Is " + percentage[2]);

// console.log(`
// Socre of ${studentsName} is ${studentScores} and he secured ${percentage}
// `);

// console.log(percentage);

// console.log(475/500*100);
