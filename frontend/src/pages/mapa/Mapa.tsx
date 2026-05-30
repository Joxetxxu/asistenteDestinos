import { Col, Container, Row } from "react-bootstrap";
import { RastroMigas } from "../../components/RastroMigas";
import MapComponent from './componentes/MapComponent';
export function Mapa() {
    return <Container>
        <Row>
            <Col xs={12}>
                <RastroMigas key="rm" titulo='Mapa de destinos' nivel2={false} />
            </Col>
        </Row>
        <Row>
            <Col xs={12}>
                <p className="tituloMenu">Mapa de destinos</p>
                <MapComponent></MapComponent>
            </Col>
        </Row>

    </Container>
}