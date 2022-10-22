import { FC } from "react";
import { Link } from "../RouterContext";

export const Bar: FC = () => {
  return (
    <>
      <div>This is bar page</div>
      <hr />
      <Link to="/"><button>Back to home</button></Link>
    </>
  );
};
