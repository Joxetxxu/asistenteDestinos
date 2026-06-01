import { useEffect, useState } from "react";
import type { Encuesta } from "../../../ts/interfaces";
import { getEncuestas } from "../../../ts/restClient";
import { Button, Col, Container, Row } from "react-bootstrap";
import { RastroMigas } from "../../../components/RastroMigas";
import { DataGrid, type GridColDef } from "@mui/x-data-grid";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";

export function Listado() {


    const [encuestas, setEncuestas] = useState<Encuesta[]>([]);
    const [visible, setVisible] = useState<Boolean>(false);
    let navigate = useNavigate();
    useEffect(() => {
        getEncuestas().then((data) => {
            setEncuestas(data)
            setVisible(true)
        })
    }, [])

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', flex: 1, headerClassName: 'cabeceratabla' },
        {
            field: 'fechaRealizacion', headerName: 'Fecha', flex: 2, headerClassName: 'cabeceratabla',
            valueGetter: (value, row) => {
                return dayjs(row.fechaRealizacion).format('DD/MM/YYYY')
            }
        },
        {
            field: 'organismo', headerName: 'Unidad Orgánica', flex: 7, headerClassName: 'cabeceratabla',
            valueGetter: (value, row) => {
                return `${row.organismo.unidadOrganica}`;
            }
        },
        {
            field: 'direccion', headerName: 'Provincia', flex: 4, headerClassName: 'cabeceratabla',
            valueGetter: (value, row) => {
                return `${row.direccion.municipio.provincia.descripcion}`;
            }
        }, {
            field: 'acciones', headerClassName: 'cabeceratabla',
            headerName: 'Consultar',
            flex: 2,
            sortable: false,
            filterable: false,
            renderCell: (params) => (
                <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => {
                        navigate("/listado/" + params.row.id)
                    }}
                >
                    Ver
                </Button>
            )
        }

    ];

    return <>
        {visible &&
            <Container>
                <Row>
                    <Col xs={12} md={6}>
                        <RastroMigas key="rm" titulo='Listado de cuestionarios' nivel2={false} />
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} >
                        <p className="tituloMenu">Listado de cuestionarios</p>
                        <div style={{ height: 600, width: '100%' }}>
                            <DataGrid
                                rows={encuestas} getRowId={(row) => row.id}
                                columns={columns}
                                autoPageSize
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
        }
    </>
}