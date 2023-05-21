let addToy = false;

/*
Access the list of toys from an API (mocked using JSON Server) and render each of them in a "card" on the page

Hook up a form that enables users to add new toys. Create an event listener so that, when the form is submitted, the new toy is persisted to the database and a new card showing the toy is added to the DOM

Create an event listener that gives users the ability to click a button to "like" a toy. When the button is clicked, the number of likes should be updated in the database and the updated information should be rendered to the DOM

json-server --watch db.json

*/

function createCardElement(toy) {
  let card = document.createElement("div")
  card.classList.add("card")

let h2 = document.createElement("name")
h2.textContent = toy.name

let img = document.createElement("img")
img.src = toy.image
img.class = classList.add("toy_avatar")

let p = document.createElement("p")
p.textContent = `$${toy.likes} Likes`

let button = document.createElement("button")
button.classList.add("like-btn")
button.id = toy.id
button.textContent = "Like ❤️"

card.append(h2, img, p, button)
document.getElementById("toy-collection").appendChild(card)


}


document.addEventListener("DOMContentLoaded", () => {
  fetch("http://localhost:3000/toys")
  .then(response => response.json())
  .then(toys => toys.forEach(toy => createCardElement(toy)))
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});
