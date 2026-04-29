import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { RastroMigas } from "../../components/RastroMigas";
import { getPost } from "../../ts/restClient";

export function Asistente() {
    useEffect(() => {
        getPost(1).then(
            (data) => {
                console.log(data)
            }
        )

    }, [])
    return <Container>
        <Row>
            <Col xs={12} md={6}>
                <RastroMigas key="rm" titulo='Buscador de destinos' nivel2={false} />
            </Col>
        </Row>
    </Container>
}