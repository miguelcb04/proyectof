import Link from 'next/link'
import Cliente from '@/components/Cliente'
import { getClientes} from '@/lib/actions'

export const dynamic = 'force-dynamic'

export default async function Home() {
    const clientes = await getClientes()

    return (
        <div>
            <Link className='enlace' href="/clientes/new"> Nuevo cliente </Link>
            {
                clientes.map((cliente) => (
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
                ))
            }
        </div>
    )
}
