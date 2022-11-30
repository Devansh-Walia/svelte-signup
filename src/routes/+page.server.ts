import { client } from '../lib/gql';
import { gql } from 'graphql-request';
import { redirect } from '@sveltejs/kit';

const signUp = gql`
	mutation UserSignUp($createUserInput: CreateUserInput!) {
		userSignUp(createUserInput: $createUserInput) {
			token
			user {
				id
				name
				bio
				username
				profileImageUrl
				emailVerified
				phoneVerified
				isFollower
				isFollowing
				phone
				email
				createdAt
			}
		}
	}
`;

export const actions: import('./$types').Actions = {
	signUp: async ({ request }) => {
		const formData = await request.formData();
		const email = formData.get('email');
		const password = formData.get('password');

		const vars = {
			createUserInput: {
				email: email,
				password: password
			}
		};
		try {
			await client.request(signUp, vars);
			console.error('success');
		} catch (e) {
			console.error('error', e);
			throw redirect(307, '/');
		}
	},
	print: async ({ request }) => {
		const formData = await request.formData();
		console.log('submit!', formData);
	}
};
