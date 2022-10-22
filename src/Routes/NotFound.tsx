import { FC } from "react";
import { Link } from "../RouterContext";

export const NotFound: FC = () => {
  return (
    <>
      <div>Page Not Found</div>
      <hr />
      <Link to="/"><button>Back to home page</button></Link>
    </>
  );
};
