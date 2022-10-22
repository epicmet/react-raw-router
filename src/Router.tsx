import { useRouter } from "./RouterContext";
import { Bar } from "./Routes/Bar";
import { DeletedPage } from "./Routes/DeletedPage";
import { Foo } from "./Routes/Foo";
import { Home } from "./Routes/Home";
import { NotFound } from "./Routes/NotFound";

export const Router = () => {
  const { route } = useRouter();

  switch (route) {
    case "":
      return <Home /> 
    case "foo":
      return <Foo />
    case "bar":
      return <Bar />
    case "deleted":
      return <DeletedPage />
    default:
      return <NotFound />
  };
};
