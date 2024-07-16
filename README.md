This guide shows how to integrate authentication powered by Ory into a Nextjs 14 application.

## Getting Started

First, create a `.env.local` file using the `.env.local.template` file as a template.

Install packages by running the following command:

```bash
npm install
```

Start Ory tunnel using Docker (you will be asked to login with your Ory account):

```bash
docker run -it -p 4000:4000 -e ORY_PROJECT_SLUG={project-slug} oryd/ory tunnel --dev http://localhost:3000
```

Then, run the development server:

```bash
npm run dev
```
