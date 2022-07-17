import { useGetUserPostQuery } from "@/rtk/service";
import styles from "@/styles/Home.module.css";
import type { NextPage } from "next";

const Home: NextPage = () => {
  const { data, isLoading } = useGetUserPostQuery(1);

  return (
    <>
      {isLoading || !data ? (
        <div>Loading...</div>
      ) : (
        <div className={styles.container}>
          <main className={styles.main}>
            <p>{data.title}</p>
            <p>{data.body}</p>
          </main>
        </div>
      )}
    </>
  );
};

export default Home;
