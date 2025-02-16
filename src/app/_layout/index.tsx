import { createFileRoute } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/start";

import { env as clientEnv } from "~/env/client";
import { env as serverEnv } from "~/env/server";

const $serverFn = createServerFn({
  method: "GET",
  type: "static",
}).handler(() => {
  return serverEnv.TEST;
});

const Home = () => {
  const data = Route.useLoaderData();

  return (
    <>
      <h3>Welcome Home!!!</h3>
      <p>Server: {data.test}</p>
      <p>Client: {clientEnv.VITE_PUBLIC_TEST}</p>
    </>
  );
};

export const Route = createFileRoute("/_layout/")({
  component: Home,
  loader: async () => {
    return {
      test: await $serverFn(),
    };
  },
});
