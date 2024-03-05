
function layoutArticulos({ children }) {
    return (
<section class="flex flex-col items-center justify-center" >
    <h1 class="text-2xl font-bold mb-4 ">Bicicletas</h1>
    <div class="bg-white p-6 rounded-lg shadow-md">
        {children}
    </div>
</section>

    )
}

export default layoutArticulos