import Link from 'next/link'
import { auth } from "@/auth"
import Articulo from '@/components/Articulos'
import { getArticulos } from '@/lib/actions'
export const dynamic = 'force-dynamic'

export default async function Home() {
    const articulos = await getArticulos()
    const session = await auth()

  return (
<main className="flex justify-center items-center h-screen bg-cover bg-white overflow-y-hidden" >
    <div className="text-center bg-gray-400 p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4">Listado</h1>
        {articulos.map((articulo) => (
                        <Articulo key={articulo.id} articulo={articulo} >
                        </Articulo>
                    ))}
        <div>
        <Link className='enlace' href="/clientes/new"> Nuevo cliente </Link>
        <Link className='enlace'
            href={{ pathname: '/clientes/edit', query: { id: cliente.id } }}>
                Editar cliente
        </Link>
        <Link className='enlace'
            href={{ pathname: '/clientes/delete', query: { id: cliente.id } }}>
                Eliminar cliente
                                </Link>
        </div>
    </div>
    
</main>

)
}
