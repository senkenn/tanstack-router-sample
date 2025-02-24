import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="p-2 flex gap-2">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>{" "}
        <Link to="/about" className="[&.active]:font-bold">
          About
        </Link>{" "}
        <Link
          to="/posts/$postId"
          params={{ postId: "1" }}
          className="[&.active]:font-bold"
        >
          Posts
        </Link>{" "}
        <Link to="/form" className="[&.active]:font-bold">
          Form Sample
        </Link>{" "}
        <Link to="/error" className="[&.active]:font-bold">
          Error Sample
        </Link>
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});
