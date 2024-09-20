import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth/next";
import connectDB from "@/app/lib/connectDB";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";

export const authOptions = {
    secret: process.env.NEXT_PUBLIC_AUTH_SECRET,
    session: {
        strategy: 'jwt',
        maxAge: 30 * 24 * 60 * 60,   // 366 day er jono cookies thakbe,, seita fixed kora hoi.
    },
    providers: [
        // email password dia signIn korar way
        CredentialsProvider({
            credentials: {
                email: { label: "Email", type: "text", placeholder: "Your Email" },
                password: { label: "Password", type: "password", placeholder: "Your Password" },
            },
            async authorize(credentials) {
                const { email, password } = credentials;

                if (!credentials) {
                    return null;
                }

                if (email) {
                    // const currentUser = users.find((user) => user.email == email)  // aita kortesilam,, nicher users object er moddhe demo kiso user info nia seikhane check kortesilam. But akhon direct db connect kore, sei Db te find korbo login kora user info dia.. jodi match kore  tahole if block er moddhe dhokabo.

                    const db = await connectDB();
                    const currentUser = await db.collection('users').findOne({email});
                    console.log(currentUser)


                    console.log(currentUser)
                    if (currentUser) {
                        if (currentUser.password === password) {
                            return currentUser;
                        }
                    }
                }
                return null;
            },
        }),

        // google dia sign In korar provider
        GoogleProvider({
            clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
            clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET
          }),
        // Facebook dia sign In korar provider
        FacebookProvider({
            clientId: process.env.NEXT_PUBLIC_FACEBOOK_CLIENT_ID,
            clientSecret: process.env.NEXT_PUBLIC_FACEBOOK_CLIENT_SECRET
          })
    ],

    callbacks: {
        async jwt({ token, account, user }) {
            // Persist the OAuth access_token and or the user id to the token right after signin
            if (account) {
                token.type = user.type
            }
            return token
        },
        async session({ session, token }) {
            session.user.type = token.type
            return session
        },
    }
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

// const users = [
//     {
//         id: 1,
//         name: 'Mehedi',
//         email: "developerimran1122@gmail.com",
//         type: 'admin',
//         password: 'imran',
//         image: 'https://meetplanr.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2F3rrJCVp%2Fcard3.jpg&w=1080&q=75'
//     },
//     {
//         id: 2,
//         name: 'Imran',
//         email: "developerimran112233@gmail.com",
//         type: 'user',
//         password: 'imran',
//         image: 'https://meetplanr.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2F3rrJCVp%2Fcard3.jpg&w=1080&q=75'
//     },
// ]