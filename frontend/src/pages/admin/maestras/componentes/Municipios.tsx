import { type GridColDef, DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import type { Municipio } from "../../../../ts/interfaces";
import { getMunicipios } from "../../../../ts/restClient";

export function Municipios() {

    const [municipio, setMunicipios] = useState<Municipio[]>([]);

    useEffect(() => {
        getMunicipios().then(
            (data) => {
                setMunicipios(data)
            }
        )

    }, [])

    const columns: GridColDef[] = [
        { field: 'CODIGO', headerName: 'Código', minWidth: 395, headerClassName: 'cabeceratabla' },
        { field: 'descripcion', headerName: 'Descripción', minWidth: 600, headerClassName: 'cabeceratabla' },
        {
            field: 'provincia', headerName: 'Provincia', width: 350, headerClassName: 'cabeceratabla',
            valueGetter: (value, row) => {
                return `${row.provincia.descripcion}`;
            }
        }
    ];


    return <div style={{ height: 600, width: '100%' }}>
        <DataGrid
            rows={municipio} getRowId={(row) => row.CODIGO}
            columns={columns}
            autoPageSize
        />
    </div>

}