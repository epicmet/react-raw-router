import { createContext, FC, MouseEventHandler, useCallback, useContext, useEffect, useState } from "react";
import { navigateTo, removeHash } from "./utils";

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

export interface ILink {
  to: string;
  children?: React.ReactNode;
}

export const Link: FC<ILink> = ({ children, to }) => {
  const handleClick: MouseEventHandler = (event) => {
    event.preventDefault();

    navigateTo(to);
  };

  return (
    <a onClick={handleClick}>{ children }</a>
  )
};

export interface IRedirect {
  to: string;
}

export const Redirect: FC<IRedirect> = ({ to }) => {
  useEffect(() => {
    navigateTo(to);
  }, []);

  return <></>;
};


export const useRouter = () => {
  return useContext(RouterContext);
};
