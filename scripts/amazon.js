import {cart , addTocartFunctionality} from '../data/cart.js';
import { products } from '../data/products.js';

const productList = document.querySelector(".js-product-grid");
const cartQuantity=document.querySelector(".js-cart-quantity");
let innerHtml = "";



// ading products dynamicallly to the page 

products.forEach((product) => {
  innerHtml += `
  <div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src=${product.image}>
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${product.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="images/ratings/rating-${product.rating.stars * 10}.png">
            <div class="product-rating-count link-primary">
              ${product.rating.count}
            </div>
          </div>

          <div class="product-price">
            ${(product.priceCents / 100).toFixed(2)}
          </div>

          <div class="product-quantity-container">
            <select>
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button button-primary js-add-to-cart"
          data-product-id=${product.id}>
            Add to Cart
          </button>
        </div>
  `;
});

// adding products on the display
productList.innerHTML = innerHtml;


// *************************************************
//***************************************************** */

// adding functionallity ti addto cart btn


const addToCartBtns = document.querySelectorAll(".js-add-to-cart");



const updateCartQuantity=()=>{
  let totalCartQuantity=0;
  cart.forEach((cartItem)=>{
    totalCartQuantity+=cartItem.quantity;
  })
  cartQuantity.innerHTML=totalCartQuantity;
}


addToCartBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
   const {productId}=btn.dataset;

   addTocartFunctionality(productId);   
    updateCartQuantity();
  });
});
