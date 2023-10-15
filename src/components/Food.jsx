import { Card, Col } from 'react-bootstrap';

const Food = ({ food }) => {
  return (
    <Col sm="6" lg="4" xl="3" className="mb-3 d-flex">
      <Card className="rounded-0">
        <Card.Header className="text-center fw-bold">
          <span>{food.name}</span>
        </Card.Header>
        <Card.Body className="p-0">
          <Card.Img
            variant="top"
            src={food.image}
            alt={food.name}
            className="w-100"
          />
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Food;
