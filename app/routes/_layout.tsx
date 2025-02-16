import { createFileRoute, Outlet } from "@tanstack/react-router";

const LayoutComponent = () => {
  return (
    <div className="p-2">
      <div>I'm a layout</div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export const Route = createFileRoute("/_layout")({
  component: LayoutComponent,
});
