import { Col, Container, Row, Tab, Tabs } from "react-bootstrap";
import { RastroMigas } from "../../../components/RastroMigas";
import { Organismos } from "./componentes/Organismos";
import { Provincias } from "./componentes/Provincias";
import { Municipios } from "./componentes/Municipios";

export function TablasMaestras() {
    return <Container>
        <Row>
            <Col xs={12} md={6}>
                <RastroMigas key="rm" titulo='Tablas maestras' nivel2={true} />
            </Col>
        </Row>
        <Row>
            <Col xs={12}>
                <p className="tituloMenu">Tablas maestras </p>
            </Col>
        </Row>

        <Row>
            <Tabs
                defaultActiveKey="organismos"
                id="tbMaestras"
                className="mb-3"
                fill
            >
                <Tab eventKey="organismos" title="Organismos">
                    <Organismos />
                </Tab>
                <Tab eventKey="provincia" title="Provincias">
                    <Provincias />
                </Tab>
                <Tab eventKey="Municipio" title="Municipios">
                    <Municipios />
                </Tab>
            </Tabs>
        </Row>


    </Container>
}