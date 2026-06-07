import { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { RastroMigas } from "../../components/RastroMigas";
import type { Destino } from "../../ts/interfaces";
import { getDestinos } from "../../ts/restClient";
import { DataGrid, type GridColDef } from "@mui/x-data-grid";

export function Asistente() {

    const [destinos, setDestinos] = useState<Destino[]>([]);


    useEffect(() => {
        getDestinos().then(
            (data) => {
                setDestinos(data)
            }
        )

    }, [])


    const columns: GridColDef[] = [
        //     { field: 'dir3', headerName: 'DIR3', flex: 1, headerClassName: 'cabeceratabla' },
        //         { field: 'encuestas', headerName: 'Nº Encuestas', flex: 1, headerClassName: 'cabeceratabla' },F
        { field: 'organismo', headerName: 'Organismo', flex: 3, headerClassName: 'cabeceratabla' , headerAlign: 'center', description: 'Nombre del organismo al que corresponde el destino' },
        { field: 'provincia', headerName: 'Provincia', flex: 1, headerClassName: 'cabeceratabla' },
        { field: 'sueldoTotal', type: 'number', headerName: 'Salario (€)', flex: 1, headerClassName: 'cabeceratabla',  headerAlign: 'center',align: 'right', description: 'Salario medio en euros, calculado a partir de las encuestas realizadas' },
        { field: 'tardesPorcentaje', headerName: 'Tardes', flex: 1, headerClassName: 'cabeceratabla',  headerAlign: 'center',align: 'right', description: 'Porcentaje de empleados que han reportado tener que trabajar por las tardes' },
        { field: 'viajarPorcentaje', headerName: 'Viajar', flex: 1, headerClassName: 'cabeceratabla',  headerAlign: 'center',align: 'right', description: 'Porcentaje de empleados que han reportado tener que viajar para su trabajo' },
        { field: 'guarderiaPorcentaje', headerName: 'Guardería', flex: 1, headerClassName: 'cabeceratabla',  headerAlign: 'center', align: 'right', description: 'Porcentaje de empleados que han reportado tener acceso a guardería infantil' },
        { field: 'teletrabajoPorcentaje', headerName: 'Teletrabajo', flex: 1, headerClassName: 'cabeceratabla',  headerAlign: 'center', align: 'right', description: 'Porcentaje de empleados que han reportado poder trabajar desde casa' },
        {
            field: 'fiabilidad', headerName: 'Fiabilidad', flex: 1, headerClassName: 'cabeceratabla', align: 'center', headerAlign: 'center', description: 'Fiabilidad de los datos, basada en el número de encuestas realizadas',
            renderCell: (params) => (
                params.row.encuestas < 11 ? <span style={{ color: 'red' }}>Baja</span> :
                    params.row.encuestas < 31 ? <span style={{ color: 'blue' }}>Media</span> :
                        <span style={{ color: 'green' }}>Alta</span>
            )
        },
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
                        rows={destinos} getRowId={(row) => row.dir3}
                        columns={columns}
                        autoPageSize
                        getRowClassName={(params) =>
                            params.row.encuestas < 11 ? 'fila-baja-fiabilidad' :
                                params.row.encuestas < 31 ? 'fila-media-fiabilidad' :
                                    'fila-alta-fiabilidad'
                        }
                    />
                </div>


            </Col>
        </Row>

    </Container>
}