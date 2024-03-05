import Link from 'next/link'
import Bicicleta from '@/components/Bicicletas'
import { getBicicletas } from '@/lib/actions'

export const dynamic = 'force-dynamic'

export default async function Home() {
    const bicicletas = await getBicicletas()

    return (
        <div>
            <Link className='enlace' href="/bicicletas/new"> Nueva bicicleta </Link>
            {
                bicicletas.map((bicicleta) => (
                    <Bicicleta key={bicicleta.id} bicicleta={bicicleta} >
                        <Link
                            className='enlace'
                            href={{ pathname: '/bicicletas/edit', query: { id: bicicleta.id } }}>
                            Editar bicicleta
                        </Link>
                        <Link
                            className='enlace'
                            href={{ pathname: '/bicicletas/delete', query: { id: bicicleta.id } }}>
                            Eliminar bicicleta
                        </Link>
                    </Bicicleta>
                ))
            }
        </div>
    )
}
