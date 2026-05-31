
import { Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import type { InfoServiciosProps } from "../ts/interfaces";

export function InfoServicios({ infoServicios }: InfoServiciosProps) {
    return (<>
        {infoServicios &&
            <Container className="mt-5" >
                <Row className="mb-3">
                    <Form.Group as={Col} md="2" controlId='hayApartamiento'>
                        <Form.Label>Hay aparcamiento </Form.Label>
                        <Form.Select size="lg" value={infoServicios.hayApartamiento}>
                            <option></option>
                            <option value="S">SI</option>
                            <option value="N">NO</option>
                        </Form.Select>
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} md="2" controlId='hayAparcabicis'>
                        <Form.Label>Hay aparcabicis</Form.Label>
                        <Form.Select size="lg" value={infoServicios.hayAparcabicis}>
                            <option></option>
                            <option value="S">SI</option>
                            <option value="N">NO</option>
                        </Form.Select>
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} md="2" controlId='hayCargador'>
                        <Form.Label>Hay cargador</Form.Label>
                        <Form.Select size="lg" value={infoServicios.hayCargador}>
                            <option></option>
                            <option value="S">SI</option>
                            <option value="N">NO</option>
                        </Form.Select>
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId='condicionesParking' >
                        <Form.Label>Condiciones para el parking</Form.Label>
                        <Form.Control
                            required
                            type='text'
                            size="lg"
                            placeholder="Condiciones para el parking"
                            defaultValue={infoServicios.condicionesParking}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} md="2" controlId='hayAutobuses'>
                        <Form.Label>Hay autobuses </Form.Label>
                        <Form.Select size="lg" value={infoServicios.hayAutobuses}>
                            <option></option>
                            <option value="S">SI</option>
                            <option value="N">NO</option>
                        </Form.Select>
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} md="2" controlId='hayComedor'>
                        <Form.Label>Hay comedor </Form.Label>
                        <Form.Select size="lg" value={infoServicios.hayComedor}>
                            <option></option>
                            <option value="S">SI</option>
                            <option value="N">NO</option>
                        </Form.Select>
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} md="2" controlId='hayCafeteria'>
                        <Form.Label>Hay cafetería </Form.Label>
                        <Form.Select size="lg" value={infoServicios.hayCafeteria}>
                            <option></option>
                            <option value="S">SI</option>
                            <option value="N">NO</option>
                        </Form.Select>
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId='precioMenu' >
                        <Form.Label>Precio menú</Form.Label>
                        <Form.Control
                            required
                            type='text'
                            size="lg"
                            placeholder="Precio menú"
                            defaultValue={infoServicios.precioMenu}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} md="2" controlId='hayCafeteria'>
                        <Form.Label>Hay Guardería </Form.Label>
                        <Form.Select size="lg" value={infoServicios.hayGuarderia}>
                            <option></option>
                            <option value="S">SI</option>
                            <option value="N">NO</option>
                        </Form.Select>
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId='cuantiaGuarderia' className="right">
                        <Form.Label>Cuantía guardería</Form.Label>
                        <Form.Control
                            required
                            type='number'
                            placeholder="Cuantía guardería"
                            size="lg"
                            defaultValue={infoServicios.cuantiaGuarderia}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} md="8" controlId='calleG'>
                        <Form.Label>Dirección de la guardería</Form.Label>
                        <InputGroup >
                            <Form.Control
                                required
                                type="text"
                                placeholder="calle"
                                size="lg"
                                defaultValue={infoServicios.direccion.calle}
                            />
                        </InputGroup>
                    </Form.Group>
                    <Form.Group as={Col} md="1" controlId='numeroG'>
                        <Form.Label>Número</Form.Label>
                        <InputGroup >
                            <Form.Control
                                required
                                type="text"
                                placeholder="numero"
                                size="lg"
                                defaultValue={infoServicios.direccion.numero}
                            />
                        </InputGroup>
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId='codigoPostalG'>
                        <Form.Label>Código postal</Form.Label>
                        <InputGroup >
                            <Form.Control
                                required
                                type="text"
                                placeholder="Código postal"
                                size="lg"
                                defaultValue={infoServicios.direccion.codigoPostal}
                            />
                        </InputGroup>
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId='municipioG' className="mt-3">
                        <Form.Label>Municipio</Form.Label>
                        <InputGroup >
                            <Form.Control
                                required
                                type="text"
                                placeholder="Municipio"
                                size="lg"
                                defaultValue={infoServicios.direccion.municipio.descripcion}
                            />
                        </InputGroup>
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId='provinciaG' className="mt-3">
                        <Form.Label>Provincia</Form.Label>
                        <InputGroup >
                            <Form.Control
                                required
                                type="text"
                                placeholder="Provincia"
                                size="lg"
                                defaultValue={infoServicios.direccion.municipio.provincia.descripcion}
                            />
                        </InputGroup>
                    </Form.Group>
                </Row>
            </Container>
        }
    </>

    );
}