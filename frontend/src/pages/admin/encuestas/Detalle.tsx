import { useEffect, useState } from "react";
import type { Encuesta } from "../../../ts/interfaces";
import { Button, Col, Container, Form, Row, Tab, Tabs } from "react-bootstrap";

import { RastroMigas } from "../../../components/RastroMigas";
import { getEncuesta } from "../../../ts/restClient";
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
    const [encuesta, setEncuesta] = useState<Encuesta>();

    const { id } = useParams();
    useEffect(() => {
        getEncuesta(id || "0").then((data) => {
            setEncuesta(data)
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
        {encuesta &&
            <Container>
                <Row>
                    <Col xs={12} md={6}>
                         <RastroMigas key="rm" titulo='Detalle de Cuestionario' nivel2={true}  nivel3={true} />
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} >
                        <p className="tituloMenu">Consultar detalle Cuestionario </p>
                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                            <Tabs
                                defaultActiveKey="general"
                                id="tbMaestras"
                                className="mb-3"
                                fill
                            >
                                <Tab eventKey="general" title="Información General" >
                                    <InfoGeneral encuesta={encuesta} ></InfoGeneral>
                                </Tab>
                                <Tab eventKey="puesto" title="Datos del puesto">
                                    <InfoPuesto infoPuesto={encuesta.infoPuesto} ></InfoPuesto>
                                </Tab>
                                <Tab eventKey="salario" title="Salario">
                                    <InfoSalario infoSalario={encuesta.infoSalario}></InfoSalario>
                                </Tab>
                                <Tab eventKey="horario" title="Horario">
                                    <InfoHorario infoHorario={encuesta.infoHorario}></InfoHorario>
                                </Tab>
                                <Tab eventKey="instalaciones" title="Instalaciones">
                                    <InfoInstalaciones infoInstalaciones={encuesta.infoInstalaciones}></InfoInstalaciones>
                                </Tab>
                                <Tab eventKey="servicios" title="Servicios">
                                    <InfoServicios infoServicios={encuesta.infoServicios}></InfoServicios>
                                </Tab>
                                <Tab eventKey="telebrabajo" title="Telebrabajo">
                                    <InfoTeletrabajo infoTeletrabajo={encuesta.infoTeletrabajo}></InfoTeletrabajo>
                                </Tab>
                                <Tab eventKey="movilidad" title="Movilidad">
                                    <InfoMovilidad infoMovilidad={encuesta.infoMovilidad}></InfoMovilidad>
                                </Tab>
                            </Tabs>

                            {/* <Button type="submit">Submit form</Button> */}
                        </Form>

                    </Col>
                </Row>
                <Row className="justify-content-center mt-3">
                    <Col xs={1} >
                         <Button type="submit">Validar</Button> 
                    </Col>
                    
                    <Col xs={1} >
                         <Button type="submit">Rechazar</Button>
                    </Col>
                </Row>
            </Container>
        }
    </>
}