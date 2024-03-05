'use server'
import bcrypt from 'bcryptjs'
import {prisma}  from '@/lib/prisma'
import { signIn, signOut } from '@/auth';
import { getUserByEmail } from '@/lib/data';
import { redirect } from 'next/navigation';


// REGISTER
export async function register(formData) {
    const name = formData.get('name')
    const email = formData.get('email')
    const password = formData.get('password')

    // Comprobamos si el usuario ya está registrado
    const user = await getUserByEmail(email);

    if (user) {
        return { error: 'El email ya está registrado' }
    }

    // Encriptamos password 
    const hashedPassword = await bcrypt.hash(password, 10)

    // Guardamos credenciales en base datos
    await prisma.user.create({
        data: {
            name,
            email,
            password: hashedPassword
        }
    })

    return { success: "Registro correcto" }
}



// LOGIN credentials
export async function login(formData) {
    const email = formData.get('email')
    const password = formData.get('password')

    // Comprobamos si el usuario está registrado
    const user = await getUserByEmail(email);

    if (!user) {
        return { error: 'Usuario no registrado.' }
    }

    // Comparamos password 
    const matchPassword = await bcrypt.compare(password, user.password)

    if (user && matchPassword) {  // && user.emailVerified
        await signIn('credentials',
            {
                email, password,
                redirectTo: globalThis.callbackUrl
                // redirectTo: user.role == 'ADMIN' ? '/admin' : '/dashboard'
            })
        return { success: "Inicio de sesión correcto" }
    } else {
        return { error: 'Credenciales incorrectas.' }
    }

}

// LOGIN google
export async function loginGoogle() {
    try {
        await signIn('google', { redirectTo: globalThis.callbackUrl })
    } catch (error) {
        console.log(error);
        throw error
    }
}

// LOGIN github
//globalThis.callbackUrl
export async function loginGithub() {
    try {
        await signIn('github', { redirectTo: globalThis.callbackUrl })
    } catch (error) {
        console.log(error);
        throw error
    }
}


export async function loginSpotify() {
    try {
        await signIn('spotify', { redirectTo: globalThis.callbackUrl })
    } catch (error) {
        console.log(error);
        throw error
    }
}

export async function loginGitLab() {
    try {
        await signIn('gitlab', { redirectTo: globalThis.callbackUrl })
    } catch (error) {
        console.log(error);
        throw error
    }
}


// LOGOUT
export async function logout() {
    try {
        await signOut({ redirectTo: '/' })
    } catch (error) {
        throw error
    }
}









export async function getClientes() {
    try {
      const clientes = await prisma.cliente.findMany()
      return clientes;
    } catch (error) {
      // console.log(error);  
      return null;
    }
  }
  
  export async function newCliente(formData) {
    try {
      const nombre = formData.get('nombre')
      const direccion = formData.get('direccion')
  
      const cliente = await prisma.cliente.create({
        data: { nombre, direccion  },
      })
  
      console.log(cliente);
      revalidatePath('/clientes')
    } catch (error) {
      console.log(error);
    }
    redirect('/clientes');
  }
  
  
  export async function editCliente(formData) {
    const id = Number( formData.get('id') )
    const nombre = formData.get('nombre')
    const direccion = formData.get('direccion')
  
    try {
      const cliente = await prisma.cliente.update({
        where: { id },
        data: {  nombre, direccion },
      })
      console.log(cliente);
      revalidatePath('/clientes')
    } catch (error) {
      console.log(error);
    }
    redirect('/clientes');
  }
  
  export async function deleteCliente(formData) {
    try {
      const id = Number(formData.get('id'))
    
      const cliente = await prisma.cliente.delete({
        where: {
          id: id,
        },
      })
      console.log(cliente);
      revalidatePath('/clientes')
    } catch (error) {
      console.log(error);
    }
  
    redirect('/clientes');
  }
  
  
  
  
  
  export async function getBicicletas() {
    try {
      const bicicletas = await prisma.bicicleta.findMany()
      return bicicletas;
    } catch (error) {
      console.log(error);  
      return null;
    }
  }
  
  export async function newBicicleta(formData) {
    try {
      const modelo = formData.get('modelo')
      const precio = Number(formData.get('precio'))
  
      console.log(precio);
      const bicicleta = await prisma.bicicleta.create({
        data: { modelo, precio  },
      })
  
      console.log(bicicleta);
      revalidatePath('/bicicletas')
    } catch (error) {
      console.log(error);
    }
    redirect('/bicicletas');
  }

  
  export async function editBicicleta(formData) {
    const id = Number( formData.get('id') )
    const modelo = formData.get('modelo')
    const precio = Number(formData.get('precio'))
  
    try {
      const bicicleta = await prisma.bicicleta.update({
        where: { id },
        data: {  modelo, precio },
      })
      console.log(bicicleta);
      revalidatePath('/bicicletas')
    } catch (error) {
      console.log(error);
    }
    redirect('/bicicletas');
  }
  
  export async function deleteBicicleta(formData) {
    try {
      const id = Number(formData.get('id'))
  
      const bicicleta = await prisma.bicicleta.delete({
        where: {
          id: id,
        },
      })
      console.log(bicicleta);
      revalidatePath('/bicicletas')
    } catch (error) {
      console.log(error);
    }
  
    redirect('/bicicletas');
  }