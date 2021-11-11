


import products from "./products"
const orders=[
    {
        id: 1,
        orderItems:[products[0],products[1]],
        customerName:"ali",
        status:"shipped",
        riderName:"Nawaz"
        
    },
    {
        id: 2,
        orderItems:[products[7],products[8]],
        customerName:"awais",
        status:"Canceled",
        riderName:"wasif"
        
    },
    {
        id: 3,
        orderItems:[products[1],products[6]],
        customerName:"saad",
        status:"pending",
        riderName:"Atif"
    },
    {
        id:4 ,
        orderItems:[products[2],products[3]],
        customerName:"ibrahim",
        status:"delivered",
        riderName:"Saqib"
        
    },
]
export default orders