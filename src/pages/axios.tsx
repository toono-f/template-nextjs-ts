import axios from "axios";
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
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => setData(res.data))
      .catch((error) => console.error(error));
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
