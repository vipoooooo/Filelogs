import { type NextPage } from "next";
import { signIn } from "next-auth/react";
import Head from "next/head";
import Image from "next/image";
import { IoLogoGoogle } from "react-icons/io5";

const Login: NextPage = (props) => {
  const handleSignIn = async () => {
    const res = await signIn();
    console.log(res);
  };
  return (
    <>
      <Head>
        <title>Filelogs - Login</title>
        <meta name="Login" content="Login" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex h-screen w-screen items-center justify-center">
        <div className="flex w-[90vw] max-w-md flex-col gap-10">
          <div className="flex flex-col gap-5">
            <Image src="/logo.png" alt="" width="40" height="40" />
            <div className="flex flex-col gap-1">
              <p className="text-xl font-medium text-label-dark-pri">
                Login to Filelogs
              </p>
              <p className="text-xs text-label-dark-sec">
                Store, find, assign files all in one place
              </p>
            </div>
            <button
              className="flex justify-center gap-2.5 rounded-[10px] border border-seperator-light-withTran bg-bg-light-pri p-2.5 text-label-light-pri hover:bg-bg-light-sec"
              onClick={handleSignIn}
            >
              <IoLogoGoogle size={18} />
              <p className="leading-4.5 text-[13px] font-medium text-label-light-pri">
                Connect with Google
              </p>
            </button>
          </div>
          <p className="text-xs text-label-dark-ter">
            Build by{" "}
            <span className="text-label-dark-pri">
              <a
                target="_blank"
                href="https://portfolio-bornunnusual.vercel.app/"
              >
                Chhun Viphou
              </a>
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
