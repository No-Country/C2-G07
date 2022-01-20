

const ContactInfo = ( { userInfo , handleContact} ) =>{

    const { usuario_email, redes_sociales, telefono } = userInfo; 
    // TODO poner en el medio de la pantalla con css
    return(
        <div>
            <h4>Contacto</h4>
            <p>Email: {usuario_email}</p>
            <p>Redes Sociales: </p>
            <p>Telefono: +5438889999999 </p>
            <button onClick={handleContact}>Cerrar</button>
        </div>
    )
};

export { ContactInfo };