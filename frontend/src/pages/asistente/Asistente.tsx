import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { RastroMigas } from "../../components/RastroMigas";

export function Asistente() {
    useEffect(() => {
        

    }, [])
    return <Container>
        <Row>
            <Col xs={12} md={6}>
                <RastroMigas key="rm" titulo='Buscador de destinos' nivel2={false} />
            </Col>
        </Row>
    </Container>
}