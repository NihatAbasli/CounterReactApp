import { useState } from "react";

export const Count = () => {
  const [value, setValue] = useState({});

  const displayObject = () => {
    const newObj = {
      name: "Nihat Abasli",
    };

    setValue(newObj);
  };

  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Object</h1>
      <div>{value.name}</div>
      <div>{value.age}</div>
      <button onClick={displayObject}>Change</button>
      <hr />
      <hr />

      <div>
        <button
          disabled={!count}
          onClick={() => setCount((prev) => (prev > 0 ? prev - 1 : 0))}
        >
          Azalt
        </button>
        <span>{count}</span>
        <button onClick={() => setCount((prev) => prev + 1)}>Artir</button>
      </div>
      <hr />
      <hr />
    </div>
  );
};
