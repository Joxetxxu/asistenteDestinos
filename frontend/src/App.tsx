import { Suspense } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css';
import { Administracion } from './pages/admin/Administracion';
import { Asistente } from './pages/asistente/Asistente';
import { Rellenar } from './pages/cuestionario/Rellenar';
import { Home } from './pages/Home';
import { Mapa } from './pages/mapa/Mapa';
function App() {
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
                <a href="#login">Iniciar sesión</a>
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

      </Suspense >
      <hr />
    </>
  )
}

export default App
