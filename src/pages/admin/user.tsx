import { type NextPage } from "next";
import Head from "next/head";

const User: NextPage = (props) => {
  return (
    <>
      <Head>
        <title>Filelogs - Admin</title>
        <meta name="Login" content="Login" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-screen w-full bg-bg-darkElevated-pri transition-all"></main>
    </>
  );
};

export default User;
