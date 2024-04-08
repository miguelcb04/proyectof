
function layoutClientes({ children }) {
    return (
<div className="flex justify-center items-center h-screen mt-16">
  <section className="text-center">
    <h1 className="text-3xl font-bold mb-4">Clientes</h1>
    <div class=" bg-white p-6 rounded-lg shadow-md">
    {children}
    </div>
  </section>
</div>



    )
}

export default layoutClientes