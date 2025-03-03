document.addEventListener("DOMContentLoaded", function () {
  const products = [
    { id: 1, name: "product 1", price: 35.5 },
    { id: 2, name: "product 2", price: 45.5 },
    { id: 3, name: "product 3", price: 39.5 },
  ];
  const cart = [];
  const productlist = document.getElementById("product-list");
  const cartItems = document.getElementById("cart-items");
  const emptycartMessage = document.getElementById("empty-cart");
  const carttotalMessage = document.getElementById("cart-total");
  const totalpriceDisplay = document.getElementById("total-price");
  const checkoutbtn = document.getElementById("checkout-btn");

  products.forEach(function (product) {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");

    productDiv.innerHTML = `<span>${product.name}  Rs.${product.price.toFixed(
      2
    )}</span>
    <button data-id = "${product.id}">Add to Cart</button>`;
    productlist.appendChild(productDiv);
  });

  productlist.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      const productId = parseInt(e.target.getAttribute("data-id"));
      const product = products.find((p) => p.id === productId);

      addtoCart(product);
    }
  });

  function addtoCart(product) {
    cart.push(product);
    console.log(cart);
    rendarCart();
  }

  function rendarCart() {
    cartItems.innerText = "";
    let totalprice = 0;
    if (cart.length > 0) {
      emptycartMessage.classList.add("hidden");
      carttotalMessage.classList.remove("hidden");
      cart.forEach((item, index) => {
        totalprice += item.price;
        const cartitem = document.createElement("div");
        cartitem.innerHTML = `
       ${item.name} Rs.${item.price.toFixed(2)}
       `;
       cartItems.appendChild(cartitem)
       totalpriceDisplay.textContent= `${totalprice.toFixed(2)}`
      });
    } else {
      emptycartMessage.classList.remove("hidden");
      totalpriceDisplay.textContent =` Rs.0`
    }
  }

  checkoutbtn.addEventListener("click", () => {
    cart.length = 0
    alert("checkout successfully")
    rendarCart()
    
  })
});
