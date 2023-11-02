let bgcontainer = document.createElement("div");
bgcontainer.classList.add("container");
document.body.appendChild(bgcontainer); 


let headingElement = document.createElement("h1");
headingElement.classList.add("heading")
headingElement.textContent = "grocery list";
bgcontainer.appendChild(headingElement);



let listcontainer = document.createElement("ul");
listcontainer.classList.add("listcontainer1");
bgcontainer.appendChild(listcontainer);

groceryitems = ["milk","water","drinks","choclate","butter"]

for (let groceryitem of groceryitems){
let uncontainer = document.createElement("li");
uncontainer.textContent = groceryitem;
listcontainer.appendChild(uncontainer);
}


let checkbox = document.createElement("input");
checkbox.type = "checkbox";
checkbox.id = "deliverymode";
bgcontainer.appendChild(checkbox);


let setlabel = document.createElement("label");
setlabel.setAttribute("for", "deliverymode");
setlabel.classList.add("delivery-text");
setlabel.textContent = "Need home delivery";
bgcontainer.appendChild(setlabel);


let breakelement = document.createElement("br");
bgcontainer.appendChild(breakelement);


let buttonelement = document.createElement("button");
buttonelement.classList.add("btn","btn-primary");
buttonelement.textContent = "proceed to pay";
bgcontainer.appendChild(buttonelement); 