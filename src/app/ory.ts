import { Configuration, FrontendApi } from "@ory/client";

// Create a new Ory API client
// This will default to the Ory playground project if no environment variable is set.
// Set the `NEXT_PUBLIC_ORY_SDK_URL` to your Ory CLI tunnel e.g. http://localhost:4000
// or on production to the custom domain you have added to your Ory project.
const basePath = process.env.NEXT_PUBLIC_ORY_SDK_URL;

const ory = new FrontendApi(
  new Configuration({
    basePath: basePath,
    baseOptions: {
      withCredentials: true,
    },
  })
);

export { ory, basePath };
