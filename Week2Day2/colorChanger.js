const boxes = document.querySelectorAll(".box");

//This is the randomizer which generates a random hexadecimal number. Hexadecimal utilizes a-f(case insensitive) and 0-9. So I inputted those values into an array and then created an array called generatedRandomColor which includes a hashtag. Using the while loop, I set the condition to the length of my created array. (Basically, it will run while the length of the array is less then 7 once it reaches 7 it stops.)
randomizer = () => {
  const hexaDecimal = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
  ];
  const generatedRandomColor = ["#"];

  while (generatedRandomColor.length < 7) {
    //using Math.floor(Math.random() * hexaDecimal.length), Im generating a random number and using that random number as an index for the hexadecimal array. The value is then pushed into the generated Random color array.

    const randomizer =
      hexaDecimal[Math.floor(Math.random() * hexaDecimal.length)];
    generatedRandomColor.push(randomizer);
  }
  return generatedRandomColor.join("");
};

boxes.forEach(function (box) {
  // Add a click event to EACH box
  box.addEventListener("click", function (e) {
    // Generate a random color
    const newColor = randomizer();
    const bodyColor = randomizer();

    // Change ONLY the clicked box's background
    e.target.style.backgroundColor = newColor;
    document.body.style.backgroundColor = bodyColor;
  });
});
