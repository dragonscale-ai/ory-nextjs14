This guide shows how to integrate authentication powered by Ory into a Nextjs 14 application.

## Getting Started

First, create a `.env.local` file using the `.env.local.template` file as a template.

Install packages by running the following command:

```bash
npm install
```

Export environment variables:

```bash
export ORY_SDK_URL=https://{project-slug}.projects.oryapis.com
```

Start ory tunnel:

```bash
npx @ory/cli tunnel --dev http://localhost:3000
```

Then, run the development server:

```bash
npm run dev
```
