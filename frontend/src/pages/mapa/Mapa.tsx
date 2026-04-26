import { Col, Container, Row } from "react-bootstrap";
import { RastroMigas } from "../../components/RastroMigas";

export function Mapa() {
    return <Container>
        <Row>
            <Col xs={12} md={6}>
                <RastroMigas key="rm" titulo='Mapa de destinos' nivel2={false} />
            </Col>
        </Row>
    </Container>
}