import NextAuth, { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"


const nextAuthOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'email', type: 'text' },
        password: { label: 'password', type: 'password' }
      },

      async authorize(credentials, req) {
        const api = process.env.BACKEND_URL
        const response = await fetch(`${api}/api/login`, {
          method: 'POST',
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify({
            email: credentials?.email,
            password: credentials?.password
          })
        })

        const user = await response.json()

        if (user && response.ok) {
          return user;
        } else if (response.status === 400 && user?.email) {
          // Menampilkan pesan kesalahan validasi dari respons JSON
          console.log(user.email[0]);
        } else {
          // Menampilkan pesan kesalahan umum
          console.log("Terjadi kesalahan saat login. Silakan coba lagi.");
        }

        return null
      },
    })
  ],
  pages: {
    signIn: '/auth/login'
  },
  callbacks: {
    async jwt({ token, user }) {
      user && (token.user = user)
      return token
    },
    async session({ session, token }) {
      session = token.user as any
      return session
    }
  }
}

const handler = NextAuth(nextAuthOptions)

export { handler as GET, handler as POST, nextAuthOptions }
