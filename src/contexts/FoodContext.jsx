import { createContext, useContext, useState, useRef } from 'react';

export const FoodContext = createContext({});

export const FoodContextProvider = ({ children }) => {
  const [foods, setFoods] = useState([]);
  const [show, setShow] = useState(false);
  const buttonAdd = useRef(null);

  const toggleModal = () => setShow(!show);
  const handleClick = () => {
    buttonAdd.current.blur();
    toggleModal();
  };

  return (
    <FoodContext.Provider
      value={{
        foods,
        setFoods,
        buttonAdd,
        show,
        toggleModal,
        handleClick,
      }}
    >
      {children}
    </FoodContext.Provider>
  );
};

export function useFood() {
  return useContext(FoodContext);
}
