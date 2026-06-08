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
        { field: 'dir3', headerName: 'Dir3', flex: 2, headerClassName: 'cabeceratabla' },
        { field: 'unidadOrganica', headerName: 'Unidad Orgánica', flex: 6, headerClassName: 'cabeceratabla' },
        { field: 'nivel', headerName: 'Nivel', flex: 2, headerClassName: 'cabeceratabla' },
        {
            field: 'organoPadre.unidadOrganica.dir3',
            headerName: 'Dir3 Padre', flex: 2,
            headerClassName: 'cabeceratabla',
            valueGetter: (value, row) => {
                return `${row.dir3Padre ? row.dir3Padre : ''}`;
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