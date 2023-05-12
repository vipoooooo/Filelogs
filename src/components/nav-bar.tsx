import ProfileDialog from "./dialog/profile";
import Image from "next/image";
import { Office } from "./ui/office";

const NavBar = () => {
  return (
    <main className="flex h-screen flex-col gap-[1px]">
      <div className="flex h-16 w-16 items-center justify-center bg-bg-darkElevated-pri">
        <Image height={30} width={30} src="/logo.png" alt="logo" />
      </div>
      <div className="flex h-[calc(100vh-65px)] w-16 flex-col justify-between bg-bg-darkElevated-pri">
        <div className="flex flex-col gap-[7px] p-[7px]">
          <Office label="🧱" />
          <Office label="💽" />
        </div>
        <ProfileDialog />
      </div>
    </main>
  );
};

export { NavBar };
