import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { API } from ".";
interface UserToken {
  user: {
    email: string;
    name: string;
  };
  jwtToken: string;
  expires: string;
}

export const authConfig: NextAuthOptions = {
  pages: {
    signIn: "/iniciar-sesion",
  },
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token.user = user;
      }
      return token;
    },
    session({ session, token }) {
      session = token.user as UserToken;
      return session;
    },
  },
  session: {
    strategy: "jwt",
  },

  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "tuemail@ejemplo.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials) {
          throw new Error("Credenciales no proporcionadas");
        }

        const { email, password } = credentials;
        try {
          const response = await API.post("login", { email, password });

          if (response.data) {
            return response.data;
          }
        } catch (error) {
          console.error("Error en la autenticación:", error);
          return null;
        }

        return null;
      },
    }),
  ],
};

export const handler = NextAuth(authConfig);
