import {
  cart,
  removeProductFromCart,
  updateDelivaryoption,
} from "../../data/cart.js";
import { products ,getProduct } from "../../data/products.js";
import { formatCurrency } from "../utils/money.js";
import dayjs from "https://unpkg.com/dayjs@1.11.10/esm/index.js";
import { deliverOptions, getDeliveryOption } from "../../data/deliveryOptions.js";
import { paymentSummery } from "./pricing.js";

// setting thre dillivary date

const deliveryOptionHtml = (matuchingProduct, cartItem) => {
  let html = "";

  deliverOptions.forEach((deliverOption) => {
    const today = dayjs();
    const deliveryDate = today.add(deliverOption.deliveryDays, "days");
    const dateString = deliveryDate.format("dddd, MMMM D");

    const priceString =
      deliverOption.priceCents === 0
        ? "Free"
        : `${formatCurrency(deliverOption.priceCents)}`;

    const isChecked = deliverOption.id === cartItem.deliverOptionId;

    html += `<div class="delivery-option js-delivary-option" data-product-id ="${
      matuchingProduct.id
    }"  data-deliver-option-id="${deliverOption.id}">
  <input type="radio" ${isChecked ? "checked" : ""}
    class="delivery-option-input"
    name="delivery-option-${matuchingProduct.id}">
  <div>
    <div class="delivery-option-date">
      ${dateString}
    </div>
    <div class="delivery-option-price">
      $${priceString} - Shipping
    </div>
  </div>
</div>`;
  });

  return html;
};

// adding data dynamically in cart
export const updatePage = () => {
  const cartSummery = document.querySelector(".js-order-summary");
  let cartHtml = "";

  cart.forEach((cartItem) => {
    const productId = cartItem.productId;
    const matuchingProduct=getProduct(productId)

    const deliveryOptionId = cartItem.deliverOptionId;

    const deliverOption=getDeliveryOption(deliveryOptionId);

    const today = dayjs();
    const deliveryDate = today.add(deliverOption.deliveryDays, "days");
    const dateString = deliveryDate.format("dddd, MMMM D");

    cartHtml += `<div class="cart-item-container js-cart-item-container-${
      matuchingProduct.id
    }">
            <div class="delivery-date">
              Delivery date: ${dateString}
            </div>

            <div class="cart-item-details-grid">
              <img class="product-image"
                src=${matuchingProduct.image}>

              <div class="cart-item-details">
                <div class="product-name">
                  ${matuchingProduct.name}
                </div>
                <div class="product-price">
                 $${formatCurrency(matuchingProduct.priceCents)}
                </div>
                <div class="product-quantity">
                  <span>
                    Quantity: <span class="quantity-label">${
                      cartItem.quantity
                    }</span>
                  </span>
                  <span class="update-quantity-link link-primary">
                    Update
                  </span>
                  <span class="delete-quantity-link link-primary js-delete-link" data-product-id=${
                    matuchingProduct.id
                  }>
                    Delete
                  </span>
                </div>
              </div>

              <div class="delivery-options">
                <div class="delivery-options-title">
                  Choose a delivery option:
                </div>
               ${deliveryOptionHtml(matuchingProduct, cartItem)}
              </div>
            </div>
          </div>`;
  });

  cartSummery.innerHTML = cartHtml;

  // adding functionality to delete link

  const deleteLinks = document.querySelectorAll(".js-delete-link");

  deleteLinks.forEach((link, i) => {
    link.addEventListener("click", () => {
      const productId = link.dataset.productId;
      removeProductFromCart(productId);
      const container = document.querySelector(
        `.js-cart-item-container-${productId}`
      );
      container.remove();
      paymentSummery();
    });
  });

  // adding dynamic select to delivary date options

  const deliveryDateoptions = document.querySelectorAll(".js-delivary-option");

  deliveryDateoptions.forEach((ele) => {
    ele.addEventListener("click", () => {
      const { productId, deliverOptionId } = ele.dataset;
      updateDelivaryoption(productId, deliverOptionId);
      updatePage();
      paymentSummery();
    });
  });
};
