# Grafbase ⨯ SvelteKit X Houdini

> [!WARNING] 
> Grafbase has ceased support for SSE, which is causing the demo to malfunction

![Chatbase App](https://grafbase.com/images/guides/how-to-build-a-real-time-chat-app-with-nextjs-graphql-and-server-sent-events/cover.png)

## Build with

- Grafbase
- SvelteKit
- Houdini
- Auth.js
- GraphQL Live Queries (Server-Sent Events)
- Tailwind CSS

## Getting Started

1. Run `npx degit grafbase/grafbase/examples/sveltekit-houdini grafbase-with-houdini` to clone this example
2. Change directory into the new folder `cd grafbase-with-houdini`
3. Run `cp .env.example .env`
4. Open `.env` in your code editor, and provide your Grafbase API endpoint and API key
5. Run `npm install`, or `yarn install` to install dependencies
6. Run `npm run dev`, or `yarn dev` and visit [`http://localhost:5173`](http://localhost:5173)

## Deploy

1. Fork and Push this repo to GitHub
2. [Create an account](https://grafbase.com) with Grafbase
3. Create new project with Grafbase and connect your forked repo
4. Add environment variable `AUTH_SECRET` during project creation
5. Create a [GitHub OAuth App](https://github.com/settings/developers) with your app details for production purposes. Make sure to set `Authorization callback URL` to `[YOUR_DESIRED_VERCEL_DOMAIN]/auth/callback/github`
6. Deploy to Vercel and add `.env` values (`PUBLIC_GRAFBASE_API_URL`\*, `AUTH_SECRET`, `GITHUB_CLIENT_ID`, `GITHUB_CLIENT_SECRET`)

\* `PUBLIC_GRAFBASE_URL` is your production API endpoint. You can find this from the **Connect** modal in your [project dashboard](https://grafbase.com/dashboard).

## Learn More About Grafbase

To learn more about Grafbase, take a look at the following resources:

- [Grafbase](https://grafbase.com/) - learn about Grafbase features and API.

To learn more about SvelteKit, take a look at the following resources:

- [SvelteKit Documentation](https://kit.svelte.dev/docs/introduction) - learn about SvelteKit features and API.

- [Houdini Documentation](https://houdinigraphql.com/intro) - learn about Houdini features and API.
