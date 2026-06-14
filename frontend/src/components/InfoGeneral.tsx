import MapIcon from '@mui/icons-material/Map';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import type { PickerValue } from '@mui/x-date-pickers/internals';
import dayjs from 'dayjs';
import 'dayjs/locale/es';
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import type { InfoGenerarProps, Municipio, Organismo } from "../ts/interfaces";
import { useEffect, useState } from "react";
import { getMunicipios, getOrganismos } from '../ts/restClient';


export function InfoGeneral({ encuesta, estado, updateFields }: InfoGenerarProps) {
    const [organismos, setOrganismos] = useState<Organismo[]>([]);
    const [municipios, setMunicipios] = useState<Municipio[]>([]);

    useEffect(() => {
        getOrganismos().then(
            (data) => {
                setOrganismos(data)
            }
        )
        getMunicipios().then(
            (data) => {
                setMunicipios(data)
            }
        )
    }, [])


    return (<>
        {encuesta &&
            <Container className="mt-5" >
                <Row className="mb-3">
                    <Form.Group as={Col} md="2" controlId='id'>
                        <Form.Label>ID</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="id"
                            size="lg"
                            disabled={true}
                            defaultValue={encuesta.id}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId='nombre'>
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            size="lg"
                            defaultValue={encuesta.nombre}
                            onChange={({ target: { value } }) => {
                                updateFields({ nombre: value })
                            }}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId='fechaIncorporacion'>
                        <Form.Label>Fecha de incorporación</Form.Label>
                        <DatePicker
                            value={dayjs(encuesta.fechaIncorporacion)}
                            onChange={(newValue: PickerValue) => {
                                updateFields({ fechaIncorporacion: newValue?.valueOf() })
                            }}
                        />

                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId='fechaRealizacion'>
                        <Form.Label>Fecha de realización de la encuesta</Form.Label>
                        <InputGroup >
                            <DatePicker
                                value={dayjs(encuesta.fechaRealizacion)}
                                onChange={(newValue: PickerValue) => {
                                    updateFields({ fechaRealizacion: newValue?.valueOf() })
                                }}
                            />
                        </InputGroup>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} md="12" controlId='unidadOrganica'>
                        <Form.Label>Organismo</Form.Label>
                        <Autocomplete
                            disablePortal
                            options={organismos}
                            getOptionLabel={(option) => option.unidadOrganica}
                            getOptionKey={(option) => option.dir3}
                            renderInput={(params) => <TextField {...params} />}
                            value={encuesta.organismo}
                            onChange={(event, value) => {
                                updateFields({
                                    organismo: {
                                        dir3: value?.dir3 || "",
                                        nivel: value?.nivel || 1,
                                        unidadOrganica: value?.unidadOrganica || "",
                                        organoPadre: value?.organoPadre
                                    }
                                })
                            }}
                        />
                    </Form.Group>
                </Row>


                <Row className="mb-3">
                    <Form.Group as={Col} md="8" controlId='calle'>
                        <Form.Label>Calle</Form.Label>
                        <InputGroup >
                            <Form.Control
                                required
                                type="text"
                                size="lg"
                                defaultValue={encuesta.direccion?.calle}
                                onChange={({ target: { value } }) => {
                                    updateFields({
                                        direccion: {
                                            municipio: {
                                                CODIGO: encuesta.direccion?.municipio.CODIGO || "",
                                                descripcion: encuesta.direccion?.municipio.descripcion || "",
                                                provincia: {
                                                    CODIGO: encuesta.direccion?.municipio.provincia.CODIGO || "",
                                                    descripcion: encuesta.direccion?.municipio.provincia.descripcion || ""
                                                }
                                            },
                                            calle: value,
                                            id: 0,
                                            codigoPostal: encuesta.direccion?.codigoPostal || "",
                                            numero: encuesta.direccion?.numero || "",
                                            lat: encuesta.direccion?.lat || 0,
                                            lng: encuesta.direccion?.lng || 0
                                        }
                                    })
                                }}
                            />
                        </InputGroup>
                    </Form.Group>
                    <Form.Group as={Col} md="1" controlId='numero'>
                        <Form.Label>Número</Form.Label>
                        <InputGroup >
                            <Form.Control
                                required
                                type="text"
                                size="lg"
                                defaultValue={encuesta.direccion?.numero}
                                onChange={({ target: { value } }) => {
                                    updateFields({
                                        direccion: {
                                            municipio: {
                                                CODIGO: encuesta.direccion?.municipio.CODIGO || "",
                                                descripcion: encuesta.direccion?.municipio.descripcion || "",
                                                provincia: {
                                                    CODIGO: encuesta.direccion?.municipio.provincia.CODIGO || "",
                                                    descripcion: encuesta.direccion?.municipio.provincia.descripcion || ""
                                                }
                                            },
                                            calle: encuesta.direccion?.calle || "",
                                            id: 0,
                                            codigoPostal: encuesta.direccion?.codigoPostal || "",
                                            numero: value,
                                            lat: encuesta.direccion?.lat || 0,
                                            lng: encuesta.direccion?.lng || 0
                                        }
                                    })
                                }}
                            />
                        </InputGroup>
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId='codigoPostal'>
                        <Form.Label>Código postal</Form.Label>
                        <InputGroup >
                            <Form.Control
                                required
                                type="text"
                                size="lg"
                                defaultValue={encuesta.direccion?.codigoPostal}
                                onChange={({ target: { value } }) => {
                                    updateFields({
                                        direccion: {
                                            municipio: {
                                                CODIGO: encuesta.direccion?.municipio.CODIGO || "",
                                                descripcion: encuesta.direccion?.municipio.descripcion || "",
                                                provincia: {
                                                    CODIGO: encuesta.direccion?.municipio.provincia.CODIGO || "",
                                                    descripcion: encuesta.direccion?.municipio.provincia.descripcion || ""
                                                }
                                            },
                                            calle: encuesta.direccion?.calle || "",
                                            id: 0,
                                            codigoPostal: value || "",
                                            numero: encuesta.direccion?.numero || "",
                                            lat: encuesta.direccion?.lat || 0,
                                            lng: encuesta.direccion?.lng || 0
                                        }
                                    })
                                }}
                            />
                        </InputGroup>
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId='municipio' className="mt-3">
                        <Form.Label>Municipio</Form.Label>
                        {/* <InputGroup >
                            <Form.Control
                                required
                                type="text"
                                size="lg"
                                defaultValue={encuesta.direccion?.municipio.descripcion}
                            />
                        </InputGroup> */}
                        <Autocomplete
                            disablePortal
                            options={municipios}
                            getOptionLabel={(option) => option.descripcion}
                            getOptionKey={(option) => option.CODIGO}
                            renderInput={(params) => <TextField {...params} />}
                            value={encuesta.direccion?.municipio}
                            onChange={(event, value) => {
                                console.log(value?.CODIGO);
                                updateFields({
                                    direccion: {
                                        municipio: {
                                            CODIGO: value?.CODIGO || "",
                                            descripcion: value?.descripcion || "",
                                            provincia: value?.provincia || { CODIGO: "0", descripcion: "no Encontrado" }
                                        },
                                        calle: encuesta.direccion?.calle || "",
                                        id: 0,
                                        codigoPostal: encuesta.direccion?.codigoPostal || "",
                                        numero: encuesta.direccion?.numero || "",
                                    }
                                })
                            }}
                        />
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId='provincia' className="mt-3">
                        <Form.Label>Provincia</Form.Label>
                        <InputGroup >
                            <Form.Control
                                required
                                type="text"
                                size="lg"
                                disabled={true}
                                defaultValue={encuesta.direccion?.municipio.provincia.descripcion}
                            />
                        </InputGroup>
                    </Form.Group>
                </Row>



                <Row className="mb-3">
                    <Form.Group as={Col} md="5" controlId='lat' className="mt-3">
                        <Form.Label>Coordenada - Latitud</Form.Label>
                        <InputGroup >
                            <Form.Control
                                required
                                type="text"
                                size="lg"
                                defaultValue={encuesta.direccion?.lat}
                                onChange={({ target: { value } }) => {
                                    updateFields({
                                        direccion: {
                                            municipio: {
                                                CODIGO: encuesta.direccion?.municipio.CODIGO || "",
                                                descripcion: encuesta.direccion?.municipio.descripcion || "",
                                                provincia: {
                                                    CODIGO: encuesta.direccion?.municipio.provincia.CODIGO || "",
                                                    descripcion: encuesta.direccion?.municipio.provincia.descripcion || ""
                                                }
                                            },
                                            calle: encuesta.direccion?.calle || "",
                                            id: 0,
                                            codigoPostal: encuesta.direccion?.codigoPostal || "",
                                            numero: encuesta.direccion?.numero || "",
                                            lat: Number(value),
                                            lng: encuesta.direccion?.lng || 0,
                                        }
                                    })
                                }}
                            />
                        </InputGroup>
                    </Form.Group>
                    <Form.Group as={Col} md="5" controlId='lng' className="mt-3">
                        <Form.Label>Coordenada - Longitud </Form.Label>
                        <InputGroup >
                            <Form.Control
                                required
                                type="text"
                                size="lg"
                                defaultValue={encuesta.direccion?.lng}
                                onChange={({ target: { value } }) => {
                                    updateFields({
                                        direccion: {
                                            municipio: {
                                                CODIGO: encuesta.direccion?.municipio.CODIGO || "",
                                                descripcion: encuesta.direccion?.municipio.descripcion || "",
                                                provincia: {
                                                    CODIGO: encuesta.direccion?.municipio.provincia.CODIGO || "",
                                                    descripcion: encuesta.direccion?.municipio.provincia.descripcion || ""
                                                }
                                            },
                                            calle: encuesta.direccion?.calle || "",
                                            id: 0,
                                            codigoPostal: encuesta.direccion?.codigoPostal || "",
                                            numero: encuesta.direccion?.numero || "",
                                            lat: encuesta.direccion?.lat || 0,
                                            lng: Number(value),
                                        }
                                    })
                                }}
                            />
                        </InputGroup>
                    </Form.Group>

                    <Form.Group as={Col} md="2" controlId="exampleForm.boton" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'end', alignItems: 'center' }}>
                        <Form.Label>    </Form.Label>
                        <Button variant="primary" size="lg" onClick={() => {
                            let googleMapsUrl = `https://www.google.com/maps?q=${encuesta.direccion?.lat},${encuesta.direccion?.lng}`;
                            window.open(googleMapsUrl, '_blank');
                        }}> <MapIcon>   </MapIcon> </Button>

                    </Form.Group>
                </Row>
            </Container>
        }
    </>

    );
}