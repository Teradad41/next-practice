"use clinet";

import { useQueryState } from "nuqs";

export default function Page() {
  const [name, setName] = useQueryState("name");

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">NUQS</h1>
      <input value={name || ""} onChange={(e) => setName(e.target.value)} />
      <button type="button" onClick={() => setName(null)}>clear</button>
      <p>Hello, {name}!</p>
    </div>
  );
}
