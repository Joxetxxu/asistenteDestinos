import { DataGrid, type GridColDef } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { RastroMigas } from "../../components/RastroMigas";
import type { Destino } from "../../ts/interfaces";
import { getDestinos } from "../../ts/restClient";

export function Asistente() {

    const [destinos, setDestinos] = useState<Destino[]>([]);
    let navigate = useNavigate();

    useEffect(() => {
        getDestinos("sueldoTotal", "viajar", "aparcamiento").then(
            (data) => {
                setDestinos(data)
            }
        )

    }, [])


    const columns: GridColDef[] = [
        {
            field: 'mediaPonderada', headerName: 'Acierto', flex: 1, headerClassName: 'cabeceratabla', renderCell: (params) => (
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
                <p className="tituloMenu">Buscar destinos</p>

                <div style={{ height: 600, width: '100%' }}>
                    <DataGrid
                        rows={destinos} getRowId={(row) => row.orden}
                        columns={columns}
                        autoPageSize
                        getRowClassName={(params) =>
                            params.row.orden === 1 ? 'fila-primero' :
                                params.row.orden === 2 ? 'fila-segundo' :
                                    params.row.orden === 3 ? 'fila-tercero' :
                                        ''
                        }
                    />
                </div>


            </Col>
        </Row>

    </Container>
}