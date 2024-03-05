// import Form from "@/components/FormClientes"
// import prisma from '@/lib/prisma'
// import { editCliente } from "@/lib/actions"

// export const dynamic = 'force-dynamic'

// async function page({searchParams}) {
//   const cliente = await prisma.cliente.findUnique({
//     where: {
//       id: Number(searchParams.id),
//     },
//   })

//   return (
//     <div>
//         <h3>Editar cliente {searchParams.id}</h3>
//         <Form action={editCliente} title='Editar cliente' cliente={cliente}  />
//     </div>
//   )
// }


// export default page




import Form from "@/components/FormClientes";
import {prisma} from "@/lib/prisma";
import { editCliente } from "@/lib/actions";

export const dynamic = "force-dynamic";

async function page({ searchParams }) {
  let cliente = null;

  try {
    cliente = await prisma.cliente.findUnique({
      where: {
        id: Number(searchParams.id),
      },
    });
  } catch (error) {
    console.error("Error al obtener el cliente:", error);
  }

  // Verificar si cliente es null o undefined antes de usarlo
  if (!cliente) {
    return <div>Cliente no encontrado</div>;
  }

  return (
<div className="flex justify-center items-center ">
  <div className="bg-white p-8 rounded-lg shadow-md text-blue-500 max-w-md w-full">
    <h3 className="text-2xl font-bold mb-4 text-center">Editar cliente {searchParams.id}</h3>
    <Form action={editCliente} title="Editar cliente" cliente={cliente} />
  </div>
</div>

  );
}

export default page;

