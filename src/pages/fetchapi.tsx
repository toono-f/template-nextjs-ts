import type { NextPage } from "next";
import { useEffect, useState } from "react";

type Post = {
  id: number;
  title: string;
  body: string;
};

const Home: NextPage = () => {
  const [data, setData] = useState<Post>();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1", { method: "GET" })
      .then((res) => res.json())
      .then((resData) => setData(resData))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div style={{ padding: "1rem" }}>
      <p>{data?.id}</p>
      <p>{data?.title}</p>
      <p>{data?.body}</p>
    </div>
  );
};

export default Home;
