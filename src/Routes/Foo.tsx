import { FC } from "react";
import { Link } from "../RouterContext";

export const Foo: FC = () => {
  return (
    <>
      <div>This is foo page</div>
      <hr />
      <Link to="/"><button>Back to home</button></Link>
    </>
  );
};
