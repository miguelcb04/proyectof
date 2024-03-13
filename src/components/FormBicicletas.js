import Button from '@/components/Button'
 
function FormBicicleta({ action, title, bicicleta, disabled=false }) {

    return (
<div className="flex justify-center items-center">
  <div className="max-h-full bg-white rounded-lg shadow-md w-full sm:w-2/3">
    <form action={action} className="text-center mt-4 p-4 sm:p-6">
      <input type='hidden' name='id' value={bicicleta?.id} />
      <fieldset disabled={disabled} className="mb-4">
        <label htmlFor='modelo' className="block mb-2">Modelo</label>
        <input type='text' id='modelo' name='modelo'
          placeholder='Modelo'
          defaultValue={bicicleta?.modelo} autoFocus required
          className="w-full border rounded-lg px-3 py-2 mb-2"/>
        <label htmlFor='precio' className="block mb-2">Precio</label>
        <input type='number' id='precio' name='precio'
          placeholder='Precio'
          defaultValue={bicicleta?.precio} required
          className="w-full border rounded-lg px-3 py-2 mb-2"/>
        <label htmlFor='clienteId' className="block mb-2">Cliente ID</label>
        <input type='number' id='clienteId' name='clienteId'
          placeholder='Cliente ID'
          defaultValue={bicicleta?.clienteId} 
          className="w-full border rounded-lg px-3 py-2 mb-2"/>
      </fieldset>
      <Button title={title} />
    </form>
  </div>
</div>




    )
}

export default FormBicicleta