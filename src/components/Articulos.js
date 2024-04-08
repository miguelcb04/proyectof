

function Bicicleta({ children, bicicleta }) {
    return (
        <div style={{ 'border': '1px solid lightgrey', 'padding': '50px' }}>
            <p><strong>{bicicleta.id}</strong></p>
            <p><strong>{bicicleta.author}</strong></p>
            <p><strong>{bicicleta.title}</strong></p>
            <p><strong>{bicicleta.image}</strong></p>
            <p><strong>{bicicleta.post}</strong></p>
            {children}
        </div>
    )
}

export default Bicicleta