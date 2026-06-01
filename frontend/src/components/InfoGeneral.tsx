import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import 'dayjs/locale/es';
import { Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import type { InfoGenerarProps } from "../ts/interfaces";
import { Fecha } from "./Fecha";


export function InfoGeneral({ encuesta }: InfoGenerarProps) {
    return (<>
        {encuesta &&
            <Container className="mt-5" >
                <Row className="mb-3">
                    <Form.Group as={Col} md="2" controlId='id'>
                        <Form.Label>ID</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="id"
                            size="lg"
                            defaultValue={encuesta.id}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId='nombre'>
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            size="lg"
                            defaultValue={encuesta.nombre}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId='fechaIncorporacion'>
                        <Form.Label>Fecha de incorporación</Form.Label>
                        <Form.Control as={Fecha} valor={dayjs(encuesta.fechaIncorporacion)} disabled={false}>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId='fechaRealizacion'>
                        <Form.Label>Fecha de realización de la encuesta</Form.Label>
                        <InputGroup >
                            <DatePicker
                                value={dayjs(encuesta.fechaRealizacion)}
                                onChange={(newValue: any) => console.log(newValue)}
                            />
                        </InputGroup>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} md="12" controlId='unidadOrganica'>
                        <Form.Label>Organismo</Form.Label>
                        <InputGroup >
                            <Form.Control
                                required
                                type="text"

                                size="lg"
                                defaultValue={encuesta.organismo.unidadOrganica}
                            />
                        </InputGroup>
                    </Form.Group>
                </Row>


                <Row className="mb-3">
                    <Form.Group as={Col} md="8" controlId='calle'>
                        <Form.Label>Calle</Form.Label>
                        <InputGroup >
                            <Form.Control
                                required
                                type="text"

                                size="lg"
                                defaultValue={encuesta.direccion.calle}
                            />
                        </InputGroup>
                    </Form.Group>
                    <Form.Group as={Col} md="1" controlId='numero'>
                        <Form.Label>Número</Form.Label>
                        <InputGroup >
                            <Form.Control
                                required
                                type="text"

                                size="lg"
                                defaultValue={encuesta.direccion.numero}
                            />
                        </InputGroup>
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId='codigoPostal'>
                        <Form.Label>Código postal</Form.Label>
                        <InputGroup >
                            <Form.Control
                                required
                                type="text"

                                size="lg"
                                defaultValue={encuesta.direccion.codigoPostal}
                            />
                        </InputGroup>
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId='municipio' className="mt-3">
                        <Form.Label>Municipio</Form.Label>
                        <InputGroup >
                            <Form.Control
                                required
                                type="text"
                                size="lg"
                                defaultValue={encuesta.direccion.municipio.descripcion}
                            />
                        </InputGroup>
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId='provincia' className="mt-3">
                        <Form.Label>Provincia</Form.Label>
                        <InputGroup >
                            <Form.Control
                                required
                                type="text"
                                size="lg"
                                defaultValue={encuesta.direccion.municipio.provincia.descripcion}
                            />
                        </InputGroup>
                    </Form.Group>
                </Row>

            </Container>
        }
    </>

    );
}