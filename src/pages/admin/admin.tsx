import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import {
  IoBriefcase,
  IoBriefcaseOutline,
  IoIdCard,
  IoIdCardOutline,
  IoPerson,
  IoPersonOutline,
} from "react-icons/io5";
import ProfileDialog from "~/components/dialog/profile";
import { NavButton } from "~/components/ui/nav-button";
import User from "./user";
import OfficeTab from "./office";
import { Role } from "./role";
import { useRouter } from "next/router";

const Admin: NextPage = (props) => {
  const [selectedButton, setSelectedButton] = useState(0);

  // Add officeId to url
  const router = useRouter();

  // When Click back, remove the added url
  const setRouteBack = async () => {
    await router.replace(``, undefined, { shallow: true });
  };

  return (
    <>
      <Head>
        <title>Filelogs - Admin</title>
        <meta name="Login" content="Login" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex gap-[1px]">
        <main className="flex h-screen flex-col gap-[1px]">
          <div className="flex h-16 w-16 items-center justify-center bg-bg-darkElevated-pri">
            <Image height={30} width={30} src="/logo.png" alt="logo" />
          </div>
          <div className="flex h-[calc(100vh-65px)] w-16 flex-col justify-between bg-bg-darkElevated-pri">
            <div className="flex flex-col">
              {selectedButton === 0 ? (
                <NavButton type="selected" label="User">
                  <IoPerson size={24} />
                </NavButton>
              ) : (
                <NavButton
                  onClick={async () => {
                    setSelectedButton(0);
                    try {
                      await setRouteBack();
                    } catch (error) {
                      // Handle error
                      console.error(error);
                    }
                  }}
                  label="User"
                >
                  <IoPersonOutline size={24} />
                </NavButton>
              )}
              {selectedButton === 1 ? (
                <NavButton type="selected" label="Office">
                  <IoBriefcase size={24} />
                </NavButton>
              ) : (
                <NavButton
                  onClick={async () => {
                    setSelectedButton(1);
                    try {
                      await setRouteBack();
                    } catch (error) {
                      // Handle error
                      console.error(error);
                    }
                  }}
                  label="Office"
                >
                  <IoBriefcaseOutline size={24} />
                </NavButton>
              )}
              {selectedButton === 2 ? (
                <NavButton type="selected" label="Role">
                  <IoIdCard size={24} />
                </NavButton>
              ) : (
                <NavButton
                  onClick={async () => {
                    setSelectedButton(2);
                    try {
                      await setRouteBack();
                    } catch (error) {
                      // Handle error
                      console.error(error);
                    }
                  }}
                  label="Role"
                >
                  <IoIdCardOutline size={24} />
                </NavButton>
              )}
            </div>
            <ProfileDialog />
          </div>
        </main>

        <main className="h-screen w-full gap-[1px] transition-all">
          {selectedButton === 0 && <User />}
          {selectedButton === 1 && <OfficeTab />}
          {selectedButton === 2 && <Role />}
        </main>
      </div>
    </>
  );
};

export default Admin;
