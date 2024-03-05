import Form from "@/components/FormBicicletas"
import {prisma} from '@/lib/prisma'
import { editBicicleta} from "@/lib/actions"

export const dynamic = 'force-dynamic'

async function page({searchParams}) {
  const bicicleta = await prisma.bicicleta.findUnique({
    where: {
      id: Number(searchParams.id),
    },
  })

  return (
    <div>
        <h3 className="text-center">Editar bicicleta {searchParams.id}</h3>

        <Form action={editBicicleta} title='Editar bicicleta' bicicleta={bicicleta}  />
    </div>
  )
}


export default page