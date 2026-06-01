
import { Col, Container, Form, Row } from "react-bootstrap";
import type { InfoPuestoProps } from "../ts/interfaces";

export function InfoPuesto({ infoPuesto }: InfoPuestoProps) {
    return (<>
        {infoPuesto &&
            <Container className="mt-5" >
                <Row className="mb-3">
                    <Form.Group as={Col} md="2" controlId='nivel'>
                        <Form.Label>Nivel</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            size="lg"
                            defaultValue={infoPuesto.nivel}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId='id'>
                        <Form.Label>Funciones realizas</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            size="lg"
                            defaultValue={infoPuesto.funciones}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId='equipoTIC'>
                        <Form.Label>Equipo TIC</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            size="lg"
                            defaultValue={infoPuesto.equipoTIC}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} md="2" controlId='hayOficinaCalidad'>
                        <Form.Label>Hay oficina de calidad</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            ç size="lg"
                            defaultValue={infoPuesto.hayOficinaCalidad}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId='tipoProyectos'>
                        <Form.Label>Tipo de proyectos</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            size="lg"
                            defaultValue={infoPuesto.tipoProyectos}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId='hayQueViejar'>
                        <Form.Label>Hay que viajar</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            size="lg"
                            defaultValue={infoPuesto.hayQueViejar}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} md="6" controlId='infoDesarrollo'>
                        <Form.Label>Tecnologías de desarrollo</Form.Label>
                        <Form.Control
                            required
                            as="textarea"
                            size="lg" rows={3}
                            defaultValue={infoPuesto.infoDesarrollo}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId='infoSistemas'>
                        <Form.Label>Tecnologías de Sistemas</Form.Label>
                        <Form.Control
                            required
                            as="textarea"
                            size="lg" rows={3}
                            defaultValue={infoPuesto.infoSistemas}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                </Row>


            </Container>
        }
    </>

    );
}