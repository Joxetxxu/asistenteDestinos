import { DataGrid, type GridColDef } from '@mui/x-data-grid';
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { RastroMigas } from "../../components/RastroMigas";
import { cambiaCredencialesAxios } from "../../ts/config-axios";
import { getOrganismos } from "../../ts/restClient";
import type { Organo } from "../../ts/tipos";
export function Mapa() {


    const [organismos, setOrganismos] = useState<Organo[]>([]);

    useEffect(() => {
        cambiaCredencialesAxios("user", "user")
        getOrganismos().then(
            (data) => {
                setOrganismos(data)
            }
        )

    }, [])

    const columns: GridColDef[] = [
        { field: 'dir3', headerName: 'Dir3', width: 150, headerClassName: 'cabeceratabla' },
        { field: 'unidadOrganica', headerName: 'Unidad Orgánica', width: 500, headerClassName: 'cabeceratabla' },
        { field: 'nivel', headerName: 'Nivel', width: 70, headerClassName: 'cabeceratabla' },
        {
            field: 'organoPadre.unidadOrganica.dir3',
            headerName: 'Dir3 Padre', width: 150,
            headerClassName: 'cabeceratabla',
            valueGetter: (value, row) => {
                return `${row.organoPadre.dir3}`;
            }
        },
        {
            field: 'organoPadre.unidadOrganica',
            headerName: 'Unidad Orgánica Padre',
            headerClassName: 'cabeceratabla',
            width: 500,
            valueGetter: (value, row) => {
                return `${row.organoPadre.unidadOrganica}`;
            }
        }
    ];


    return <Container>
        <Row>
            <Col xs={12}>
                <RastroMigas key="rm" titulo='Mapa de destinos' nivel2={false} />
            </Col>
        </Row>
        <Row>
            <Col xs={12}>
                <p className="tituloMenu">Listado de organismos   {organismos.length} </p>
            </Col>
        </Row>
        <Row>
            <Col xs={12} md={12}>
                <div style={{ height: 600, width: '100%' }}>
                    <DataGrid
                        rows={organismos} getRowId={(row) => row.dir3}
                        columns={columns}
                        autoPageSize
                    />
                </div>
            </Col>
        </Row>
    </Container>
}