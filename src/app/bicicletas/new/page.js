import Form from "@/components/FormBicicletas"
import { newBicicleta } from "@/lib/actions"

function page() {
  return (
    <div>
        <h3>Nueva bicicleta</h3>
        <Form action={newBicicleta} title='Crear bicicleta' bicicleta={null}  />
    </div>
  )
}

export default page