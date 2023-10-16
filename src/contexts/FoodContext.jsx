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

  const handleCreateFood = (food) => {
    setFoods([...foods, food]);
  };

  // const handleCreateFood = async (food) => {
  //   const newFood = await api.create(food);
  //   setFoods([... foods, newFood]);
  // }

  return (
    <FoodContext.Provider
      value={{
        foods,
        setFoods,
        buttonAdd,
        show,
        toggleModal,
        handleClick,
        handleCreateFood,
      }}
    >
      {children}
    </FoodContext.Provider>
  );
};

export function useFood() {
  return useContext(FoodContext);
}
