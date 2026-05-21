import { type GridColDef, DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { getOrganismos } from "../../../../ts/restClient";
import type { Organo } from "../../../../ts/tipos";

export function Organismos() {

    const [organismos, setOrganismos] = useState<Organo[]>([]);

    useEffect(() => {
        getOrganismos().then(
            (data) => {
                setOrganismos(data)
            }
        )

    }, [])

    const columns: GridColDef[] = [
        { field: 'dir3', headerName: 'Dir3', width: 150, headerClassName: 'cabeceratabla' },
        { field: 'unidadOrganica', headerName: 'Unidad Orgánica', width: 450, headerClassName: 'cabeceratabla' },
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


    return <div style={{ height: 600, width: '100%' }}>
        <DataGrid
            rows={organismos} getRowId={(row) => row.dir3}
            columns={columns}
            autoPageSize
        />
    </div>

}