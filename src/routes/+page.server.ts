import type { Actions } from './$types';
import { fail } from '@sveltejs/kit';
import { graphql } from '$houdini';

export const actions = {
	add: async (event) => {
		const session = await event.locals.getSession();
		const data = await event.request.formData();
		const body = data.get('body')?.toString();

		if (!body) {
			return fail(403, { body: '*' });
		}

		const addNewMessage = graphql`
			mutation AddNewMessage($username: String!, $avatar: URL, $body: String!) {
				messageCreate(input: { username: $username, avatar: $avatar, body: $body }) {
					message {
						id
					}
				}
			}
		`;
		return await addNewMessage.mutate(
			{ username: session?.user?.username ?? '', avatar: session?.user?.image, body },
			{ event }
		);
	}
} satisfies Actions;
