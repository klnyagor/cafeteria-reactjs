import { Button, Form, Modal } from 'react-bootstrap';
import { useFood } from '../contexts/FoodContext';
import { Formik } from 'formik';

{
  /* 
  TODO: 
      Validação de formulário: Formik e Yup
        https://formik.org/docs/guides/validation
        https://formik.org/docs/api/errormessage
        https://react-bootstrap.netlify.app/docs/forms/validation
*/
}

const FoodForm = () => {
  const { show, toggleModal, handleClick, buttonAdd, handleCreateFood } =
    useFood();

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
        <Formik
          initialValues={{
            name: "Oops, there's a bug",
            image: 'https://media.tenor.com/IBtz6rsjLQcAAAAC/bug-reading.gif',
          }}
          onSubmit={(food) => handleCreateFood(food)}
        >
          {({ handleChange, handleSubmit, handleBlur }) => (
            <Form onSubmit={handleSubmit}>
              <Modal.Body>
                <Form.Group className="mb-3" controlId="formFoodName">
                  <Form.Label>Nome</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Digite o nome da comida"
                    name="name"
                    autoFocus
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formFoodImgUrl">
                  <Form.Label>Imagem</Form.Label>
                  <Form.Control
                    type="url"
                    placeholder="Digite a url da imagem"
                    name="image"
                    onChange={handleChange}
                    onBlur={handleBlur}
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
          )}
        </Formik>
      </Modal>
    </>
  );
};

export default FoodForm;
