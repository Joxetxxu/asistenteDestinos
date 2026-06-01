import { useEffect, useState } from "react";
import type { Encuesta } from "../../../ts/interfaces";
import { Col, Container, Form, Row, Tab, Tabs } from "react-bootstrap";

import { RastroMigas } from "../../../components/RastroMigas";
import { getEncuestas } from "../../../ts/restClient";
import { InfoGeneral } from "../../../components/InfoGeneral";
import { InfoPuesto } from "../../../components/InfoPuesto";
import { InfoSalario } from "../../../components/InfoSalario";
import { InfoHorario } from "../../../components/InfoHorario";
import { InfoInstalaciones } from "../../../components/InfoInstalaciones";
import { InfoServicios } from "../../../components/InfoServicios";
import { InfoTeletrabajo } from "../../../components/InfoTeletrabajo";
import { InfoMovilidad } from "../../../components/InfoMovilidad";
import { useParams } from "react-router-dom";

export function Detalle() {
    const [encuestas, setEncuestas] = useState<Encuesta[]>([]);
    const [visible, setVisible] = useState<Boolean>(false);
    const { id } = useParams();
    useEffect(() => {
        getEncuestas().then((data) => {
            setEncuestas(data)
            setVisible(true)
        })
    }, [])

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return <>
        {visible &&
            <Container>
                <Row>
                    <Col xs={12} md={6}>
                        <RastroMigas key="rm" titulo='Rellenar cuestionario' nivel2={false} />
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} >
                        <p className="tituloMenu">Rellenar Cuestionario {encuestas.length}</p>
                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                            <Tabs
                                defaultActiveKey="general"
                                id="tbMaestras"
                                className="mb-3"
                                fill
                            >
                                <Tab eventKey="general" title="Información General" >
                                    <InfoGeneral encuesta={encuestas[0]} ></InfoGeneral>
                                </Tab>
                                <Tab eventKey="puesto" title="Datos del puesto">
                                    <InfoPuesto infoPuesto={encuestas[0].infoPuesto} ></InfoPuesto>
                                </Tab>
                                <Tab eventKey="salario" title="Salario">
                                    <InfoSalario infoSalario={encuestas[0].infoSalario}></InfoSalario>
                                </Tab>
                                <Tab eventKey="horario" title="Horario">
                                    <InfoHorario infoHorario={encuestas[0].infoHorario}></InfoHorario>
                                </Tab>
                                <Tab eventKey="instalaciones" title="Instalaciones">
                                    <InfoInstalaciones infoInstalaciones={encuestas[0].infoInstalaciones}></InfoInstalaciones>
                                </Tab>
                                <Tab eventKey="servicios" title="Servicios">
                                    <InfoServicios infoServicios={encuestas[0].infoServicios}></InfoServicios>
                                </Tab>
                                <Tab eventKey="telebrabajo" title="Telebrabajo">
                                    <InfoTeletrabajo infoTeletrabajo={encuestas[0].infoTeletrabajo}></InfoTeletrabajo>
                                </Tab>
                                <Tab eventKey="movilidad" title="Movilidad">
                                    <InfoMovilidad infoMovilidad={encuestas[0].infoMovilidad}></InfoMovilidad>
                                </Tab>
                            </Tabs>

                            {/* <Button type="submit">Submit form</Button> */}
                        </Form>

                    </Col>
                </Row>


            </Container>
        }
    </>
}