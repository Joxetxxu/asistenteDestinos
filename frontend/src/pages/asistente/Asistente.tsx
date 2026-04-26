import { Col, Container, Row } from "react-bootstrap";
import { RastroMigas } from "../../components/RastroMigas";

export function Asistente() {
    return <Container>
        <Row>
            <Col xs={12} md={6}>
                <RastroMigas key="rm" titulo='Buscador de destinos' nivel2={false} />
            </Col>
        </Row>
    </Container>
}