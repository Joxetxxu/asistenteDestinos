
import { Col, Container, Form, Row } from "react-bootstrap";
import type { InfoInstalacionesProps } from "../ts/interfaces";

export function InfoInstalaciones({ infoInstalaciones }: InfoInstalacionesProps) {
    return (<>
        {infoInstalaciones &&
            <Container className="mt-5" >
                <Row className="mb-3">
                    <Form.Group as={Col} md="2" controlId='accesibles'>
                        <Form.Label>Son accesibles</Form.Label>
                        <Form.Select size="lg" value={infoInstalaciones.accesibles}>
                            <option></option>
                            <option value="S">SI</option>
                            <option value="N">NO</option>
                        </Form.Select>
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="2" controlId='bañoAdaptado'>
                        <Form.Label>Baños adaptados</Form.Label>
                        <Form.Select size="lg" value={infoInstalaciones.bañoAdaptado}>
                            <option></option>
                            <option value="S">SI</option>
                            <option value="N">NO</option>
                        </Form.Select>
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="2" controlId='hayDuchas'>
                        <Form.Label>Hay duchas</Form.Label>
                        <Form.Select size="lg" value={infoInstalaciones.hayDuchas}>
                            <option></option>
                            <option value="S">SI</option>
                            <option value="N">NO</option>
                        </Form.Select>
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="2" controlId='gimnasio'>
                        <Form.Label>Hay gimnasio</Form.Label>
                        <Form.Select size="lg" value={infoInstalaciones.gimnasio}>
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
                            placeholder="Condiciones"
                            size="lg"
                            defaultValue={infoInstalaciones.otros}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                </Row>
            </Container>
        }
    </>

    );
}