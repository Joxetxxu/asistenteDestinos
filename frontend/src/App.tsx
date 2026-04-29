import { Suspense, useState } from 'react';
import { Button, Col, Container, Form, Modal, Row } from 'react-bootstrap';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Administracion } from './pages/admin/Administracion';
import { Asistente } from './pages/asistente/Asistente';
import { Rellenar } from './pages/cuestionario/Rellenar';
import { Home } from './pages/Home';
import { Mapa } from './pages/mapa/Mapa';
import type { Login } from './ts/interfaces';
//Navegacion

const [show, setShow] = useState(false);
const [login, setLogin] = useState<Login>({ user: "", pass: "" });



// handle change event
const handleChange = (e) => {
  e.preventDefault(); // prevent the default action
  setLogin(e.target.value); // set name to e.target.value (event)

};
// metodos para la ventana de login
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

const router = createBrowserRouter([
  {
    path: "/", element: <Home />,
  },
  {
    path: "/mapa", element: <Mapa />,
  },
  {
    path: "/buscador", element: <Asistente />,
  },
  {
    path: "/admin", element: <Administracion />,
  },
  {
    path: "/rellenarCuestionario", element: <Rellenar />,
  }

]);
return (
  <>
    <Suspense fallback="cargando">
      <header id="cabecera">
        <Container>
          <Row>
            <Col xs={12} md={3}>
              <img src="logo.png" height="100" className="framework" alt="React logo" />
            </Col>
            <Col xs={12} md={6} className='titulo'>
              Asistente para la Elección de destinos
            </Col>
            <Col xs={12} md={3} className='titulo'>
              <Button variant="link" onClick={handleShow} >Iniciar Sesión</Button>
            </Col>
          </Row>
        </Container>
      </header>
      <main id="cuerpo" >
        <Container>
          <Row>
            <Col xs={12}>
              <RouterProvider router={router}>
              </RouterProvider>
            </Col>
          </Row>
        </Container>
      </main>
      <footer id="pie">Trabajo fin de Grado - Universidad Internacional de La Rioja</footer>

      <Modal show={show} onHide={handleClose} backdrop="static"
        keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Iniciar Sesión</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
              <Form.Label column sm="4">
                Usuario{login.user}
              </Form.Label>
              <Col sm="8">
                <Form.Control placeholder='Usuario' defaultValue={login.user} onChange={handleChange} />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
              <Form.Label column sm="4">
                Password
              </Form.Label>
              <Col sm="8">
                <Form.Control type="password" placeholder="Password" defaultValue={login.pass} />
              </Col>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Acceder
          </Button>
        </Modal.Footer>
      </Modal>

    </Suspense >
  </>
)
}

export default App
