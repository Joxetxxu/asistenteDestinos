
import { Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import type { InfoServiciosProps, Municipio } from "../ts/interfaces";
import { useEffect, useState } from "react";
import { getMunicipios } from '../ts/restClient';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from "@mui/material/TextField";
export function InfoServicios({ infoServicios, updateFields }: InfoServiciosProps) {

    const [municipios, setMunicipios] = useState<Municipio[]>([]);

    useEffect(() => {

        getMunicipios().then(
            (data) => {
                setMunicipios(data)
            }
        )
    }, [])
    return (<>
        {infoServicios &&
            <Container className="mt-5" >
                <Row className="mb-3">
                    <Form.Group as={Col} md="2" controlId='hayApartamiento'>
                        <Form.Label>Hay aparcamiento </Form.Label>
                        <Form.Select size="lg" defaultValue={infoServicios.hayApartamiento}
                            onChange={({ target: { value } }) => {
                                updateFields({
                                    infoServicios: {
                                        id: 0,
                                        hayApartamiento: value,
                                        hayCargador: infoServicios.hayCargador,
                                        condicionesParking: infoServicios.condicionesParking,
                                        hayAparcabicis: infoServicios.hayAparcabicis,
                                        hayAutobuses: infoServicios.hayAutobuses,
                                        hayComedor: infoServicios.hayComedor,
                                        hayCafeteria: infoServicios.hayCafeteria,
                                        precioMenu: infoServicios.precioMenu,
                                        hayGuarderia: infoServicios.hayGuarderia,
                                        cuantiaGuarderia: infoServicios.cuantiaGuarderia,
                                        direccion: {
                                            id: 0,
                                            calle: infoServicios.direccion.calle,
                                            numero: infoServicios.direccion.numero,
                                            codigoPostal: infoServicios.direccion.codigoPostal,
                                            municipio: {
                                                CODIGO: infoServicios.direccion?.municipio.CODIGO || "",
                                                descripcion: infoServicios.direccion?.municipio.descripcion || "",
                                                provincia: {
                                                    CODIGO: infoServicios.direccion?.municipio.provincia.CODIGO || "",
                                                    descripcion: infoServicios.direccion?.municipio.provincia.descripcion || ""
                                                }
                                            }
                                        }
                                    }
                                }
                                )
                            }}
                        >
                            <option></option>
                            <option value="S">SI</option>
                            <option value="N">NO</option>
                        </Form.Select>
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} md="2" controlId='hayAparcabicis'>
                        <Form.Label>Hay aparcabicis</Form.Label>
                        <Form.Select size="lg" defaultValue={infoServicios.hayAparcabicis}
                            onChange={({ target: { value } }) => {
                                updateFields({
                                    infoServicios: {
                                        id: 0,
                                        hayApartamiento: infoServicios.hayApartamiento,
                                        hayCargador: infoServicios.hayCargador,
                                        condicionesParking: infoServicios.condicionesParking,
                                        hayAparcabicis: value,
                                        hayAutobuses: infoServicios.hayAutobuses,
                                        hayComedor: infoServicios.hayComedor,
                                        hayCafeteria: infoServicios.hayCafeteria,
                                        precioMenu: infoServicios.precioMenu,
                                        hayGuarderia: infoServicios.hayGuarderia,
                                        cuantiaGuarderia: infoServicios.cuantiaGuarderia,
                                        direccion: {
                                            id: 0,
                                            calle: infoServicios.direccion.calle,
                                            numero: infoServicios.direccion.numero,
                                            codigoPostal: infoServicios.direccion.codigoPostal,
                                            municipio: {
                                                CODIGO: infoServicios.direccion?.municipio.CODIGO || "",
                                                descripcion: infoServicios.direccion?.municipio.descripcion || "",
                                                provincia: {
                                                    CODIGO: infoServicios.direccion?.municipio.provincia.CODIGO || "",
                                                    descripcion: infoServicios.direccion?.municipio.provincia.descripcion || ""
                                                }
                                            }
                                        }
                                    }
                                }
                                )
                            }}
                        >
                            <option></option>
                            <option value="S">SI</option>
                            <option value="N">NO</option>
                        </Form.Select>
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} md="2" controlId='hayCargador'>
                        <Form.Label>Hay cargador</Form.Label>
                        <Form.Select size="lg" defaultValue={infoServicios.hayCargador}
                            onChange={({ target: { value } }) => {
                                updateFields({
                                    infoServicios: {
                                        id: 0,
                                        hayApartamiento: infoServicios.hayApartamiento,
                                        hayCargador: value,
                                        condicionesParking: infoServicios.condicionesParking,
                                        hayAparcabicis: infoServicios.hayAparcabicis,
                                        hayAutobuses: infoServicios.hayAutobuses,
                                        hayComedor: infoServicios.hayComedor,
                                        hayCafeteria: infoServicios.hayCafeteria,
                                        precioMenu: infoServicios.precioMenu,
                                        hayGuarderia: infoServicios.hayGuarderia,
                                        cuantiaGuarderia: infoServicios.cuantiaGuarderia,
                                        direccion: {
                                            id: 0,
                                            calle: infoServicios.direccion.calle,
                                            numero: infoServicios.direccion.numero,
                                            codigoPostal: infoServicios.direccion.codigoPostal,
                                            municipio: {
                                                CODIGO: infoServicios.direccion?.municipio.CODIGO || "",
                                                descripcion: infoServicios.direccion?.municipio.descripcion || "",
                                                provincia: {
                                                    CODIGO: infoServicios.direccion?.municipio.provincia.CODIGO || "",
                                                    descripcion: infoServicios.direccion?.municipio.provincia.descripcion || ""
                                                }
                                            }
                                        }
                                    }
                                }
                                )
                            }}
                        >
                            <option></option>
                            <option value="S">SI</option>
                            <option value="N">NO</option>
                        </Form.Select>
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId='condicionesParking' >
                        <Form.Label>Condiciones para el parking</Form.Label>
                        <Form.Control
                            required
                            type='text'
                            size="lg"
                            defaultValue={infoServicios.condicionesParking}
                            onChange={({ target: { value } }) => {
                                updateFields({
                                    infoServicios: {
                                        id: 0,
                                        hayApartamiento: infoServicios.hayApartamiento,
                                        hayCargador: infoServicios.hayCargador,
                                        condicionesParking: value,
                                        hayAparcabicis: infoServicios.hayAparcabicis,
                                        hayAutobuses: infoServicios.hayAutobuses,
                                        hayComedor: infoServicios.hayComedor,
                                        hayCafeteria: infoServicios.hayCafeteria,
                                        precioMenu: infoServicios.precioMenu,
                                        hayGuarderia: infoServicios.hayGuarderia,
                                        cuantiaGuarderia: infoServicios.cuantiaGuarderia,
                                        direccion: {
                                            id: 0,
                                            calle: infoServicios.direccion.calle,
                                            numero: infoServicios.direccion.numero,
                                            codigoPostal: infoServicios.direccion.codigoPostal,
                                            municipio: {
                                                CODIGO: infoServicios.direccion?.municipio.CODIGO || "",
                                                descripcion: infoServicios.direccion?.municipio.descripcion || "",
                                                provincia: {
                                                    CODIGO: infoServicios.direccion?.municipio.provincia.CODIGO || "",
                                                    descripcion: infoServicios.direccion?.municipio.provincia.descripcion || ""
                                                }
                                            }
                                        }
                                    }
                                }
                                )
                            }}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} md="2" controlId='hayAutobuses'>
                        <Form.Label>Hay autobuses </Form.Label>
                        <Form.Select size="lg" defaultValue={infoServicios.hayAutobuses}
                            onChange={({ target: { value } }) => {
                                updateFields({
                                    infoServicios: {
                                        id: 0,
                                        hayApartamiento: infoServicios.hayApartamiento,
                                        hayCargador: infoServicios.hayCargador,
                                        condicionesParking: infoServicios.condicionesParking,
                                        hayAparcabicis: infoServicios.hayAparcabicis,
                                        hayAutobuses: value,
                                        hayComedor: infoServicios.hayComedor,
                                        hayCafeteria: infoServicios.hayCafeteria,
                                        precioMenu: infoServicios.precioMenu,
                                        hayGuarderia: infoServicios.hayGuarderia,
                                        cuantiaGuarderia: infoServicios.cuantiaGuarderia,
                                        direccion: {
                                            id: 0,
                                            calle: infoServicios.direccion.calle,
                                            numero: infoServicios.direccion.numero,
                                            codigoPostal: infoServicios.direccion.codigoPostal,
                                            municipio: {
                                                CODIGO: infoServicios.direccion?.municipio.CODIGO || "",
                                                descripcion: infoServicios.direccion?.municipio.descripcion || "",
                                                provincia: {
                                                    CODIGO: infoServicios.direccion?.municipio.provincia.CODIGO || "",
                                                    descripcion: infoServicios.direccion?.municipio.provincia.descripcion || ""
                                                }
                                            }
                                        }
                                    }
                                }
                                )
                            }}
                        >
                            <option></option>
                            <option value="S">SI</option>
                            <option value="N">NO</option>
                        </Form.Select>
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} md="2" controlId='hayComedor'>
                        <Form.Label>Hay comedor </Form.Label>
                        <Form.Select size="lg" defaultValue={infoServicios.hayComedor}
                            onChange={({ target: { value } }) => {
                                updateFields({
                                    infoServicios: {
                                        id: 0,
                                        hayApartamiento: infoServicios.hayApartamiento,
                                        hayCargador: infoServicios.hayCargador,
                                        condicionesParking: infoServicios.condicionesParking,
                                        hayAparcabicis: infoServicios.hayAparcabicis,
                                        hayAutobuses: infoServicios.hayAutobuses,
                                        hayComedor: value,
                                        hayCafeteria: infoServicios.hayCafeteria,
                                        precioMenu: infoServicios.precioMenu,
                                        hayGuarderia: infoServicios.hayGuarderia,
                                        cuantiaGuarderia: infoServicios.cuantiaGuarderia,
                                        direccion: {
                                            id: 0,
                                            calle: infoServicios.direccion.calle,
                                            numero: infoServicios.direccion.numero,
                                            codigoPostal: infoServicios.direccion.codigoPostal,
                                            municipio: {
                                                CODIGO: infoServicios.direccion?.municipio.CODIGO || "",
                                                descripcion: infoServicios.direccion?.municipio.descripcion || "",
                                                provincia: {
                                                    CODIGO: infoServicios.direccion?.municipio.provincia.CODIGO || "",
                                                    descripcion: infoServicios.direccion?.municipio.provincia.descripcion || ""
                                                }
                                            }
                                        }
                                    }
                                }
                                )
                            }}
                        >
                            <option></option>
                            <option value="S">SI</option>
                            <option value="N">NO</option>
                        </Form.Select>
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} md="2" controlId='hayCafeteria'>
                        <Form.Label>Hay cafetería </Form.Label>
                        <Form.Select size="lg" defaultValue={infoServicios.hayCafeteria}
                            onChange={({ target: { value } }) => {
                                updateFields({
                                    infoServicios: {
                                        id: 0,
                                        hayApartamiento: infoServicios.hayApartamiento,
                                        hayCargador: infoServicios.hayCargador,
                                        condicionesParking: infoServicios.condicionesParking,
                                        hayAparcabicis: infoServicios.hayAparcabicis,
                                        hayAutobuses: infoServicios.hayAutobuses,
                                        hayComedor: infoServicios.hayComedor,
                                        hayCafeteria: value,
                                        precioMenu: infoServicios.precioMenu,
                                        hayGuarderia: infoServicios.hayGuarderia,
                                        cuantiaGuarderia: infoServicios.cuantiaGuarderia,
                                        direccion: {
                                            id: 0,
                                            calle: infoServicios.direccion.calle,
                                            numero: infoServicios.direccion.numero,
                                            codigoPostal: infoServicios.direccion.codigoPostal,
                                            municipio: {
                                                CODIGO: infoServicios.direccion?.municipio.CODIGO || "",
                                                descripcion: infoServicios.direccion?.municipio.descripcion || "",
                                                provincia: {
                                                    CODIGO: infoServicios.direccion?.municipio.provincia.CODIGO || "",
                                                    descripcion: infoServicios.direccion?.municipio.provincia.descripcion || ""
                                                }
                                            }
                                        }
                                    }
                                }
                                )
                            }}
                        >
                            <option></option>
                            <option value="S">SI</option>
                            <option value="N">NO</option>
                        </Form.Select>
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId='precioMenu' >
                        <Form.Label>Precio menú</Form.Label>
                        <Form.Control
                            required
                            type='text'
                            size="lg"
                            defaultValue={infoServicios.precioMenu}
                            onChange={({ target: { value } }) => {
                                updateFields({
                                    infoServicios: {
                                        id: 0,
                                        hayApartamiento: infoServicios.hayApartamiento,
                                        hayCargador: infoServicios.hayCargador,
                                        condicionesParking: infoServicios.condicionesParking,
                                        hayAparcabicis: infoServicios.hayAparcabicis,
                                        hayAutobuses: infoServicios.hayAutobuses,
                                        hayComedor: infoServicios.hayComedor,
                                        hayCafeteria: infoServicios.hayCafeteria,
                                        precioMenu: value,
                                        hayGuarderia: infoServicios.hayGuarderia,
                                        cuantiaGuarderia: infoServicios.cuantiaGuarderia,
                                        direccion: {
                                            id: 0,
                                            calle: infoServicios.direccion.calle,
                                            numero: infoServicios.direccion.numero,
                                            codigoPostal: infoServicios.direccion.codigoPostal,
                                            municipio: {
                                                CODIGO: infoServicios.direccion?.municipio.CODIGO || "",
                                                descripcion: infoServicios.direccion?.municipio.descripcion || "",
                                                provincia: {
                                                    CODIGO: infoServicios.direccion?.municipio.provincia.CODIGO || "",
                                                    descripcion: infoServicios.direccion?.municipio.provincia.descripcion || ""
                                                }
                                            }
                                        }
                                    }
                                }
                                )
                            }}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} md="2" controlId='hayCafeteria'>
                        <Form.Label>Hay Guardería </Form.Label>
                        <Form.Select size="lg" defaultValue={infoServicios.hayGuarderia}
                            onChange={({ target: { value } }) => {
                                updateFields({
                                    infoServicios: {
                                        id: 0,
                                        hayApartamiento: infoServicios.hayApartamiento,
                                        hayCargador: infoServicios.hayCargador,
                                        condicionesParking: infoServicios.condicionesParking,
                                        hayAparcabicis: infoServicios.hayAparcabicis,
                                        hayAutobuses: infoServicios.hayAutobuses,
                                        hayComedor: infoServicios.hayComedor,
                                        hayCafeteria: infoServicios.hayCafeteria,
                                        precioMenu: infoServicios.precioMenu,
                                        hayGuarderia: value,
                                        cuantiaGuarderia: infoServicios.cuantiaGuarderia,
                                        direccion: {
                                            id: 0,
                                            calle: infoServicios.direccion.calle,
                                            numero: infoServicios.direccion.numero,
                                            codigoPostal: infoServicios.direccion.codigoPostal,
                                            municipio: {
                                                CODIGO: infoServicios.direccion?.municipio.CODIGO || "",
                                                descripcion: infoServicios.direccion?.municipio.descripcion || "",
                                                provincia: {
                                                    CODIGO: infoServicios.direccion?.municipio.provincia.CODIGO || "",
                                                    descripcion: infoServicios.direccion?.municipio.provincia.descripcion || ""
                                                }
                                            }
                                        }
                                    }
                                }
                                )
                            }}
                        >
                            <option></option>
                            <option value="S">SI</option>
                            <option value="N">NO</option>
                        </Form.Select>
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId='cuantiaGuarderia' className="right">
                        <Form.Label>Cuantía guardería</Form.Label>
                        <Form.Control
                            required
                            type='number'
                            size="lg"
                            defaultValue={infoServicios.cuantiaGuarderia}
                            onChange={({ target: { value } }) => {
                                updateFields({
                                    infoServicios: {
                                        id: 0,
                                        hayApartamiento: infoServicios.hayApartamiento,
                                        hayCargador: infoServicios.hayCargador,
                                        condicionesParking: infoServicios.condicionesParking,
                                        hayAparcabicis: infoServicios.hayAparcabicis,
                                        hayAutobuses: infoServicios.hayAutobuses,
                                        hayComedor: infoServicios.hayComedor,
                                        hayCafeteria: infoServicios.hayCafeteria,
                                        precioMenu: infoServicios.precioMenu,
                                        hayGuarderia: infoServicios.hayGuarderia,
                                        cuantiaGuarderia: value,
                                        direccion: {
                                            id: 0,
                                            calle: infoServicios.direccion.calle,
                                            numero: infoServicios.direccion.numero,
                                            codigoPostal: infoServicios.direccion.codigoPostal,
                                            municipio: {
                                                CODIGO: infoServicios.direccion?.municipio.CODIGO || "",
                                                descripcion: infoServicios.direccion?.municipio.descripcion || "",
                                                provincia: {
                                                    CODIGO: infoServicios.direccion?.municipio.provincia.CODIGO || "",
                                                    descripcion: infoServicios.direccion?.municipio.provincia.descripcion || ""
                                                }
                                            }
                                        }
                                    }
                                }
                                )
                            }}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} md="8" controlId='calleG'>
                        <Form.Label>Dirección de la guardería</Form.Label>
                        <InputGroup >
                            <Form.Control
                                required
                                type="text"
                                size="lg"
                                defaultValue={infoServicios.direccion && infoServicios.direccion.calle}
                                onChange={({ target: { value } }) => {
                                    updateFields({
                                        infoServicios: {
                                            id: 0,
                                            hayApartamiento: infoServicios.hayApartamiento,
                                            hayCargador: infoServicios.hayCargador,
                                            condicionesParking: infoServicios.condicionesParking,
                                            hayAparcabicis: infoServicios.hayAparcabicis,
                                            hayAutobuses: infoServicios.hayAutobuses,
                                            hayComedor: infoServicios.hayComedor,
                                            hayCafeteria: infoServicios.hayCafeteria,
                                            precioMenu: infoServicios.precioMenu,
                                            hayGuarderia: infoServicios.hayGuarderia,
                                            cuantiaGuarderia: infoServicios.cuantiaGuarderia,
                                            direccion: {
                                                id: 0,
                                                calle: value,
                                                numero: infoServicios.direccion.numero,
                                                codigoPostal: infoServicios.direccion.codigoPostal,
                                                municipio: {
                                                    CODIGO: infoServicios.direccion?.municipio.CODIGO || "",
                                                    descripcion: infoServicios.direccion?.municipio.descripcion || "",
                                                    provincia: {
                                                        CODIGO: infoServicios.direccion?.municipio.provincia.CODIGO || "",
                                                        descripcion: infoServicios.direccion?.municipio.provincia.descripcion || ""
                                                    }
                                                }
                                            }
                                        }
                                    }
                                    )
                                }}
                            />
                        </InputGroup>
                    </Form.Group>
                    <Form.Group as={Col} md="1" controlId='numeroG'>
                        <Form.Label>Número</Form.Label>
                        <InputGroup >
                            <Form.Control
                                required
                                type="text"
                                size="lg"
                                defaultValue={infoServicios.direccion && infoServicios.direccion.numero}
                                onChange={({ target: { value } }) => {
                                    updateFields({
                                        infoServicios: {
                                            id: 0,
                                            hayApartamiento: infoServicios.hayApartamiento,
                                            hayCargador: infoServicios.hayCargador,
                                            condicionesParking: infoServicios.condicionesParking,
                                            hayAparcabicis: infoServicios.hayAparcabicis,
                                            hayAutobuses: infoServicios.hayAutobuses,
                                            hayComedor: infoServicios.hayComedor,
                                            hayCafeteria: infoServicios.hayCafeteria,
                                            precioMenu: infoServicios.precioMenu,
                                            hayGuarderia: infoServicios.hayGuarderia,
                                            cuantiaGuarderia: infoServicios.cuantiaGuarderia,
                                            direccion: {
                                                id: 0,
                                                calle: infoServicios.direccion.calle,
                                                numero: value,
                                                codigoPostal: infoServicios.direccion.codigoPostal,
                                                municipio: {
                                                    CODIGO: infoServicios.direccion?.municipio.CODIGO || "",
                                                    descripcion: infoServicios.direccion?.municipio.descripcion || "",
                                                    provincia: {
                                                        CODIGO: infoServicios.direccion?.municipio.provincia.CODIGO || "",
                                                        descripcion: infoServicios.direccion?.municipio.provincia.descripcion || ""
                                                    }
                                                }
                                            }
                                        }
                                    }
                                    )
                                }}
                            />
                        </InputGroup>
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId='codigoPostalG'>
                        <Form.Label>Código postal</Form.Label>
                        <InputGroup >
                            <Form.Control
                                required
                                type="text"
                                size="lg"
                                defaultValue={infoServicios.direccion && infoServicios.direccion.codigoPostal}
                                onChange={({ target: { value } }) => {
                                    updateFields({
                                        infoServicios: {
                                            id: 0,
                                            hayApartamiento: infoServicios.hayApartamiento,
                                            hayCargador: infoServicios.hayCargador,
                                            condicionesParking: infoServicios.condicionesParking,
                                            hayAparcabicis: infoServicios.hayAparcabicis,
                                            hayAutobuses: infoServicios.hayAutobuses,
                                            hayComedor: infoServicios.hayComedor,
                                            hayCafeteria: infoServicios.hayCafeteria,
                                            precioMenu: infoServicios.precioMenu,
                                            hayGuarderia: infoServicios.hayGuarderia,
                                            cuantiaGuarderia: infoServicios.cuantiaGuarderia,
                                            direccion: {
                                                id: 0,
                                                calle: infoServicios.direccion.calle,
                                                numero: infoServicios.direccion.numero,
                                                codigoPostal: value,
                                                municipio: {
                                                    CODIGO: infoServicios.direccion?.municipio.CODIGO || "",
                                                    descripcion: infoServicios.direccion?.municipio.descripcion || "",
                                                    provincia: {
                                                        CODIGO: infoServicios.direccion?.municipio.provincia.CODIGO || "",
                                                        descripcion: infoServicios.direccion?.municipio.provincia.descripcion || ""
                                                    }
                                                }
                                            }
                                        }
                                    }
                                    )
                                }}
                            />
                        </InputGroup>
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId='municipioG' className="mt-3">
                        <Form.Label>Municipio</Form.Label>
                        {/*  <InputGroup >
                            <Form.Control
                                required
                                type="text"
                                size="lg"
                                defaultValue={infoServicios.direccion && infoServicios.direccion.municipio.descripcion}

                            />
                        </InputGroup> */}

                        <Autocomplete
                            disablePortal
                            options={municipios}
                            getOptionLabel={(option) => option.descripcion}
                            getOptionKey={(option) => option.CODIGO}
                            renderInput={(params) => <TextField {...params} />}
                            value={infoServicios.direccion?.municipio}
                             onChange={(event, value) => {
                                updateFields({
                                    infoServicios: {
                                        id: 0,
                                        hayApartamiento: infoServicios.hayApartamiento,
                                        hayCargador: infoServicios.hayCargador,
                                        condicionesParking: infoServicios.condicionesParking,
                                        hayAparcabicis: infoServicios.hayAparcabicis,
                                        hayAutobuses: infoServicios.hayAutobuses,
                                        hayComedor: infoServicios.hayComedor,
                                        hayCafeteria: infoServicios.hayCafeteria,
                                        precioMenu: infoServicios.precioMenu,
                                        hayGuarderia: infoServicios.hayGuarderia,
                                        cuantiaGuarderia: infoServicios.cuantiaGuarderia,
                                        direccion: {
                                            id: 0,
                                            calle: infoServicios.direccion.calle,
                                            numero: infoServicios.direccion.numero,
                                            codigoPostal: infoServicios.direccion.codigoPostal,
                                            municipio: {
                                                CODIGO: value?.CODIGO || "",
                                                descripcion: value?.descripcion || "",
                                                provincia: value?.provincia || { CODIGO: "0", descripcion: "no Encontrado" }
                                            }
                                        }
                                    }
                                }
                                )
                            }}

                        />

                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId='provinciaG' className="mt-3">
                        <Form.Label>Provincia</Form.Label>
                        <InputGroup >
                            <Form.Control
                                required
                                type="text"
                                size="lg"
                                disabled={true}
                                defaultValue={infoServicios.direccion && infoServicios.direccion.municipio.provincia.descripcion}
                            />
                        </InputGroup>
                    </Form.Group>
                </Row>
            </Container>
        }
    </>

    );
}