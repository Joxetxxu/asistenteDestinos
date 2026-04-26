import { Assignment, FormatListBulleted } from "@mui/icons-material";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { RastroMigas } from "../../components/RastroMigas";

export function Administracion() {

    let navigate = useNavigate();

    return (
        <>
            {/* <div>Administración</div> */}
            <Container>
                <Row>
                    <Col>
                        <RastroMigas key="rm" titulo='Administración' nivel2={false} />
                    </Col>
                </Row>
                <Row>
                    <div id='cardlist' className="cardlist">
                        <Card key="op1" onClick={() => { navigate("/buscador") }}>
                            <Card.Body>
                                <Container>
                                    <Row>
                                        <Col xs={12} className='text-center'>
                                            <FormatListBulleted color='primary' className='mb-2' sx={{ fontSize: 70 }}></FormatListBulleted>
                                            <Card.Subtitle className='mb-2 mt-2'><p className='tit'>Tablas maestras</p></Card.Subtitle>
                                            <p className='text-muted'>Permite consultar las tablas maestras: organismos, provincias, municipios, etc.</p>
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
                                            <Assignment color='primary' className='mb-2' sx={{ fontSize: 70 }}></Assignment>
                                            <Card.Subtitle className='mb-2 mt-2'><p className='tit'>Consultar cuestionarios</p></Card.Subtitle>
                                            <p className='text-muted'>Permite consultar la informaión los cuestionarios recibidos.</p>
                                        </Col>
                                    </Row>
                                </Container>
                            </Card.Body>
                        </Card>
                    </div>
                </Row >

            </Container>
        </>
    )
}