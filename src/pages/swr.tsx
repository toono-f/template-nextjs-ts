import axios from "axios";
import type { NextPage } from "next";
import useSWR from "swr";

type Post = {
  id: number;
  title: string;
  body: string;
};

const fetcher = (url: string) => axios.get(url).then((res): Post => res.data);

const Home: NextPage = () => {
  const { data, error } = useSWR("http://localhost:4000/posts/1", fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <div style={{ padding: "1rem" }}>
      <p>{data?.id}</p>
      <p>{data?.title}</p>
      <p>{data?.body}</p>
    </div>
  );
};

export default Home;
