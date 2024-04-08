import Form from "@/components/FormClientes"
import {prisma} from '@/lib/prisma'
import { deleteCliente } from "@/lib/actions"

export const dynamic = 'force-dynamic'

async function page({ searchParams }) {
  const cliente = await prisma.cliente.findUnique({
    where: {
      id: Number(searchParams.id),
    },
  })

  return (
    <div>
      <h3 className="text-center">Eliminar cliente {searchParams.id}</h3>
      <Form action={deleteCliente} title='Eliminar cliente' cliente={cliente} disabled={true} />
    </div>
  )
}

export default page