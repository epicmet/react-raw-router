import { FC, useEffect, useState } from "react";
import { Redirect } from "../RouterContext";

export const DeletedPage: FC = () => {
  const [count, setCount] = useState(5);

  useEffect(() => {
    setInterval(() => {
      setCount(prev => --prev);
    }, 1000);
  }, []);

  return (
    <>
      <div>This page is Deleted, Redirecting in {count} seconds</div>
      {
        count <= 0 && <Redirect to="/"/>
      }
    </>
  );
};
