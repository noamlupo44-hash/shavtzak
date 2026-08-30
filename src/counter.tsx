import { useState } from "react";

type CounterProps = {
  title: string;
  amount: number;
  step: number;
};

function Counter({ title, amount, step }: CounterProps) {
  const [count, setCount] = useState(amount);

  return (
    <div>
      <h2>{title}</h2>
      <h1>{count}</h1>

      <button onClick={() => setCount(count - step)}>Decrease</button>

      <button onClick={() => setCount(0)}>Reset</button>

      <button onClick={() => setCount(count + step)}>Increase</button>
    </div>
  );
}

export default Counter;
