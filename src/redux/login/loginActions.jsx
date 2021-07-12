export const login = (role) => {
    return {
      type: "login",
      payload: {
        role: role,
        
      },
    };
  };