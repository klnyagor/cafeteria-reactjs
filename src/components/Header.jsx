import { Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Cafeteria-reactjs</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              by:{' '}
              <Link
                to="https://github.com/klnyagor/cafeteria-reactjs"
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: 'none' }}
              >
                Yagor Kalenieves
              </Link>{' '}
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
