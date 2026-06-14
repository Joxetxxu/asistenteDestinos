import { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row, Tab, Tabs } from "react-bootstrap";
import type { Encuesta } from "../../../ts/interfaces";

import { useNavigate, useParams } from "react-router-dom";
import { InfoGeneral } from "../../../components/InfoGeneral";
import { InfoHorario } from "../../../components/InfoHorario";
import { InfoInstalaciones } from "../../../components/InfoInstalaciones";
import { InfoMovilidad } from "../../../components/InfoMovilidad";
import { InfoPuesto } from "../../../components/InfoPuesto";
import { InfoSalario } from "../../../components/InfoSalario";
import { InfoServicios } from "../../../components/InfoServicios";
import { InfoTeletrabajo } from "../../../components/InfoTeletrabajo";
import { RastroMigas } from "../../../components/RastroMigas";
import { cambiarEstadoEncuesta, getEncuesta } from "../../../ts/restClient";

export function Detalle() {
    const [encuesta, setEncuesta] = useState<Encuesta>();
    let navigate = useNavigate();

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

    function cambiarEstado(arg0: number): import("react").MouseEventHandler<HTMLButtonElement> | undefined {
        return () => {
            cambiarEstadoEncuesta(id || "0", arg0).then((data) => {
                if (data.status === 200) {
                    alert("Registro actualizado Correctamente");
                    navigate("/listado");
                }
            }).catch((data) => {
                console.log(data)
                if (data.status === 404) {
                    alert("No se ha encontrado el cuestionario");
                } else if (data.status === 400) {
                    alert("No se puede actualizar el registro. El estado no es el esperado");
                }
            })

        }
    }

    function updateFields(fields: Partial<Encuesta>) {
        if (encuesta) {
            setEncuesta(prev => { return { ...prev, ...fields } })
        }
    }

    return <>
        {encuesta &&
            <Container>
                <Row>
                    <Col xs={12} md={6}>
                        <RastroMigas key="rm" titulo='Detalle de Cuestionario' nivel2={true} nivel3={true} />
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
                                    <InfoGeneral encuesta={encuesta} updateFields={updateFields} ></InfoGeneral>
                                </Tab>
                                <Tab eventKey="puesto" title="Datos del puesto">
                                    <InfoPuesto infoPuesto={encuesta.infoPuesto} updateFields={updateFields}></InfoPuesto>
                                </Tab>
                                <Tab eventKey="salario" title="Salario">
                                    <InfoSalario infoSalario={encuesta.infoSalario} updateFields={updateFields}></InfoSalario>
                                </Tab>
                                <Tab eventKey="horario" title="Horario">
                                    <InfoHorario infoHorario={encuesta.infoHorario} updateFields={updateFields}></InfoHorario>
                                </Tab>
                                <Tab eventKey="instalaciones" title="Instalaciones">
                                    <InfoInstalaciones infoInstalaciones={encuesta.infoInstalaciones} updateFields={updateFields}></InfoInstalaciones>
                                </Tab>
                                <Tab eventKey="servicios" title="Servicios">
                                    <InfoServicios infoServicios={encuesta.infoServicios} updateFields={updateFields}></InfoServicios>
                                </Tab>
                                <Tab eventKey="telebrabajo" title="Telebrabajo">
                                    <InfoTeletrabajo infoTeletrabajo={encuesta.infoTeletrabajo} updateFields={updateFields}></InfoTeletrabajo>
                                </Tab>
                                <Tab eventKey="movilidad" title="Movilidad">
                                    <InfoMovilidad infoMovilidad={encuesta.infoMovilidad} updateFields={updateFields}></InfoMovilidad>
                                </Tab>
                            </Tabs>

                            {/* <Button type="submit">Submit form</Button> */}
                        </Form>

                    </Col>
                </Row>
                {encuesta?.estado === 1 && (
                    <Row className="justify-content-center mt-3" >
                        <Col xs={1} >
                            <Button onClick={cambiarEstado(2)}>Validar</Button>
                        </Col>

                        <Col xs={1} >
                            <Button onClick={cambiarEstado(3)}>Rechazar</Button>
                        </Col>
                    </Row>)}
            </Container>
        }
    </>
}