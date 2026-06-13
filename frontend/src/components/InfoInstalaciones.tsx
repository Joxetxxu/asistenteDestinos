
import { Col, Container, Form, Row } from "react-bootstrap";
import type { InfoInstalacionesProps } from "../ts/interfaces";

export function InfoInstalaciones({ infoInstalaciones, updateFields }: InfoInstalacionesProps) {
    return (<>
        {infoInstalaciones &&
            <Container className="mt-5" >
                <Row className="mb-3">
                    <Form.Group as={Col} md="2" controlId='accesibles'>
                        <Form.Label>Son accesibles</Form.Label>
                        <Form.Select size="lg" defaultValue={infoInstalaciones.accesibles}
                            onChange={({ target: { value } }) => {
                                updateFields({
                                    infoInstalaciones: {
                                        id: 0,
                                        accesibles: value,
                                        hayDuchas: infoInstalaciones.hayDuchas,
                                        bañoAdaptado: infoInstalaciones.bañoAdaptado,
                                        gimnasio: infoInstalaciones.gimnasio,
                                        otros: infoInstalaciones.otros
                                    }
                                })
                            }}
                        >
                            <option></option>
                            <option value="S">SI</option>
                            <option value="N">NO</option>
                        </Form.Select>
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="2" controlId='bañoAdaptado' >
                        <Form.Label>Baños adaptados</Form.Label>
                        <Form.Select size="lg" defaultValue={infoInstalaciones.bañoAdaptado}
                            onChange={({ target: { value } }) => {
                                updateFields({
                                    infoInstalaciones: {
                                        id: 0,
                                        accesibles: infoInstalaciones.accesibles,
                                        hayDuchas: infoInstalaciones.hayDuchas,
                                        bañoAdaptado: value,
                                        gimnasio: infoInstalaciones.gimnasio,
                                        otros: infoInstalaciones.otros
                                    }
                                })
                            }}
                        >
                            <option></option>
                            <option value="S">SI</option>
                            <option value="N">NO</option>
                        </Form.Select>
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="2" controlId='hayDuchas'>
                        <Form.Label>Hay duchas</Form.Label>
                        <Form.Select size="lg" defaultValue={infoInstalaciones.hayDuchas}
                            onChange={({ target: { value } }) => {
                                updateFields({
                                    infoInstalaciones: {
                                        id: 0,
                                        accesibles: infoInstalaciones.accesibles,
                                        hayDuchas: value,
                                        bañoAdaptado: infoInstalaciones.bañoAdaptado,
                                        gimnasio: infoInstalaciones.gimnasio,
                                        otros: infoInstalaciones.otros
                                    }
                                })
                            }}>
                            <option></option>
                            <option value="S">SI</option>
                            <option value="N">NO</option>
                        </Form.Select>
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="2" controlId='gimnasio'>
                        <Form.Label>Hay gimnasio</Form.Label>
                        <Form.Select size="lg" defaultValue={infoInstalaciones.gimnasio}
                            onChange={({ target: { value } }) => {
                                updateFields({
                                    infoInstalaciones: {
                                        id: 0,
                                        accesibles: infoInstalaciones.accesibles,
                                        hayDuchas: infoInstalaciones.hayDuchas,
                                        bañoAdaptado: infoInstalaciones.bañoAdaptado,
                                        gimnasio: value,
                                        otros: infoInstalaciones.otros
                                    }
                                })
                            }}>
                            <option></option>
                            <option value="S">SI</option>
                            <option value="N">NO</option>
                        </Form.Select>
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} md="12" controlId='horarioVeranoCondiciones'>
                        <Form.Label>Otra información</Form.Label>
                        <Form.Control
                            required
                            type='text'
                            size="lg"
                            defaultValue={infoInstalaciones.otros}
                            onChange={({ target: { value } }) => {
                                updateFields({
                                    infoInstalaciones: {
                                        id: 0,
                                        accesibles: infoInstalaciones.accesibles,
                                        hayDuchas: infoInstalaciones.hayDuchas,
                                        bañoAdaptado: infoInstalaciones.bañoAdaptado,
                                        gimnasio: infoInstalaciones.gimnasio,
                                        otros: value
                                    }
                                })
                            }}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                </Row>
            </Container>
        }
    </>

    );
}