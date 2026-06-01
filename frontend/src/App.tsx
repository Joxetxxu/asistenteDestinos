import { Suspense, useEffect, useState } from 'react';
import { Button, Col, Container, Form, Modal, Row, Alert } from 'react-bootstrap';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Administracion } from './pages/admin/Administracion';
import { Asistente } from './pages/asistente/Asistente';
import { Rellenar } from './pages/cuestionario/Rellenar';
import { Home } from './pages/Home';
import { Mapa } from './pages/mapa/Mapa';
import type { Login } from './ts/interfaces';
import { getPerfil } from './ts/restClient';
import { cambiaCredencialesAxios } from './ts/config-axios';
import { contextoStore } from './store/store';
import { TablasMaestras } from './pages/admin/maestras/TablasMaestras';

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs'
import { Listado } from './pages/admin/encuestas/Listado';
import { Detalle } from './pages/admin/encuestas/Detalle';
function App() {

  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [login, setLogin] = useState<Login>({ user: "", pass: "" });
  const [mensaje, setMensaje] = useState("");
  const logging = contextoStore((state) => state.setLogin);
  const isLogin = contextoStore((state) => state.isLogin);
  // Actualizar formulario
  function updateFields(fields: Partial<Login>) {
    setLogin(prev => { return { ...prev, ...fields } })
  }

  // metodos para la ventana de login
  const handleClose = () => {
    cambiaCredencialesAxios(login.user, login.pass)
    getPerfil().then((data) => {
      setMensaje("")
      if (data === 'ROLE_ROL_ADMIN') {
        logging(true)
      } else {
        logging(false)
      }
      setShow(false)
    }).catch((e) => {
      if (e.status === 401) {
        cambiaCredencialesAxios('user', 'user')
        setMensaje("Credenciales incorrectas")
      }
    })
  };

  const handleCloseSes = () => {
    logging(false)
    cambiaCredencialesAxios('user', 'user')
    setShow2(true)
  }

  useEffect(() => {
    cambiaCredencialesAxios('user', 'user')
    dayjs.locale('es')
  }, [])

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
      path: "/tablasMaestras", element: <TablasMaestras />,
    },
    {
      path: "/rellenarCuestionario", element: <Rellenar />,
    },
    {
      path: "/listado", element: <Listado />,
    },
    {
      path: "/listado/:id", element: <Detalle />,
    }

  ]);
  return (
    <>
      <Suspense fallback="cargando">
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="es">
          <header id="cabecera">
            <Container>
              <Row>
                <Col xs={12} md={3}>
                  <img src="logo.png" height="100" className="framework" alt="React logo" />
                </Col>
                <Col xs={12} md={6} className='titulo'>
                  Plataforma de inteligencia para la evaluación de condiciones laborales en los organismos públicos de España
                </Col>
                <Col xs={12} md={3} className='titulo'>
                  {isLogin === false && <Button variant="secondary" onClick={handleShow} >Iniciar Sesión</Button>}
                  {isLogin === true && <Button variant="secondary" onClick={handleCloseSes} >Cerrar Sesión</Button>}
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

          <Modal show={show} backdrop="static" keyboard={false}>
            <Modal.Header closeButton>
              <Modal.Title>Iniciar Sesión</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                  <Form.Label column sm="4">
                    Usuario
                  </Form.Label>
                  <Col sm="8">
                    <Form.Control placeholder='Usuario' defaultValue={login.user} onChange={(e) => updateFields({ user: e.target.value })} />
                  </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                  <Form.Label column sm="4">
                    Password
                  </Form.Label>
                  <Col sm="8">
                    <Form.Control type="password" placeholder="Password" defaultValue={login.pass} onChange={(e) => updateFields({ pass: e.target.value })} />
                  </Col>
                </Form.Group>
                {mensaje && <Alert key="danger" variant="danger">{mensaje}</Alert>}
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => { setShow(false) }}>
                Cerrar
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Acceder
              </Button>
            </Modal.Footer>
          </Modal>

          <Modal show={show2} backdrop="static" keyboard={false}>
            <Modal.Header>
              <Modal.Title>Aviso</Modal.Title>
            </Modal.Header>
            <Modal.Body>Sessión cerrada correctamente</Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={() => { setShow2(false) }}>
                Cerrar
              </Button>
            </Modal.Footer>
          </Modal>
        </LocalizationProvider>
      </Suspense >
    </>
  )
}

export default App
