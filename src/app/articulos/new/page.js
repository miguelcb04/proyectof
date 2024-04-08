import Form from "@/components/FormClientes"
import { newCliente } from "@/lib/actions"

function page() {
  return (
    <div>
        <h3>Nuevo cliente</h3>
        <Form action={newCliente} title='Crear cliente' cliente={null}  />
    </div>
  )
}

export default page