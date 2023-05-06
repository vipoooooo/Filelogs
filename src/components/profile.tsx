import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { IoClose, IoPersonOutline } from "react-icons/io5";
import { NavButton } from "./ui/nav-button";
import Image from "next/image";
import { useSession } from "next-auth/react";

const ProfileDialog = () => {
  const { data } = useSession();

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <NavButton>
          <IoPersonOutline size={24} />
        </NavButton>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="data-[state=open]:animate-overlayShow fixed inset-0 bg-bg-darkBase-pri/70" />
        <Dialog.Content className="data-[state=open]:animate-contentShow fixed left-[50%] top-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-bg-darkElevated-pri p-[25px] text-label-dark-pri shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
          <Image
            height={110}
            width={110}
            src={data?.user.image || ""}
            alt="pfp"
          />
          <Dialog.Title className=" m-0 text-[28px]">
            {data?.user.name}
          </Dialog.Title>
          <Dialog.Description className="mt-[5px] text-[17px] text-label-dark-sec">
            Office
          </Dialog.Description>
          <Dialog.Close asChild>
            <button
              className="hover:bg-violet4 focus:shadow-violet7 absolute right-[10px] top-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full text-label-dark-ter focus:shadow-[0_0_0_2px] focus:outline-none"
              aria-label="Close"
            >
              <IoClose size={24} />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
export default ProfileDialog;
