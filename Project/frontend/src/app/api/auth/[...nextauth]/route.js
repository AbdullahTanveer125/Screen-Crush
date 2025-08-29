import axios from "axios";
import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";


const handler = NextAuth({

	providers: [
		GitHubProvider({
			clientId: process.env.GITHUB_ID,
			clientSecret: process.env.GITHUB_SECRET,
		}),
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
		}),
	],
	secret: process.env.NEXTAUTH_SECRET,

	callbacks: {
		async signIn({ profile }) {

			try {
				console.log("==== in login API ====")
				const response = await axios.post("http://localhost:5000/user/login", {
					email: profile.email,
					username: profile.name.replace(/\s/g, "").toLowerCase(),
					image: profile.picture,
				});


				// const [auth, setAuth] = useAuth();
				console.log("==== After login API ====")

				console.log("KKKKKKKKk====", response)
				// const { token, user } = res.data;

				// Save to context and localStorage
				// setAuth({ token, user });

				if (response.data.success) {
					// Save temporarily in a cookie (optional), or just return true
					return true;
				} else {
					return false;
				}




				// if (response.data.success) {
				// 	// Store in localStorage (will be available on client side)
				// 	if (typeof window !== 'undefined') {
				// 		localStorage.setItem('auth', JSON.stringify({
				// 			token: response.data.token,
				// 			user: response.data.user
				// 		}));
				// 	}

				// }
				// return true;
			} catch (error) {
				console.error("Failed to store user:", error.message);
				return false;
			}
		},

		// attach token to session
		// async jwt({ token, user, account, profile }) {
		// 	// Optional: attach custom data if needed
		// 	return token;
		// },

		// async session({ session, token }) {
		// 	// Optional: attach token to session
		// 	return session;
		// },
	},




});

export { handler as GET, handler as POST };
