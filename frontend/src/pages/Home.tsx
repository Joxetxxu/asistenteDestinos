import { AdminPanelSettings, Assignment, Map, QueryStats } from '@mui/icons-material';
import { useEffect } from 'react';
import { Card, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from 'react-router';
import { RastroMigas } from '../components/RastroMigas';
import { contextoStore } from '../store/store';
import { cambiaCredencialesAxios } from '../ts/config-axios';
import { getOrganismos } from '../ts/restClient';

export function Home() {

    let navigate = useNavigate();
    const isLogin = contextoStore((state) => state.isLogin);
    useEffect(() => {
        cambiaCredencialesAxios("user", "user")
        getOrganismos().then(
            (data) => {
                console.log(data)
            }
        )

    }, [])


    return <Container>
        <Row>
            <Col>
                <RastroMigas key="rm" titulo='' nivel2={false} />
            </Col>
        </Row>
        <Row>
            <div id='cardlist' className="cardlist">
                <Card key="op1" onClick={() => { navigate("/buscador") }}>
                    <Card.Body>
                        <Container>
                            <Row>
                                <Col xs={12} className='text-center'>
                                    <QueryStats color='primary' className='mb-2' sx={{ fontSize: 70 }}></QueryStats>
                                    <Card.Subtitle className='mb-2 mt-2'><p className='tit'>Buscador de destinos</p></Card.Subtitle>
                                    <p className='text-muted'>Asistente para la elección de destinos.</p>
                                </Col>
                            </Row>
                        </Container>
                    </Card.Body>
                </Card>


                <Card key="op2" onClick={() => { navigate("/mapa") }}>
                    <Card.Body>
                        <Container>
                            <Row>
                                <Col xs={12} className='text-center'>
                                    <Map color='primary' className='mb-2' sx={{ fontSize: 70 }}></Map>
                                    <Card.Subtitle className='mb-2 mt-2'><p className='tit'>Ver mapa de destinos</p></Card.Subtitle>
                                    <p className='text-muted'>Permite visualizar un mapa interactivo la geolocalización de todos los organismos</p>
                                </Col>
                            </Row>
                        </Container>
                    </Card.Body>
                </Card>


                <Card key="op3" onClick={() => { navigate("/rellenarCuestionario") }}>
                    <Card.Body>
                        <Container>
                            <Row>
                                <Col xs={12} className='text-center'>
                                    <Assignment color='primary' className='mb-2' sx={{ fontSize: 70 }}></Assignment>
                                    <Card.Subtitle className='mb-2 mt-2'><p className='tit'>Rellenar Cuestionario</p></Card.Subtitle>
                                    <p className='text-muted'>Rellenar un cuestionario sobre un destino en un organismo.</p>
                                </Col>
                            </Row>
                        </Container>
                    </Card.Body>
                </Card>

                {isLogin &&
                    <Card key="op4" onClick={() => { navigate("/admin") }}>
                        <Card.Body>
                            <Container>
                                <Row>
                                    <Col xs={12} className='text-center'>
                                        <AdminPanelSettings color='primary' className='mb-2' sx={{ fontSize: 70 }}></AdminPanelSettings>
                                        <Card.Subtitle className='mb-2 mt-2'><p className='tit'>Administración</p></Card.Subtitle>
                                        <p className='text-muted'>Permite consultar las tablas maestras del sistema, etc.</p>
                                    </Col>
                                </Row>
                            </Container>
                        </Card.Body>
                    </Card>
                }
            </div>
        </Row >
    </Container >
}