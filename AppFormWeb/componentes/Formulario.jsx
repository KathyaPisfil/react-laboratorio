import { Fragment,useState } from "react";
import { Button, Form } from 'react-bootstrap';

function Formulario() {

    const [nombre, setNombre] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [celular, setCelular] = useState('');
    const [lugar, setLugar] = useState('');

    const regxTexto = /^[a-zA-ZÁÉÍÓÚñ\s]+$/;
    const regxNumero = /^[0-9]{1,9}$/;

    const realizarEnvio = (e) => {
        e.preventDefault();
        if (nombre === '' || apellidos === '' || celular === '' || lugar === '') {
            alert('Las cajas están vacías...');
        }
        if ((regxTexto.test(nombre) === false && nombre != '') || (regxTexto.test(apellidos) === false && apellidos != '') || (regxNumero.test(celular) === false && celular != '') || (regxTexto.test(lugar) === false && lugar != '')) {
            alert('No se ha ingresado datos válidos');
        }
    }

    const cambioNombre = (e) => setNombre(e.target.value);
    const cambioApellidos = (e) => setApellidos(e.target.value);
    const cambioCelular = (e) => setCelular(e.target.value);
    const cambioLugar = (e) => setLugar(e.target.value);

    return (
        <>
            <Form onSubmit={realizarEnvio} >
                <Form.Control type="text" value={nombre} onChange={cambioNombre} placeholder="Ingresa tu nombre"></Form.Control>
                <Form.Control type="text" value={apellidos} onChange={cambioApellidos} placeholder="Ingresa tus apellidos"></Form.Control>
                <Form.Control type="text" value={celular} onChange={cambioCelular} placeholder="Ingresa tu celular"></Form.Control>
                <Form.Control type="text" value={lugar} onChange={cambioLugar} placeholder="Ingresa tu lugar de origen"></Form.Control>
            </Form>
            <Button type="submit" >Enviar datos </Button>
        </>
    );
}

export default Formulario;