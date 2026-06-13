
import { Col, Container, Form, Row } from "react-bootstrap";
import type { InfoPuestoProps } from "../ts/interfaces";

export function InfoPuesto({ infoPuesto, updateFields }: InfoPuestoProps) {
    return (<>
        {infoPuesto &&
            <Container className="mt-5" >
                <Row className="mb-3">
                    <Form.Group as={Col} md="2" controlId='nivel'>
                        <Form.Label>Nivel{infoPuesto.nivel}</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            size="lg"
                            defaultValue={infoPuesto.nivel}
                            onChange={({ target: { value } }) => {
                                updateFields({
                                    infoPuesto: {
                                        nivel: value,
                                        id: 0,
                                        equipoTIC: infoPuesto.equipoTIC,
                                        infoSistemas: infoPuesto.infoSistemas,
                                        infoDesarrollo: infoPuesto.infoDesarrollo,
                                        tipoProyectos: infoPuesto.tipoProyectos,
                                        proyectosFuturos: infoPuesto.proyectosFuturos,
                                        hayOficinaCalidad: infoPuesto.hayOficinaCalidad,
                                        funciones: infoPuesto.funciones,
                                        hayQueViejar: infoPuesto.hayQueViejar
                                    }
                                })
                            }}
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
                            onChange={({ target: { value } }) => {
                                updateFields({
                                    infoPuesto: {
                                        nivel: infoPuesto.nivel,
                                        id: 0,
                                        equipoTIC: infoPuesto.equipoTIC,
                                        infoSistemas: infoPuesto.infoSistemas,
                                        infoDesarrollo: infoPuesto.infoDesarrollo,
                                        tipoProyectos: infoPuesto.tipoProyectos,
                                        proyectosFuturos: infoPuesto.proyectosFuturos,
                                        hayOficinaCalidad: infoPuesto.hayOficinaCalidad,
                                        funciones: value,
                                        hayQueViejar: infoPuesto.hayQueViejar
                                    }
                                })
                            }}
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
                            onChange={({ target: { value } }) => {
                                updateFields({
                                    infoPuesto: {
                                        nivel: infoPuesto.nivel,
                                        id: 0,
                                        equipoTIC: value,
                                        infoSistemas: infoPuesto.infoSistemas,
                                        infoDesarrollo: infoPuesto.infoDesarrollo,
                                        tipoProyectos: infoPuesto.tipoProyectos,
                                        proyectosFuturos: infoPuesto.proyectosFuturos,
                                        hayOficinaCalidad: infoPuesto.hayOficinaCalidad,
                                        funciones: infoPuesto.funciones,
                                        hayQueViejar: infoPuesto.hayQueViejar
                                    }
                                })
                            }}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} md="2" controlId='hayOficinaCalidad'>
                        <Form.Label>Hay oficina de calidad {infoPuesto.hayOficinaCalidad}</Form.Label>
                        <Form.Select size="lg" defaultValue={infoPuesto.hayOficinaCalidad}
                            onChange={({ target: { value } }) => {
                                updateFields({
                                    infoPuesto: {
                                        nivel: infoPuesto.nivel,
                                        id: 0,
                                        equipoTIC: infoPuesto.equipoTIC,
                                        infoSistemas: infoPuesto.infoSistemas,
                                        infoDesarrollo: infoPuesto.infoDesarrollo,
                                        tipoProyectos: infoPuesto.tipoProyectos,
                                        proyectosFuturos: infoPuesto.proyectosFuturos,
                                        hayOficinaCalidad: value,
                                        funciones: infoPuesto.funciones,
                                        hayQueViejar: infoPuesto.hayQueViejar
                                    }
                                })
                            }}>
                            <option></option>
                            <option value="S">SI</option>
                            <option value="N">NO</option>
                        </Form.Select>
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId='tipoProyectos'>
                        <Form.Label>Tipo de proyectos</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            size="lg"
                            defaultValue={infoPuesto.tipoProyectos}
                            onChange={({ target: { value } }) => {
                                updateFields({
                                    infoPuesto: {
                                        nivel: infoPuesto.nivel,
                                        id: 0,
                                        equipoTIC: infoPuesto.equipoTIC,
                                        infoSistemas: infoPuesto.infoSistemas,
                                        infoDesarrollo: infoPuesto.infoDesarrollo,
                                        tipoProyectos: value,
                                        proyectosFuturos: infoPuesto.proyectosFuturos,
                                        hayOficinaCalidad: infoPuesto.hayOficinaCalidad,
                                        funciones: infoPuesto.funciones,
                                        hayQueViejar: infoPuesto.hayQueViejar
                                    }
                                })
                            }}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId='hayQueViejar'>
                        <Form.Label>Hay que viajar</Form.Label>
                        <Form.Select size="lg" defaultValue={infoPuesto.hayQueViejar}

                            onChange={({ target: { value } }) => {
                                updateFields({
                                    infoPuesto: {
                                        nivel: infoPuesto.nivel,
                                        id: 0,
                                        equipoTIC: infoPuesto.equipoTIC,
                                        infoSistemas: infoPuesto.infoSistemas,
                                        infoDesarrollo: infoPuesto.infoDesarrollo,
                                        tipoProyectos: infoPuesto.tipoProyectos,
                                        proyectosFuturos: infoPuesto.proyectosFuturos,
                                        hayOficinaCalidad: infoPuesto.hayOficinaCalidad,
                                        funciones: infoPuesto.funciones,
                                        hayQueViejar: value
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
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} md="6" controlId='infoDesarrollo'>
                        <Form.Label>Tecnologías de desarrollo</Form.Label>
                        <Form.Control
                            required
                            as="textarea"
                            size="lg" rows={3}
                            defaultValue={infoPuesto.infoDesarrollo}
                            onChange={({ target: { value } }) => {
                                updateFields({
                                    infoPuesto: {
                                        nivel: infoPuesto.nivel,
                                        id: 0,
                                        equipoTIC: infoPuesto.equipoTIC,
                                        infoSistemas: infoPuesto.infoSistemas,
                                        infoDesarrollo: value,
                                        tipoProyectos: infoPuesto.tipoProyectos,
                                        proyectosFuturos: infoPuesto.proyectosFuturos,
                                        hayOficinaCalidad: infoPuesto.hayOficinaCalidad,
                                        funciones: infoPuesto.funciones,
                                        hayQueViejar: infoPuesto.hayQueViejar
                                    }
                                })
                            }}
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
                            onChange={({ target: { value } }) => {
                                updateFields({
                                    infoPuesto: {
                                        nivel: infoPuesto.nivel,
                                        id: 0,
                                        equipoTIC: infoPuesto.equipoTIC,
                                        infoSistemas: value,
                                        infoDesarrollo: infoPuesto.infoDesarrollo,
                                        tipoProyectos: infoPuesto.tipoProyectos,
                                        proyectosFuturos: infoPuesto.proyectosFuturos,
                                        hayOficinaCalidad: infoPuesto.hayOficinaCalidad,
                                        funciones: infoPuesto.funciones,
                                        hayQueViejar: infoPuesto.hayQueViejar
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