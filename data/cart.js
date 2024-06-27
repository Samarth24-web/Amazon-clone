export let cart = JSON.parse(localStorage.getItem("cart")) || [
  {
    productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    quantity: 1,
    deliverOptionId: "1",
  },
  {
    productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    quantity: 1,
    deliverOptionId: "1",
  },
];

const savetoStorage = () => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

export const addTocartFunctionality = (productId) => {
  let matuchingItem;
  cart.forEach((cartItem) => {
    if (cartItem.productId === productId) {
      matuchingItem = cartItem;
    }
  });
  if (matuchingItem) {
    matuchingItem.quantity += 1;
  } else {
    cart.push({
      productId,
      quantity: 1,
      deliverOptionId: "1",
    });
  }
  savetoStorage();
};

export const removeProductFromCart = (productId) => {
  const newCart = [];
  cart.forEach((cartItem) => {
    if (cartItem.productId !== productId) {
      newCart.push(cartItem);
    }
  });
  cart = newCart;
  savetoStorage();
};

export const updateDelivaryoption = (productId, deliverOptionId) => {
  let matuchingItem;
  cart.forEach((cartItem) => {
    if (cartItem.productId === productId) {
      matuchingItem = cartItem;
    }
  });
  matuchingItem.deliverOptionId = deliverOptionId;

  savetoStorage();
};
