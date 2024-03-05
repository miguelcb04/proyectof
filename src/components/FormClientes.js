import Button from '@/components/Button'
 
function FormClientes({ action, title, cliente , disabled=false }) {

    return (
<div className="h-screen flex justify-center items-center" style={{ marginTop: '-200px' }}>
  <div className="bg-white p-8 rounded-lg shadow-md">
    <form action={action} className="text-center">
      <input type='hidden' name='id' value={cliente?.id} />
      <fieldset disabled={disabled} className="mb-4">
        <label htmlFor='nombre' className="block mb-2">Nombre</label>
        <input type='text' id='nombre' name='nombre'
          placeholder='Nombre'
          defaultValue={cliente?.nombre} autoFocus required
          className="w-full border rounded-lg px-3 py-2 mb-2"/>
        <label htmlFor='direccion' className="block mb-2">Dirección</label>
        <input type='text' id='direccion' name='direccion'
          placeholder='Dirección'
          defaultValue={cliente?.direccion} required
          className="w-full border rounded-lg px-3 py-2"/>
      </fieldset>
      <Button title={title} />
    </form>
  </div>
</div>





    )
}

export default FormClientes