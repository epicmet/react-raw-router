import { useRouter } from "./RouterContext";

export const Router = () => {
  const { route } = useRouter();

  switch (route) {
    case "":
      return <div>Home page</div>
    case "foo":
      return <div>This is foo</div>
    default:
      return <div>Not found</div>
  };
};
