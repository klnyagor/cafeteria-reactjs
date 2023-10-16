import { Button, Form, Modal } from 'react-bootstrap';
import { useFood } from '../contexts/FoodContext';

// const FoodForm = ({ show, handleClose, handleShow, buttonAdd }) => {
const FoodForm = () => {
  const { show, toggleModal, handleClick, buttonAdd } = useFood();

  return (
    <>
      <Button
        variant="secondary"
        className="rounded-circle mr-4 fw-bold"
        onClick={handleClick}
        ref={buttonAdd}
      >
        +
      </Button>

      <Modal show={show} onHide={toggleModal}>
        <Modal.Header closeButton>
          <Modal.Title as="h5">Nova Comida</Modal.Title>
        </Modal.Header>
        <Form>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="formFoodName">
              <Form.Label>Nome</Form.Label>
              <Form.Control
                type="text"
                placeholder="Digite o nome da comida"
                name="name"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formFoodImgUrl">
              <Form.Label>Imagem</Form.Label>
              <Form.Control
                type="url"
                placeholder="Digite a url da imagem"
                name="image"
              ></Form.Control>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={toggleModal}>
              Fechar
            </Button>
            <Button variant="primary" type="submit" onClick={toggleModal}>
              Confirmar
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

export default FoodForm;
