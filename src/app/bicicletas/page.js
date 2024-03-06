import Link from 'next/link'
import { auth } from "@/auth"
import Bicicleta from '@/components/Bicicletas'
import { getBicicletas } from '@/lib/actions'

export const dynamic = 'force-dynamic'

export default async function Home() {
    const bicicletas = await getBicicletas()
    const session = await auth()

    // console.log("Bicicletas:", bicicletas); // Registrar las bicicletas en la consola
    // console.log("Sesión:", session); // Registrar la sesión en la consola
    
    return (
        <div>
            {session?.user?.role === 'USER' && (
                <div>
                    {bicicletas.map((bicicleta) => (
                        <Bicicleta key={bicicleta.id} bicicleta={bicicleta} >
                        </Bicicleta>
                    ))}
                </div>
            )}

            {/* Muestra los enlaces solo si el usuario es un administrador */}
            {session?.user?.role === 'ADMIN' && (
                <div>
                    <Link className='enlace' href="/bicicletas/new"> Nueva bicicleta </Link>
                    {bicicletas.map((bicicleta) => (
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
                    ))}
                </div>
            )}
        </div>
    )
}
