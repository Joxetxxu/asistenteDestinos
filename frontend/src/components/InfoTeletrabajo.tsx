
import { Col, Container, Form, Row } from "react-bootstrap";
import type { InfoTeletrabajoProps } from "../ts/interfaces";

export function InfoTeletrabajo({ infoTeletrabajo, updateFields }: InfoTeletrabajoProps) {
    return (<>
        {infoTeletrabajo &&
            <Container className="mt-5" >
                <Row className="mb-3">
                    <Form.Group as={Col} md="2" controlId='hayTeletrabajo'>
                        <Form.Label>Hay teletrabajo </Form.Label>
                        <Form.Select size="lg" defaultValue={infoTeletrabajo.hayTeletrabajo}
                            onChange={({ target: { value } }) => {
                                updateFields({
                                    infoTeletrabajo: {
                                        id: 0,
                                        hayTeletrabajo: value,
                                        requisitos: infoTeletrabajo.requisitos,
                                        dias: infoTeletrabajo.dias,
                                        otraCCAA: infoTeletrabajo.otraCCAA,
                                        conciliacion: infoTeletrabajo.conciliacion
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
                    <Form.Group as={Col} md="8" controlId='requisitos'>
                        <Form.Label>Requisitos para conseguirlos</Form.Label>
                        <Form.Control
                            required
                            type='text'
                            size="lg"
                            defaultValue={infoTeletrabajo.requisitos}
                            onChange={({ target: { value } }) => {
                                updateFields({
                                    infoTeletrabajo: {
                                        id: 0,
                                        hayTeletrabajo: infoTeletrabajo.hayTeletrabajo,
                                        requisitos: value,
                                        dias: infoTeletrabajo.dias,
                                        otraCCAA: infoTeletrabajo.otraCCAA,
                                        conciliacion: infoTeletrabajo.conciliacion
                                    }
                                })
                            }}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="2" controlId='requisitos'>
                        <Form.Label>Días</Form.Label>
                        <Form.Control
                            required
                            type='text'
                            size="lg"
                            defaultValue={infoTeletrabajo.dias}
                            onChange={({ target: { value } }) => {
                                updateFields({
                                    infoTeletrabajo: {
                                        id: 0,
                                        hayTeletrabajo: infoTeletrabajo.hayTeletrabajo,
                                        requisitos: infoTeletrabajo.requisitos,
                                        dias: value,
                                        otraCCAA: infoTeletrabajo.otraCCAA,
                                        conciliacion: infoTeletrabajo.conciliacion
                                    }
                                })
                            }}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} md="6" controlId='requisitos'>
                        <Form.Label>Se puede trasladar a otras comunidades autónomas</Form.Label>
                        <Form.Control
                            required
                            type='text'
                            size="lg"
                            defaultValue={infoTeletrabajo.otraCCAA}
                            onChange={({ target: { value } }) => {
                                updateFields({
                                    infoTeletrabajo: {
                                        id: 0,
                                        hayTeletrabajo: infoTeletrabajo.hayTeletrabajo,
                                        requisitos: infoTeletrabajo.requisitos,
                                        dias: infoTeletrabajo.dias,
                                        otraCCAA: value,
                                        conciliacion: infoTeletrabajo.conciliacion
                                    }
                                })
                            }}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId='requisitos'>
                        <Form.Label>Facilidad para conciliar
                        </Form.Label>
                        <Form.Control
                            required
                            type='text'
                            size="lg"
                            defaultValue={infoTeletrabajo.conciliacion}
                            onChange={({ target: { value } }) => {
                                updateFields({
                                    infoTeletrabajo: {
                                        id: 0,
                                        hayTeletrabajo: infoTeletrabajo.hayTeletrabajo,
                                        requisitos: infoTeletrabajo.requisitos,
                                        dias: infoTeletrabajo.dias,
                                        otraCCAA: infoTeletrabajo.otraCCAA,
                                        conciliacion: value
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