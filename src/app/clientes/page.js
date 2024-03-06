import Link from 'next/link'
import { auth } from "@/auth"
import Cliente from '@/components/Cliente'
import { getClientes} from '@/lib/actions'

export const dynamic = 'force-dynamic'

export default async function Home() {
    const clientes = await getClientes()
    const session = await auth()

    // console.log("Bicicletas:", bicicletas); // Registrar las bicicletas en la consola
    // console.log("Sesión:", session); // Registrar la sesión en la consola
    
    return (
        <div>
            {session?.user?.role === 'USER' && (
                <div>
                    {clientes.map((cliente) => (
                        <Cliente key={cliente.id} cliente={cliente} >
                        </Cliente>
                    ))}
                </div>
            )}

            {/* Muestra los enlaces solo si el usuario es un administrador */}
            {session?.user?.role === 'ADMIN' && (
                <div>
                    <Link className='enlace' href="/clientes/new"> Nuevo cliente </Link>
                    {clientes.map((cliente) => (
                        <Cliente key={cliente.id} cliente={cliente} >
                            <Link
                               className='enlace'
                            href={{ pathname: '/clientes/edit', query: { id: cliente.id } }}>
                            Editar cliente
                        </Link>
                                <Link
                                   className='enlace'
                                href={{ pathname: '/clientes/delete', query: { id: cliente.id } }}>
                                Eliminar cliente
                                </Link>
                        </Cliente>
                    ))}
                </div>
            )}
        </div>
    )
}
// export default async function Home() {
//     const clientes = await getClientes()
//     const session = await auth()
//     return (
//         <div>
//         {session?.user?.role === 'USER' && (
//             <div>
//                 {clientes.map((cliente) => (
//                     <Cliente key={cliente.id} cliente={cliente} >
//                     </Cliente>
//                 ))}
//             </div>
//         )}
//             {session?.user?.role === 'ADMIN' && (
//                 <div>
//                 <Link className='enlace' href="/clientes/new"> Nuevo cliente </Link>
//                 clientes.map((cliente) => (
//                     <Cliente key={cliente.id} cliente={cliente} >
//                         <Link
//                             className='enlace'
//                             href={{ pathname: '/clientes/edit', query: { id: cliente.id } }}>
//                             Editar cliente
//                         </Link>
//                         <Link
//                             className='enlace'
//                             href={{ pathname: '/clientes/delete', query: { id: cliente.id } }}>
//                             Eliminar cliente
//                         </Link>
//                     </Cliente>
//                 ))
//                 </div>
//             )
//         }
        
//     )
// }
