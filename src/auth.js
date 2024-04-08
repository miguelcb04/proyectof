import NextAuth from "next-auth"
// import { PrismaAdapter } from "@auth/prisma-adapter";
import { getUserById } from "@/lib/data"
import authConfig from "@/auth.config"


export const options = {
    // session: { strategy: 'jwt' },
    // adapter: PrismaAdapter(prisma),
    // pages: {
    //     signIn: '/auth/login',
    //     signOut: '/auth/logout',
    //     error: '/auth/error'
    // },
    // events: {
    //     async linkAccount({ user }){
    //         await prisma.user.update({
    //             where: {id: user.id},
    //             data: { emailVerified: new Date()}
    //         })
    //     }
    // },
    callbacks: {
        async session({ session, token }) {
            // console.log(session, user);
            session.user.role = token?.role
            return session
        },
        async jwt({ token }) {
            if (!token.sub) return token;

            const user = await getUserById(token.sub)
            if (!user) return token;

            token.role = user?.role
            return token
        }
    },
}



export const {
    handlers: { GET, POST },
    auth,
    signIn,
    signOut
} = NextAuth({ ...options, ...authConfig })
