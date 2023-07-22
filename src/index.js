let addToy = false;
const API = "http://localhost:3000/toys";

/*
Access the list of toys from an API (mocked using JSON Server) and render each of them in a "card" on the page

Hook up a form that enables users to add new toys. Create an event listener so that, when the form is submitted, the new toy is persisted to the database and a new card showing the toy is added to the DOM

Create an event listener that gives users the ability to click a button to "like" a toy. When the button is clicked, the number of likes should be updated in the database and the updated information should be rendered to the DOM

json-server --watch db.json

*/

function renderCard(toy) {
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
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  const toyForm = document.querySelector(".add-toy-form")

  toyForm.addEventListener("submit", (e) => {
      e.preventDefault()
      const data = Object.fromEntries(new FormData(e.target))
      data.likes = 0
      fetch(API, {
        method: "POST", 
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(data)
      })
      .then((resp) => resp.json())
      .then((data) => renderCard(data))
  })


  fetch(API)
  .then((response) => response.json())
  .then(renderToys)


  function renderToys(toyList){
    

    toyList.forEach((toy) => {
        const card = document.createElement("div")
        card.classList.add("card")
        
        const img = document.createElement("img")   
        img.classList.add("toy-avatar")
        img.src = toy.image   

        const h2 = document.createElement("h2")
        h2.textContent = toy.name

        const p = document.createElement("p")
        p.textContent = `${toy.likes} Likes`

        const button = document.createElement("button")
        button.classList.add("like-btn")
        button.setAttribute("id", `${toy.id}`)
        button.textContent = "Like ❤️"

        card.append(h2, img, p, button)
        
        document.querySelector("#toy-collection").appendChild(card)
    })
  }

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