import Link from "next/link";

export default async function Home() {
  return (
<main className="flex justify-center items-center h-screen bg-cover bg-black overflow-y-hidden" style={{backgroundImage: `url(/logo.jpg)` }}>
    <div className="text-center bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4">Bike Tech</h1>
        <ul className="space-y-4">
            {/* <li>
                <div className="bg-blue-100 p-4 rounded-lg">
                    <Link href="/admin" className="text-blue-500 hover:underline">Panel de admin</Link>
                </div>
            </li>
            <li>
                <div className="bg-blue-100 p-4 rounded-lg">
                    <Link href="/dashboard" className="text-blue-500 hover:underline">Dashboard del usuario</Link>
                </div>
            </li> */}
            <li>
                <div className="bg-blue-100 p-4 rounded-lg">
                    <Link href="/about" className="text-blue-500 hover:underline">Descripción</Link>
                </div>
            </li>
            <hr className="my-4 border-t-2 border-gray-200" />
            <li>
                <div className="bg-blue-100 p-4 rounded-lg">
                    <Link href="/bicicletas" className="text-blue-500 hover:underline">Listado de bicicletas</Link>
                </div>
            </li>
            {/* <li>
                <div className="bg-blue-100 p-4 rounded-lg">
                    <Link href="/bicicletas/new" className="text-blue-500 hover:underline">Nuevo bicicletas</Link>
                </div>
            </li>
            <li>
                <div className="bg-blue-100 p-4 rounded-lg">
                    <Link href="/bicicletas/edit" className="text-blue-500 hover:underline">Editar bicicletas</Link>
                </div>
            </li>
            <li>
                <div className="bg-blue-100 p-4 rounded-lg">
                    <Link href="/bicicletas/delete" className="text-blue-500 hover:underline">Eliminar bicicletas</Link>
                </div>
            </li> */}
            <hr className="my-4 border-t-2 border-gray-200" />
            <li>
                <div className="bg-blue-100 p-4 rounded-lg">
                    <Link href="/clientes" className="text-blue-500 hover:underline">Listado de clientes</Link>
                </div>
            </li>
            {/* <li>
                <div className="bg-blue-100 p-4 rounded-lg">
                    <Link href="/clientes/new" className="text-blue-500 hover:underline">Nuevo clientes</Link>
                </div>
            </li>
            <li>
                <div className="bg-blue-100 p-4 rounded-lg">
                    <Link href="/clientes/edit" className="text-blue-500 hover:underline">Editar clientes</Link>
                </div>
            </li>
            <li>
                <div className="bg-blue-100 p-4 rounded-lg">
                    <Link href="/clientes/delete" className="text-blue-500 hover:underline">Eliminar clientes</Link>
                </div>
            </li> */}
        </ul>
    </div>
</main>

)
}
