//declare default options

let cart1 = {name: "bread"};
let cart2 = {name: "milk"};
let cart3 = {name: "honey"};
let cart4 = {name: "turkey breast"};
let cart5 = {name: "lettuce"};
let cart6 = {name: "chips"};


// declare an array of the items

let foods = [cart1, cart2, cart3, cart4, cart5, cart6];

// create a current state of items
let state = {
    pageHeader: "Cart Items",
    foods: [cart1, cart2, cart3, cart4, cart5, cart6],
};

function clickList() {

  cItems = document.getElementById("cartItem");
  cItems.forEach(item) {
  
  }

}

function renderOpts() {
    cartStr = "";
    state.foods.forEach(function (name, index) {
      cartStr += `<div> ${foods.name}<br />
        <span data-index='${index}' onclick='addToList(this)'>Update</span>
        </div>`;
    });
    return cartStr;

}

function addList() {

}

function renderList() {


}