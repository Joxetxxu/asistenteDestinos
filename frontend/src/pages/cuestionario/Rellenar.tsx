import { Col, Container, Row } from "react-bootstrap";
import { RastroMigas } from "../../components/RastroMigas";


export function Rellenar() {

    return <Container>
        <Row>
            <Col xs={12} md={6}>
                <RastroMigas key="rm" titulo='Rellenar cuestionario' nivel2={false} />
            </Col>
        </Row>
        <Row>
            <Col xs={12} md={6}>
                <h1>Cuestionario</h1>
                
            </Col>
        </Row>


    </Container>
}