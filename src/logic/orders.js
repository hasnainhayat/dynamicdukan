


import products from "./products"
const orders=[
    {
        id: 1,
        orderItems:[products[0],products[1]],
        customerName:"ali",
        status:"shipped"
        
    },
    {
        id: 2,
        orderItems:[products[7],products[8]],
        customerName:"awais",
        status:"Canceled"
        
    },
    {
        id: 3,
        orderItems:[products[1],products[6]],
        customerName:"saad",
        status:"pending"
    },
    {
        id:4 ,
        orderItems:[products[2],products[3]],
        customerName:"ibrahim",
        status:"delivered"
        
    },
]
export default orders