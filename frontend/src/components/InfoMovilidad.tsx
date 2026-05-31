
import { Col, Container, Form, Row } from "react-bootstrap";
import type { InfoMovilidadProps } from "../ts/interfaces";

export function InfoMovilidad({ infoMovilidad }: InfoMovilidadProps) {
    return (<>
        {infoMovilidad &&
            <Container className="mt-5" >
                <Row className="mb-3">
                    <Form.Group as={Col} md="12" controlId='movilidadInterna'>
                        <Form.Label>Hay movilidad interna dentro del organismo</Form.Label>
                        <Form.Control
                            required
                            as='textarea' rows={3}
                            placeholder="Hay movilidad interna dentro del organismo"
                            size="lg"
                            defaultValue={infoMovilidad.movilidadInterna}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} md="12" controlId='comisionServicio'>
                        <Form.Label>Infomación sobre sobre comisiones de servicio</Form.Label>
                        <Form.Control
                            required
                            as='textarea' rows={3}
                            placeholder="Infomación sobre sobre comisiones de servicio"
                            size="lg"
                            defaultValue={infoMovilidad.comisionServicio}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} md="12" controlId='posibilidadSalir'>
                        <Form.Label>Facilidad para salir del organismo</Form.Label>
                        <Form.Control
                            required
                            as='textarea' rows={3}
                            placeholder="Facilidad para salir del organismo"
                            size="lg"
                            defaultValue={infoMovilidad.posibilidadSalir}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                </Row>
            </Container>
        }
    </>

    );
}