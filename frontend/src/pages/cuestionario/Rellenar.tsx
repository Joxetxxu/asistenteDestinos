import { Container, Row, Col } from "react-bootstrap";
import { RastroMigas } from "../../components/RastroMigas";

export function Rellenar() {
    return <Container>
        <Row>
            <Col xs={12} md={6}>
                <RastroMigas key="rm" titulo='Rellenar cuestionario' nivel2={false} />
            </Col>
        </Row>
    </Container>
}