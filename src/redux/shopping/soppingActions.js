export const addToCart = (productId) => {
    return {
      type: "addToCart",
      payload: {
        id: productId,
      },
    };
  };
  export const removeFromCart = (productId) => {
    return {
      type: "removeFromCart",
      payload: {
        id: productId,
      },
    };
  };
  
  export const adjustQty = (productId, qty) => {
    return {
      type: "adjustQty",
      payload: {
        id: productId,
        qty,
      },
    };
  };