import { useRef } from "react";

export const ChangeRouteForm = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (inputRef.current) {
      const { pathname, search } = window.location;
      const hash = inputRef.current.value;

      window.location.assign(`${pathname}${search}#${hash}`)

      inputRef.current.value = "";
    }
  };

  return (
    <div>
      <input ref={inputRef} />
      <hr />
      <button onClick={handleClick}>Go!</button>
    </div>
  )
}
