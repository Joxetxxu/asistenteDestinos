import { type GridColDef, DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import type { Provincia } from "../../../../ts/interfaces";
import { getProvincias } from "../../../../ts/restClient";

export function Provincias() {

    const [provincias, setProvincias] = useState<Provincia[]>([]);

    useEffect(() => {
        getProvincias().then(
            (data) => {
                setProvincias(data)
            }
        )

    }, [])

    const columns: GridColDef[] = [
        { field: 'CODIGO', headerName: 'Código', flex: 4, headerClassName: 'cabeceratabla' },
        { field: 'descripcion', headerName: 'Descripción', flex: 8, headerClassName: 'cabeceratabla' }
    ];


    return <div style={{ height: 600, width: '100%' }}>
        <DataGrid
            rows={provincias} getRowId={(row) => row.CODIGO}
            columns={columns}
            autoPageSize
        />
    </div>

}