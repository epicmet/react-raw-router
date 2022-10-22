import { createContext, FC, useCallback, useContext, useEffect, useState } from "react";
import { removeHash } from "./utils";

interface IRouterContext {
  route: string;
}

const RouterContext = createContext<IRouterContext>({
  route: removeHash(window.location.hash)
});

export interface RouterProps {
  router?: React.ReactNode;
  children?: React.ReactNode;
}

export const RouterProvider: FC<RouterProps> = ({ children, router }) => {
  const [route, setRoute] = useState<Location["hash"]>(removeHash(window.location.hash));

  const navigated = useCallback((event: HashChangeEvent) => {
    const newURL = new URL(event.newURL);

    setRoute(removeHash(newURL.hash));
  } , []);

  useEffect(() => {
    window.addEventListener("hashchange", navigated);

    return () => {
      window.removeEventListener("hashchange", navigated)
    };
  }, []);

  return ( 
    <RouterContext.Provider value={{ route }}>{children || router}</RouterContext.Provider>
  );
};

// TODO:
// Link and Redirect componenet

export const useRouter = () => {
  return useContext(RouterContext);
};
