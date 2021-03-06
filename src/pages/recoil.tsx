import { todoListState } from "@/store/atom";
import type { NextPage } from "next";
import { useRecoilValue, useSetRecoilState } from "recoil";

const Child = () => {
  const count = useRecoilValue(todoListState);
  return <div style={{ backgroundColor: "#ccc", padding: 30 }}>{count}</div>;
};

const Home: NextPage = () => {
  const setCount = useSetRecoilState(todoListState);
  return (
    <div style={{ padding: 30 }}>
      <Child />
      <button onClick={() => setCount((value) => value + 1)}>+1</button>
    </div>
  );
};

export default Home;
