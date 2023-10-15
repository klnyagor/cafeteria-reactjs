import { Container, CardGroup, Row } from 'react-bootstrap';
import data from '../model/foods';
// import api from '../services/api';
import { useEffect, useRef, useState } from 'react';
import Food from './Food';
import FoodForm from './FoodForm';

const Main = () => {
  const [foods, setFoods] = useState([]);
  const buttonAdd = useRef(null);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    buttonAdd.current.blur();
    setShow(true);
  };

  useEffect(() => {
    setFoods([...foods, ...data]);
  }, []);

  // useEffect(() => {
  //   const load = async () => {
  //     const data = await api.readAll();

  //     setFoods([...foods, ...data]);
  //   };
  //   load();
  // }, []);

  return (
    <main>
      <Container>
        <h1 className="mt-5 text-center">Menu</h1>
        <div className="text-end">
          <FoodForm
            show={show}
            handleClose={handleClose}
            handleShow={handleShow}
            buttonAdd={buttonAdd}
          />
        </div>
        <CardGroup className="my-3">
          <Row>
            {foods.map((food, i) => {
              return <Food food={food} key={i} />;
            })}
          </Row>
        </CardGroup>
      </Container>
    </main>
  );
};

export default Main;
