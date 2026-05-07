const books = [
  { title: "Atomic Habits", author: "James Clear" },
  { title: "Educated", author: "Tara Westover" },
  { title: "The Mountain Is You", author: "Brianna Wiest" },
  { title: "Becoming", author: "Michelle Obama" },
  { title: "Beautiful Disaster", author: "Jamie McGuire" },
  { title: "Crank", author: "Ellen Hopkins" },
  { title: "The Hunger Games", author: "Suzanne Collins" },
];
function renderBooks(bookArray) {
  const list = document.getElementById("book-list");

  for (const book of bookArray) {
    //   const li = document.createElement("li");
    //   li.textContent = `${book.title} -- ${book.author}`;
    //   list.appendChild(li);
    const li = document.createElement("li");

    const strong = document.createElement("strong");
    strong.textContent = book.title;

    const authorText = document.createTextNode(` -- ${book.author}`);

    li.appendChild(strong);
    li.appendChild(authorText);

    list.appendChild(li);
  }
}
renderBooks(books);



//Exercise 4 : 
