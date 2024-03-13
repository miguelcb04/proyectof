

function Bicicleta({ children, bicicleta }) {
    return (
        <div style={{ 'border': '1px solid lightgrey', 'padding': '50px' }}>
            <p><strong>{bicicleta.id}</strong></p>
            <p><strong>{bicicleta.modelo}</strong></p>
            <p>{bicicleta.precio}</p>
            {children}
        </div>
    )
}

export default Bicicleta