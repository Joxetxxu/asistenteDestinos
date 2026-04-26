import HomeIcon from '@mui/icons-material/Home';
import { Breadcrumb } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import type { MigasProps } from '../ts/interfaces'
import { useState } from 'react';
export function RastroMigas() {
    let navigate = useNavigate();
    return (
        <Breadcrumb className="migas">
            <Breadcrumb.Item onClick={() => { navigate("/") }}><HomeIcon fontSize='small'></HomeIcon></Breadcrumb.Item>
            <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                aa
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Data</Breadcrumb.Item>
        </Breadcrumb >
    );
}