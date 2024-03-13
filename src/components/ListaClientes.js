import {getCliente} from '@/lib/actions'

async function ListaClientes({ bicicletaId, disabled }) {
  const zoos = await getCliente()

  let Bicicleta = null;
  let clienteId = null;
  if (bicicletaId) {
      Bicicleta = await getAnimal(animalId)
      clienteId = bicicleta.clienteId;
  }

return(
  <fieldset disabled={disabled}>
        <legend>Clientes</legend>
        {clientes?.map((cliente) => (
            <div key={cliente.id}>
                <p>
                    {clienteId == cliente.id
                        ? <input type='radio' name='zooId' value={zoo.id} defaultChecked />
                        : <input type='radio' name='zooId' value={zoo.id} />
                    }
                    {cliente.nombre}
                </p>
            </div>
        ))}
        </fieldset>
)
}
export default ListaClientes