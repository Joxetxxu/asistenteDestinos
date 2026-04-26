import HomeIcon from '@mui/icons-material/Home';
import { Breadcrumb } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import type { MigasProps } from '../ts/interfaces'
export function RastroMigas({ titulo, nivel2 }: MigasProps) {
    let navigate = useNavigate();
    return (
        <Breadcrumb className="migas">
            <Breadcrumb.Item onClick={() => { navigate("/") }}><HomeIcon fontSize='small'></HomeIcon></Breadcrumb.Item>
            {nivel2 && <Breadcrumb.Item onClick={() => { navigate("/admin") }}>Administración</Breadcrumb.Item>}
            {titulo && <Breadcrumb.Item active>{titulo}</Breadcrumb.Item>}
        </Breadcrumb >
    );
}