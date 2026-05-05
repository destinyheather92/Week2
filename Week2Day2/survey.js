

let surveyForm = document.getElementById("survey-form");
let summaryDiv = document.getElementById("summary")
surveyForm.addEventListener("submit",(event) => {
    event.preventDefault(); // Prevent form submission 
    let favoriteColor = document.getElementById("fav-color").value;
    let yearsCoding = document.getElementById("years-coding").value;
    let favAnimal = document.getElementById("fav-animal").value
    let summaryText = `Your favorite color is ${favoriteColor} and you have been coding for ${yearsCoding} years & your favorite animal is a ${favAnimal}.`;
    summaryDiv.textContent = summaryText; // Display the summary
  });