import { createFileRoute } from "@tanstack/react-router";

const Home = () => {
  return (
    <>
      <h3>Welcome Home!!!</h3>
    </>
  );
};

export const Route = createFileRoute("/")({
  component: Home,
});
