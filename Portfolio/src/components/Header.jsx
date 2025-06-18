import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const header = () => {
  return (
      <>
      <section>
        <Navbar bg="dark" data-bs-theme="dark" fixed="top">
          <Container>
            <Nav className="justify-content-center w-100" style={{backdropFilter: ''}}>
              <Nav.Link variant href="#qmsoueu">Quem sou eu</Nav.Link>
              <Nav.Link href="#tecnologias">Tecnologias</Nav.Link>
              <Nav.Link href="#projetos">Projetos</Nav.Link>
              <Nav.Link href="#contato">Contato</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </section>
    </>
  )
}

export default header
