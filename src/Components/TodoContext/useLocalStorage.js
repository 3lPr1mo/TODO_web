import React from "react";

function useLocalStorage(itemName, initalValue){

    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(true);
    const [item, setItem] = React.useState(initalValue);
  
  
    React.useEffect(() => {
      setTimeout(() => {
        try{
          const localStorageItem = localStorage.getItem('TODOS_V1');
          let parsedItem;
          
          if(!localStorageItem){
            localStorage.setItem('TODOS_V1', JSON.stringify(initalValue));
            parsedItem = initalValue;
          }else{
            parsedItem = JSON.parse(localStorageItem);
          }
  
          setItem(parsedItem);
          setLoading(false)
        }catch(error){
          setError(error);
        }
      }, 1000);
    });
    
    const saveItem = (newItem) => {
      try{
        const stringifiedItem = JSON.stringify(newItem);
        localStorage.setItem(itemName, stringifiedItem);
        setItem(newItem);
      }catch(error){
        setError(error);
      }
    };
  
    return {
      item,
      saveItem,
      loading,
      error,
    };
  }

export {useLocalStorage};