import { Button, Col, Container, Form, Row, Tab, Tabs } from "react-bootstrap";
import { RastroMigas } from "../../components/RastroMigas";
import { InfoGeneral } from "../../components/InfoGeneral";
import type { Encuesta } from "../../ts/interfaces";
import { useEffect, useState } from "react";
import { getEncuestas } from "../../ts/restClient";
import { InfoPuesto } from "../../components/InfoPuesto";
import { InfoSalario } from "../../components/InfoSalario";
import { InfoHorario } from "../../components/InfoHorario";
import { InfoInstalaciones } from "../../components/InfoInstalaciones";
import { InfoTeletrabajo } from "../../components/InfoTeletrabajo";
import { InfoServicios } from "../../components/InfoServicios";
<<<<<<< HEAD
import { InfoMovilidad } from "../../components/InfoMovilidad";
=======
>>>>>>> 4c82e6caa5ae618f4b19217658d1efbe20efab4a


export function Rellenar() {

    const [encuestas, setEncuestas] = useState<Encuesta[]>([]);
    const [visible, setVisible] = useState<Boolean>(false);
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