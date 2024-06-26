export let cart=[{
  productId:"e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
  quantity:1
} ,
{
  productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
  quantity:1
} 
 ]

export const  addTocartFunctionality=(productId)=>{
  let matuchingItem;
  cart.forEach((cartItem)=>{
   if(cartItem.productId===productId){
     matuchingItem=cartItem;
   }
  })
   if(matuchingItem){
     matuchingItem.quantity+=1;
   }
   else{
     cart.push({
       productId ,
       quantity:1
      })
   }

}

export const removeProductFromCart=(productId)=>{
  const newCart=[];
  cart.forEach((cartItem)=>{
    if(cartItem.productId!==productId){
      cart.push(cartItem);
    }
  })
  cart=newCart;
}