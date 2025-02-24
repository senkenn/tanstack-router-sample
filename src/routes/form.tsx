import { createFileRoute } from "@tanstack/react-router";
import { useActionState } from "react";

export const Route = createFileRoute("/form")({
  component: RouteComponent,
});
async function submitAction(
  state: { currentValue: string; message: string },
  formData: FormData
) {
  const name = formData.get("name") as string;
  return {
    currentValue: name,
    message: `Hello, ${name}, previous name: ${state.currentValue}`,
  };
}

function RouteComponent() {
  const [{ currentValue, message }, action] = useActionState(submitAction, {
    currentValue: "",
    message: "",
  });

  return (
    <form action={action}>
      <input name="name" placeholder="Your name" defaultValue={currentValue} />
      <button type="submit">Submit</button>
      <p>{message}</p>
    </form>
  );
}
