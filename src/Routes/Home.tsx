import { FC } from "react";
import { Link } from "../RouterContext";
import styles from "./Home.module.css";

export const Home: FC = () => {
  return (
    <>
      <div>This is home page</div>
      <hr />
      <div>Go to:</div>
      <div className={styles.buttons}>
        <Link to="foo"><button>Foo</button></Link>
        <Link to="bar"><button>Bar</button></Link>
        <Link to="deleted"><button>Deleted page</button></Link>
      </div>
    </>
  );
};
