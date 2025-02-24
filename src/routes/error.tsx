import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/error")({
  component: ExampleComponent,
  errorComponent: ErrorComponent,
});

function ErrorComponent({ error }: { error: Error }) {
  const navigate = useNavigate();

  return (
    <>
      <div>This is errorComponent: {error.message}</div>
      <button onClick={() => navigate({ to: "/error", replace: true })}>
        Go back
      </button>
    </>
  );
}

function ExampleComponent() {
  const [{ error }, setError] = useState<{ error: Error | null }>({
    error: null,
  });
  if (error) {
    throw error;
  }

  return (
    <>
      <div>This is exampleComponent</div>
      <button
        onClick={() => {
          setError({ error: new Error("An error occurred") });
        }}
      >
        Throw Error
      </button>
    </>
  );
}
