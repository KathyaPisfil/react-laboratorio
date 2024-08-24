import { Fragment } from "react";
import { Button, Form } from 'react-bootstrap';

function Formulario(){
    return(
        <>
        <Form >
            <Form.Control type="text" placeholder="Ingresa tu nombre"></Form.Control>
            <Form.Control type="text" placeholder="Ingresa tus apellidos"></Form.Control>
            <Form.Control type="text" placeholder="Ingresa tu celular"></Form.Control>
            <Form.Control type="text" placeholder="Ingresa tu lugar de origen"></Form.Control>
        </Form>
        <Button >Enviar datos </Button>
        </>
    );
}

export default Formulario;