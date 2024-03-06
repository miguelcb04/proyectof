import { auth } from "@/auth"

async function page() {
    const sesion = await auth()

    return (
        <>
<div className="flex justify-center items-center h-screen" style={{backgroundImage: `url(/dasboard.jpg)`, backgroundSize: "cover", backgroundPosition: "center top -400px"}}>
  <div className="bg-white p-8 rounded-lg shadow-md text-center">
    <h1 className="text-3xl font-bold mb-4">🔑 Dashboard</h1>
    <p className="text-lg mb-2">{sesion?.user.name}</p>
    <p className="text-lg mb-2">{sesion?.user.email}</p>
    <p className="text-lg mb-2">{sesion?.user.role}</p>
    <img src={sesion?.user.image} alt="User Image" className="w-32 h-32 mx-auto rounded-full" />
  </div>
</div>


        </>)
}

export default page