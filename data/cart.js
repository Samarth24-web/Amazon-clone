export const cart=[]

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