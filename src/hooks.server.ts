import { AUTH_SECRET, GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET } from '$env/static/private';
import { setSession } from '$houdini';
import type { JWT } from '@auth/core/jwt';
import GitHubProvider from '@auth/core/providers/github';
import type { Session } from '@auth/core/types';
import { SvelteKitAuth } from '@auth/sveltekit';
import type { Handle } from '@sveltejs/kit';
import jsonwebtoken from 'jsonwebtoken';

export const handle = (async ({ event, resolve }) => {
	return SvelteKitAuth({
		secret: AUTH_SECRET,
		providers: [
			// @ts-ignore
			GitHubProvider({
				clientId: GITHUB_CLIENT_ID,
				clientSecret: GITHUB_CLIENT_SECRET
			})
		],
		jwt: {
			encode: ({ secret, token }) => {
				const encodedToken = jsonwebtoken.sign(
					{
						...token,
						iss: 'auth',
						exp: Math.floor(Date.now() / 1000) + 60 * 60 * 60 // 1 hour
					},
					secret
				);
				return encodedToken;
			},
			decode: async ({ secret, token }) => {
				if (!token) return null;
				const decodedToken = jsonwebtoken.verify(token, secret);
				// Provide the token to Houdini
				setSession(event, { token });
				return decodedToken as JWT;
			}
		},
		callbacks: {
			async jwt({ token, profile }) {
				if (profile) {
					token.username = profile.login;
				}
				return token;
			},
			session({ session, token }) {
				if (typeof token?.username === 'string') {
					session.user = { ...session.user, username: token.username } as Session['user'];
				}
				return session;
			}
		}
	})({ event, resolve });
}) satisfies Handle;
