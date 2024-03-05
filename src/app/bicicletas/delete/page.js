// import Form from "@/components/FormBicicletas"
// import prisma from '@/lib/prisma'
// import { deleteBicicleta } from "@/lib/actions"

// export const dynamic = 'force-dynamic'

// async function page({ searchParams }) {
//   const bicicleta = await prisma.bicicleta.findUnique({
//     where: {
//       id: Number(searchParams.id),
//     },
//   })

//   return (
//     <div>
//       <h3>Eliminar bicicleta {searchParams.id}</h3>
//       <Form action={deleteBicicleta} title='Eliminar bicicleta' bicicleta={bicicleta} disabled={true} />
//     </div>
//   )
// }

// export default page


import Form from "@/components/FormBicicletas"
import {prisma} from '@/lib/prisma'
import { deleteBicicleta } from "@/lib/actions"

export const dynamic = 'force-dynamic'

async function page({ searchParams }) {
  try {
    const bicicleta = await prisma.bicicleta.findUnique({
      where: {
        id: Number(searchParams.id),
      },
    })

    if (!bicicleta) {
      return <div>No se encontró la bicicleta.</div>;
    }

    return (
      <div>
        <h3 className="text-center">Eliminar bicicleta {searchParams.id}</h3>
        <Form action={deleteBicicleta} title='Eliminar bicicleta' bicicleta={bicicleta} disabled={true} />
      </div>
    )
  } catch (error) {
    console.error('Error al buscar la bicicleta:', error);
    return <div>Ocurrió un error al buscar la bicicleta.</div>;
  }
}

export default page
