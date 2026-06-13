
import { Col, Container, Form, Row } from "react-bootstrap";
import type { InfoHorarioProps } from "../ts/interfaces";

export function InfoHorario({ infoHorario, updateFields }: InfoHorarioProps) {
    return (<>
        {infoHorario &&
            <Container className="mt-5" >
                <Row className="mb-3">
                    <Form.Group as={Col} md="8" controlId='horario' >
                        <Form.Label>Horario</Form.Label>
                        <Form.Control
                            required
                            type='text'
                            size="lg"
                            defaultValue={infoHorario.horario}
                            onChange={({ target: { value } }) => {
                                updateFields({
                                    infoHorario: {
                                        id: 0,
                                        horario: value,
                                        tardesObligatorias: infoHorario.tardesObligatorias,
                                        hayHorarioVerano: infoHorario.hayHorarioVerano,
                                        horarioVeranoCondiciones: infoHorario.horarioVeranoCondiciones
                                    }
                                }
                                )
                            }}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} md="2" controlId='tardesObligatorias'>
                        <Form.Label>Tardes Obligatorias</Form.Label>
                        <Form.Select size="lg" defaultValue={infoHorario.tardesObligatorias}
                            onChange={({ target: { value } }) => {
                                updateFields({
                                    infoHorario: {
                                        id: 0,
                                        horario: infoHorario.horario,
                                        tardesObligatorias: value,
                                        hayHorarioVerano: infoHorario.hayHorarioVerano,
                                        horarioVeranoCondiciones: infoHorario.horarioVeranoCondiciones
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
                    <Form.Group as={Col} md="2" controlId='hayHorarioVerano'>
                        <Form.Label>Hay horario de verano</Form.Label>
                        <Form.Select size="lg" defaultValue={infoHorario.hayHorarioVerano}
                            onChange={({ target: { value } }) => {
                                updateFields({
                                    infoHorario: {
                                        id: 0,
                                        horario: infoHorario.horario,
                                        tardesObligatorias: infoHorario.tardesObligatorias,
                                        hayHorarioVerano: value,
                                        horarioVeranoCondiciones: infoHorario.horarioVeranoCondiciones
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
                        <Form.Label>Condiciones</Form.Label>
                        <Form.Control
                            required
                            type='text' size="lg"
                            defaultValue={infoHorario.horarioVeranoCondiciones}
                            onChange={({ target: { value } }) => {
                                updateFields({
                                    infoHorario: {
                                        id: 0,
                                        horario: infoHorario.horario,
                                        tardesObligatorias: infoHorario.tardesObligatorias,
                                        hayHorarioVerano: infoHorario.hayHorarioVerano,
                                        horarioVeranoCondiciones: value
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