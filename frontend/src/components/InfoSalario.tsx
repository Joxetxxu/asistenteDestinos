
import { Col, Container, Form, Row } from "react-bootstrap";
import type { InfoSalarioProps } from "../ts/interfaces";

export function InfoSalario({ infoSalario }: InfoSalarioProps) {
    return (<>
        {infoSalario &&
            <Container className="mt-5" >
                <Row className="mb-3">
                    <Form.Group as={Col} md="3" controlId='salario' className="right">
                        <Form.Label>Salario base anual</Form.Label>
                        <Form.Control
                            required
                            type='number'
                            size="lg"
                            defaultValue={infoSalario.salario}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="2" controlId='hayProductividad'>
                        <Form.Label>Hay productividad </Form.Label>
                        <Form.Select size="lg" defaultValue={infoSalario.hayProductividad}>
                            <option></option>
                            <option value="S">SI</option>
                            <option value="N">NO</option>
                        </Form.Select>
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="2" controlId='cuantiaProductividad' className="right">
                        <Form.Label>Cuantía productividad</Form.Label>
                        <Form.Control
                            required
                            type='number'
                            size="lg"
                            defaultValue={infoSalario.cuantiaProductividad}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="2" controlId='hayPagaObjetivos'>
                        <Form.Label>Paga objetivos</Form.Label>
                        <Form.Select size="lg" defaultValue={infoSalario.hayPagaObjetivos}>
                            <option></option>
                            <option value="S">SI</option>
                            <option value="N">NO</option>
                        </Form.Select>
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId='cuantiaPagaObjetivos' className="right">
                        <Form.Label>Cuantía Paga objetivos</Form.Label>
                        <Form.Control
                            required
                            type='number'
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
                            defaultValue={infoSalario.condicionesProductividad}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} md="12" controlId='hayGuardias'>
                        <Form.Label>Hay guardias</Form.Label>
                        <Form.Control
                            required
                            type='text'
                            size="lg"
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