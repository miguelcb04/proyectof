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









export async function getArticulos() {
    try {
      const articulos = await prisma.articulo.findMany()
      return articulos;
    } catch (error) {
      // console.log(error);  
      return null;
    }
  }
  
  export async function newArticulo(formData) {
    try {
      const nombre = formData.get('nombre')
      const direccion = formData.get('direccion')
  
      const articulo = await prisma.articulo.create({
        data: { nombre, direccion  },
      })
  
      console.log(articulo);
      revalidatePath('/articulos')
    } catch (error) {
      console.log(error);
    }
    redirect('/articulos');
  }
  
  
  export async function editArticulo(formData) {
    const id = Number( formData.get('id') )
    const nombre = formData.get('nombre')
    const direccion = formData.get('direccion')
  
    try {
      const articulo = await prisma.articulo.update({
        where: { id },
        data: {  nombre, direccion },
      })
      console.log(articulo);
      revalidatePath('/articulos')
    } catch (error) {
      console.log(error);
    }
    redirect('/articulos');
  }
  
  export async function deleteArticulo(formData) {
    try {
      const id = Number(formData.get('id'))
    
      const articulo = await prisma.articulo.delete({
        where: {
          id: id,
        },
      })
      console.log(articulo);
      revalidatePath('/articulos')
    } catch (error) {
      console.log(error);
    }
  
    redirect('/articulos');
  }