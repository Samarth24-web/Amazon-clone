export const cart=[{
  productId:"e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
  quantity:1
}]

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