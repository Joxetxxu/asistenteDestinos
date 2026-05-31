
import { Col, Container, Form, Row } from "react-bootstrap";
import type { InfoSalarioProps } from "../ts/interfaces";

export function InfoSalario({ infoSalario }: InfoSalarioProps) {
    return (<>
        {infoSalario &&
            <Container className="mt-5" >
                <Row className="mb-3">
                    <Form.Group as={Col} md="2" controlId='hayProductividad'>
                        <Form.Label>Hay productividad </Form.Label>
                        <Form.Select size="lg" value={infoSalario.hayProductividad}>
                            <option></option>
                            <option value="S">SI</option>
                            <option value="N">NO</option>
                        </Form.Select>
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId='cuantiaProductividad' className="right">
                        <Form.Label>Cuantía productividad al año</Form.Label>
                        <Form.Control
                            required
                            type='number' 
                            placeholder="Cuantía productividad al año"
                            size="lg"
                            defaultValue={infoSalario.cuantiaProductividad}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="2" controlId='hayPagaObjetivos'>
                        <Form.Label>Paga objetivos</Form.Label>
                        <Form.Select size="lg" value={infoSalario.hayPagaObjetivos}>
                            <option></option>
                            <option value="S">SI</option>
                            <option value="N">NO</option>
                        </Form.Select>
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId='cuantiaPagaObjetivos' className="right">
                        <Form.Label>Cuantía Paga objetivos al año</Form.Label>
                        <Form.Control
                            required
                            type='number' step='0.01' value='0.00' placeholder='0.00'
                            size="lg"
                            defaultValue={infoSalario.cuantiaPagaObjetivos}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} md="12" controlId='condicionesProductividad' >
                        <Form.Label>Condiciones para las pagas</Form.Label>
                        <Form.Control
                            required
                            type='text'
                            size="lg"
                            placeholder="Condiciones para las pagas"
                            defaultValue={infoSalario.condicionesProductividad}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} md="12" controlId='hayGuardias' className="right">
                        <Form.Label>Hay guardias</Form.Label>
                        <Form.Control
                            required
                            type='text'
                            size="lg"
                            placeholder="Condiciones para las guardias"
                            defaultValue={infoSalario.hayGuardias}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} md="12" controlId='observaciones' className="right">
                        <Form.Label>observaciones</Form.Label>
                        <Form.Control
                            required
                            type='textarea'
                            size="lg"
                            placeholder="observaciones"
                            defaultValue={infoSalario.observaciones}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                </Row>
            </Container>
        }
    </>

    );
}