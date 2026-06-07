import { DataGrid, type GridColDef } from "@mui/x-data-grid";
import { useEffect, useState, type Dispatch, type SetStateAction } from "react";
import { Button, Col, Container, Form, Modal, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { RastroMigas } from "../../components/RastroMigas";
import type { Destino } from "../../ts/interfaces";
import { getDestinos } from "../../ts/restClient";

export function Asistente() {

    const [destinos, setDestinos] = useState<Destino[]>([]);
    const [criterio1, setCriterio1] = useState<string>("");
    const [criterio2, setCriterio2] = useState<string>("");
    const [criterio3, setCriterio3] = useState<string>("");

    let navigate = useNavigate();

    useEffect(() => {
        //hacerBusqueda(setDestinos);

    }, [])


    function hacerBusqueda() {
        getDestinos(criterio1, criterio2, criterio3).then(
            (data) => {
                setDestinos(data);
            }
        );
    }


    const columns: GridColDef[] = [
        {
            field: 'mediaPonderada', headerName: 'Coincidencia', flex: 1, headerClassName: 'cabeceratabla', renderCell: (params) => (
                params.row.mediaPonderada.toFixed(2) + " %"
            )
        },
        { field: 'organismo', headerName: 'Organismo', flex: 3, headerClassName: 'cabeceratabla', headerAlign: 'center', description: 'Nombre del organismo al que corresponde el destino' },
        { field: 'provincia', headerName: 'Provincia', flex: 1, headerClassName: 'cabeceratabla' },
        { field: 'sueldoTotal', type: 'number', headerName: 'Salario (€)', flex: 1, headerClassName: 'cabeceratabla', headerAlign: 'center', align: 'right', description: 'Salario medio en euros, calculado a partir de las encuestas realizadas' },
        { field: 'teletrabajoPorcentaje', headerName: 'Teletrabajo', flex: 1, headerClassName: 'cabeceratabla', headerAlign: 'center', align: 'right', description: 'Porcentaje de empleados que han reportado poder trabajar desde casa' },
        { field: 'guarderiaPorcentaje', headerName: 'Guardería', flex: 1, headerClassName: 'cabeceratabla', headerAlign: 'center', align: 'right', description: 'Porcentaje de empleados que han reportado tener acceso a guardería infantil' },
        { field: 'aparamientoPorcentaje', headerName: 'Aparcamiento', flex: 1, headerClassName: 'cabeceratabla', headerAlign: 'center', align: 'right', description: 'Porcentaje de empleados que han reportado tener acceso a aparcamiento' },
        { field: 'tardesPorcentaje', headerName: 'Tardes', flex: 1, headerClassName: 'cabeceratabla', headerAlign: 'center', align: 'right', description: 'Porcentaje de empleados que han reportado tener que trabajar por las tardes' },
        { field: 'viajarPorcentaje', headerName: 'Viajar', flex: 1, headerClassName: 'cabeceratabla', headerAlign: 'center', align: 'right', description: 'Porcentaje de empleados que han reportado tener que viajar para su trabajo' },
        {
            field: 'fiabilidad', headerName: 'Fiabilidad', flex: 1, headerClassName: 'cabeceratabla', align: 'center', headerAlign: 'center', description: 'Fiabilidad de los datos, basada en el número de encuestas realizadas',
            renderCell: (params) => (
                params.row.encuestas < 11 ? <span style={{ color: 'red' }}>Baja</span> :
                    params.row.encuestas < 31 ? <span style={{ color: 'blue' }}>Media</span> :
                        <span style={{ color: 'green' }}>Alta</span>
            )
        }, {
            field: 'acciones', headerClassName: 'cabeceratabla',
            headerName: 'Consultar',
            flex: 2,
            sortable: false,
            filterable: false,
            align: 'center',
            headerAlign: 'center',
            renderCell: (params) => (
                <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => {
                        navigate("/listadoOrganismo/" + params.row.dir3)
                    }}
                >
                    Ver encuestas
                </Button>
            )
        }
    ];
    return <Container>
        <Row>
            <Col xs={12} md={6}>
                <RastroMigas key="rm" titulo='Buscador de destinos' nivel2={false} />
            </Col>
        </Row>
        <Row>
            <Col xs={12} >
                <p className="tituloMenu">Buscador de destinos</p>
            </Col>
        </Row>
        <Row>
            <Col xs={12} >
                <div className="d-grid gap-2">
                    <Form>
                        <h2 className="subtituloMenu">
                            Seleccion los criterios que más te interesen para encontrar el destino que mejor se adapte a tus necesidades
                        </h2>
                        <Container className="mt-5" >
                            <Row className="mb-3">
                                <Form.Group as={Col} md="3" className="mb-3" controlId="exampleForm.ControlInput1"  >
                                    <Form.Label> Primer criterio (50% de peso)</Form.Label>
                                    <Form.Select aria-label="Default select example" value={criterio1} onChange={(e) => setCriterio1(e.target.value)}>
                                        <option value="">Selecciona un criterio</option>
                                        <option value="sueldoTotal">Salario anual</option>
                                        <option value="teletrabajo">Tener teletrabajo</option>
                                        <option value="viajar">Sin necesidad de viajar</option>
                                        <option value="accesible">Instalaciones accesibles</option>
                                        <option value="tardes">Sin trabajar tardes</option>
                                        <option value="aparcamiento">Hay aparcamiento</option>
                                        <option value="guarderia">Hay Guardería en el centro    </option>
                                        <option value="fiabilidad">Fiabilidad en las encuestas</option>
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group as={Col} md="3" className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Segundo criterio (30% de peso)</Form.Label>
                                    <Form.Select aria-label="Default select example" value={criterio2} onChange={(e) => setCriterio2(e.target.value)}>
                                        <option value="">Selecciona un criterio</option>
                                        <option value="sueldoTotal">Salario anual</option>
                                        <option value="teletrabajo">Tener teletrabajo</option>
                                        <option value="viajar">Sin necesidad de viajar</option>
                                        <option value="accesible">Instalaciones accesibles</option>
                                        <option value="tardes">Sin trabajar tardes</option>
                                        <option value="aparcamiento">Hay aparcamiento</option>
                                        <option value="guarderia">Hay Guardería en el centro</option>
                                        <option value="fiabilidad">Fiabilidad en las encuestas</option>
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group as={Col} md="3" className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Tercer criterio (20% de peso)</Form.Label>
                                    <Form.Select aria-label="Default select example" value={criterio3} onChange={(e) => setCriterio3(e.target.value)}   >
                                        <option value="">Selecciona un criterio</option>
                                        <option value="sueldoTotal">Salario anual</option>
                                        <option value="teletrabajo">Tener teletrabajo</option>
                                        <option value="viajar">Sin necesidad de viajar</option>
                                        <option value="accesible">Instalaciones accesibles</option>
                                        <option value="tardes">Sin trabajar tardes</option>
                                        <option value="aparcamiento">Hay aparcamiento</option>
                                        <option value="guarderia">Hay Guardería en el centro</option>
                                        <option value="fiabilidad">Fiabilidad en las encuestas</option>
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group as={Col} md="3" className="mb-3" controlId="exampleForm.ControlInput1" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'end', alignItems: 'center' }}>
                                    <Form.Label>    </Form.Label>
                                    <Button variant="primary" size="lg" onClick={() => hacerBusqueda()} disabled={!(criterio1 && criterio2 && criterio3)} >Realizar búsqueda</Button>
                                </Form.Group>
                            </Row>
                        </Container>
                    </Form>

                </div>
            </Col>
        </Row>
        <Row>
            <Col xs={12} >

                <div style={{ height: 600, width: '100%' }}>
                    {destinos.length > 0 && <DataGrid
                        rows={destinos} getRowId={(row) => row.orden}
                        columns={columns}
                        autoPageSize
                        getRowClassName={(params) =>
                            params.row.orden === 1 ? 'fila-primero' :
                                params.row.orden === 2 ? 'fila-segundo' :
                                    params.row.orden === 3 ? 'fila-tercero' :
                                        ''
                        }
                    />}
                </div>
            </Col>
        </Row>
    </Container >
}

