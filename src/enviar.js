import React, { useRef, useState } from "react";
export default function Enviar() {

    
    
    const nombreRef = useRef();
    const apellidoRef = useRef();
    const telefonoRef = useRef();

   

    function mandar() {
        fetch('http://www.raydelto.org/agenda.php', {
 method: "POST",
 body: JSON.stringify({
     nombre: nombreRef.current.value,
     apellido: apellidoRef.current.value,
     telefono: telefonoRef.current.value
 })
})


.then(response => response.json())

.then(json => console.log(json));

    nombreRef.current.value = "";
    apellidoRef.current.value = "";
    telefonoRef.current.value = "";


    }

    return(
        <div>
            <h2>Agregar nuevo contacto</h2>
            Nombre&nbsp; <input ref={nombreRef} type="text" />
            <br></br>
            <br></br>
            Apellido&nbsp; <input ref={apellidoRef} type="text" />
            <br></br>
            <br></br>
            Telefono&nbsp; <input ref={telefonoRef} type="text"/>
            <br></br>
            <br></br>
            <button onClick={mandar} >Agregar</button>
        </div>
    )
    
}