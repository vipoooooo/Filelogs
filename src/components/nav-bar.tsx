import { IoCreateOutline, IoLogOutOutline } from "react-icons/io5";
import { NavButton } from "./ui/nav-button";
import { signOut } from "next-auth/react";
import ProfileDialog from "./profile";

const NavBar = () => {
  const handleLogout = async () => {
    await signOut();
  };

  return (
    <main className="flex h-screen flex-col gap-[1px]">
      <div className=" h-16 w-16 bg-bg-darkElevated-pri"></div>
      <div className=" flex h-[calc(100vh-65px)] w-16 flex-col justify-between bg-bg-darkElevated-pri">
        <div>
          <NavButton>
            <IoCreateOutline size={24} />
          </NavButton>
          <ProfileDialog />
        </div>
        <NavButton onClick={handleLogout}>
          <IoLogOutOutline size={24} />
        </NavButton>
      </div>
    </main>
  );
};

export { NavBar };
