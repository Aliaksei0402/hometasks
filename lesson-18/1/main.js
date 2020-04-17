const purchase = document.getElementById("purchase");
const cart = document.getElementById("cart");
let arr = [];
let constArray = [];
let amountInCart = localStorage.getItem("itemsInCart") || 0;
cart.innerText = `Товаров в корзине: ${amountInCart}`;
const clear = document.getElementById("clear");
const selectedProducts = document.getElementById("selectedProducts");
const cartDiv = document.getElementById("cartDiv");
const body = document.querySelector("body");

clear.addEventListener("click", function () {
  localStorage.clear();
});

const xhr = new XMLHttpRequest();
xhr.open("GET", "products.json", true);
xhr.onload = function () {
  const products = JSON.parse(xhr.responseText);
  arr = JSON.parse(JSON.stringify(products));
  constArray = JSON.parse(JSON.stringify(products));
  renderProducts(products);
};
xhr.send(null);

const renderProducts = function (items) {
  purchase.innerText = "";
  for (let i = 0; i < items.length; i++) {
    let itemsInStore = Number(
      localStorage.getItem(`leftInShopProdactId${i}`) || items[i].quantity
    );
    if (itemsInStore === 0) {
      purchase.insertAdjacentHTML(
        "beforeend",
        `<div class="container">
          <div class="row item">
              <div class="col-2"><img src="${items[i].img}" class="img-thumbnail"></div>
              <div class="col-3"><h2>${items[i].name}</h2></div>
              <div class="col-4">${items[i].description}</div>
              <div class="col-3">
                  <div class="quantity" num="${i}">Осталось на складе: ${itemsInStore}</div>
                  <button disabled class="addToCart" data-button="${i}">Товара больше нет на складе</button>
              </div>
          </div>
        </div>`
      );
    } else {
      purchase.insertAdjacentHTML(
        "beforeend",
        `<div class="container">
        <div class="row item">
            <div class="col-2"><img src="${items[i].img}" class="img-thumbnail"></div>
            <div class="col-3"><h2>${items[i].name}</h2></div>
            <div class="col-4">${items[i].description}</div>
            <div class="col-3">
                <div class="quantity" num="${i}">Осталось на складе: ${itemsInStore}</div>
                <button class="addToCart" idOfProduct="${i}">В козину</button>
            </div>
        </div>
      </div>`
      );
    }
  }
};

purchase.addEventListener("click", function (e) {
  if (e.target.getAttribute("class") === "addToCart") {
    cartDiv.innerText = "";
    cartDiv.classList.remove("order");
    let idOfProdact = e.target.getAttribute("idOfProduct");
    arr[idOfProdact].quantity =
      localStorage.getItem(`leftInShopProdactId${idOfProdact}`) ||
      arr[idOfProdact].quantity;
    let quantityOfProduct = arr[idOfProdact].quantity;
    if (quantityOfProduct <= 1) {
      notInStock(e.target, idOfProdact);
    } else {
      updateLocalStorageCartAndItem(e.target, idOfProdact, quantityOfProduct);
    }
  }
});

const notInStock = function (clickedProdactButton, id) {
  arr[id].quantity--;
  clickedProdactButton.innerText = `Товара больше нет на складе`;
  clickedProdactButton.setAttribute("disabled", "");
  updateLocalStorageCartAndItem(clickedProdactButton, id, 0);
  renderQuantity(clickedProdactButton, 0);
};

const updateLocalStorageCartAndItem = function (clickedProdactButton, id, qOP) {
  if (qOP === 0) {
    localStorage.setItem(`leftInShopProdactId${id}`, qOP);
    amountInCart++;
    localStorage.itemsInCart = amountInCart;
    localStorage.setItem(`addedToCartProductId${id}`, constArray[id].quantity);
  } else {
    arr[id].quantity--;
    localStorage.setItem(`leftInShopProdactId${id}`, arr[id].quantity);
    localStorage.setItem(
      `addedToCartProductId${id}`,
      constArray[id].quantity - arr[id].quantity
    );
    amountInCart++;
    localStorage.itemsInCart = amountInCart;
    qOP = arr[id].quantity;
  }
  renderQuantity(clickedProdactButton, qOP);
};

const renderQuantity = function (clickedProdactButton, qOP) {
  const elem = document.querySelector(
    `div[num="${clickedProdactButton.getAttribute("idOfProduct")}"]`
  );
  elem.outerHTML = `<div class="quantity" num="${clickedProdactButton.getAttribute(
    "idOfProduct"
  )}">Осталось на складе: ${qOP}</div>`;
  cart.innerText = `Товаров в корзине: ${localStorage["itemsInCart"]}`;
};

selectedProducts.addEventListener("click", function () {
  cart.insertAdjacentHTML("afterend", `<div id="contextmenu"></div>`);
});

selectedProducts.addEventListener("click", function () {
  cartDiv.classList.add("order");
  cartDiv.innerText = "";
  let noOrders = 0;
  for (let i = 0; i < arr.length; i++) {
    if (localStorage["addedToCartProductId" + i] === undefined) {
      noOrders++;
    } else if (arr[i].quantity === 0) {
      cartDiv.insertAdjacentHTML(
        "beforeend",
        `<div>${arr[i].name} x ${constArray[i].quantity}</div>`
      );
    } else {
      cartDiv.insertAdjacentHTML(
        "beforeend",
        `<div>${arr[i].name} x ${
          localStorage["addedToCartProductId" + i]
        }</div>`
      );
    }
  }
  if (noOrders === arr.length) {
    cartDiv.innerText = "Нет заказов";
  }
  body.addEventListener("click", function (e) {
    if (e.target.getAttribute("id") !== "selectedProducts") {
      cartDiv.innerText = "";
      cartDiv.classList.remove("order");
    }
  });
});
