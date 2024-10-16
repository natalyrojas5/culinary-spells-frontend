import NextAuth, { NextAuthOptions, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { API } from ".";

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
      session = token.user as any;
      return session;
    },
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
      async authorize(credentials, req) {
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
