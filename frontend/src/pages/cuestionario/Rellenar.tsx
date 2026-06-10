import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row, Tab, Tabs } from "react-bootstrap";
import { InfoGeneral } from "../../components/InfoGeneral";
import { InfoHorario } from "../../components/InfoHorario";
import { InfoInstalaciones } from "../../components/InfoInstalaciones";
import { InfoMovilidad } from "../../components/InfoMovilidad";
import { InfoPuesto } from "../../components/InfoPuesto";
import { InfoSalario } from "../../components/InfoSalario";
import { InfoServicios } from "../../components/InfoServicios";
import { InfoTeletrabajo } from "../../components/InfoTeletrabajo";
import { RastroMigas } from "../../components/RastroMigas";
import type { Encuesta } from "../../ts/interfaces";
import SendIcon from '@mui/icons-material/Send';

export function Rellenar() {

    const [encuesta, setEncuesta] = useState<Encuesta>();
    useEffect(() => {
        setEncuesta({
            id: 0,
            nombre: '',
            fechaRealizacion: dayjs().valueOf(),
            fechaIncorporacion: dayjs().valueOf(),
            direccion: {
                id: 0,
                calle: '',
                numero: '',
                codigoPostal: '',
                municipio: {
                    CODIGO: '',
                    descripcion: '',
                    provincia: {
                        CODIGO: '',
                        descripcion: ''
                    }
                }
            },
            organismo: {
                dir3: '',
                unidadOrganica: '',
                nivel: 0
            },
            infoHorario: {
                id: 0,
                horario: '',
                tardesObligatorias: '',
                hayHorarioVerano: '',
                horarioVeranoCondiciones: '',
            },
            infoServicios: {
                id: 0,
                hayApartamiento: '',
                hayCargador: '',
                condicionesParking: '',
                hayAparcabicis: '',
                hayAutobuses: '',
                hayComedor: '',
                hayCafeteria: '',
                precioMenu: '',
                hayGuarderia: '',
                cuantiaGuarderia: '',
                direccion: {
                    id: 0,
                    calle: '',
                    numero: '',
                    codigoPostal: '',
                    municipio: {
                        CODIGO: '',
                        descripcion: '',
                        provincia: {
                            CODIGO: '',
                            descripcion: ''
                        }
                    }
                }
            },
            infoTeletrabajo: {
                id: 0,
                hayTeletrabajo: '',
                requisitos: '',
                dias: '',
                otraCCAA: '',
                conciliacion: '',
            },
            infoInstalaciones: {
                id: 0,
                accesibles: '',
                hayDuchas: '',
                bañoAdaptado: '',
                gimnasio: '',
                otros: '',
            },
            infoMovilidad: {
                id: 0,
                movilidadInterna: '',
                posibilidadSalir: '',
                comisionServicio: '',
            },
            infoPuesto: {
                id: 0,
                nivel: '',
                equipoTIC: '',
                infoSistemas: '',
                infoDesarrollo: '',
                tipoProyectos: '',
                proyectosFuturos: '',
                hayOficinaCalidad: '',
                funciones: '',
                hayQueViejar: ''
            },
            infoSalario: {
                id: 0,
                hayProductividad: '',
                cuantiaProductividad: '',
                condicionesProductividad: '',
                hayPagaObjetivos: '',
                cuantiaPagaObjetivos: '',
                hayGuardias: '',
                observaciones: '',
                salario: 0
            },
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
                        <RastroMigas key="rm" titulo='Rellenar cuestionario' nivel2={false} />
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} >
                        <p className="tituloMenu">Rellenar Cuestionario</p>
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

                        </Form>

                    </Col>
                </Row>
                <Row className="justify-content-center mt-3">
                    <Col xs={6} >
                        <Button type="submit"> <SendIcon /> Enviar</Button>
                    </Col>
                </Row>

            </Container>
        }
    </>
}