import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import { signOut, useSession } from "next-auth/react";
import { Button } from "../ui/button";
import NegativeDialog from "./negative-dialog";

const ProfileDialog = () => {
  const { data } = useSession();
  const handleLogout = async () => {
    await signOut();
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <div className="m-[7px] flex cursor-pointer items-center justify-center hover:opacity-70">
          <Image
            height={50}
            width={50}
            src={data?.user.image || ""}
            alt="PFP"
            className="rounded-full"
          />
        </div>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="data-[state=open]:animate-overlayShow fixed inset-0 bg-bg-darkBase-pri/70" />
        <Dialog.Content
          className="data-[state=open]:animate-contentShow max-w-[50 0px] fixed left-[50%] top-[50%] max-h-[85vh]
          w-[90vw] max-w-[500px] translate-x-[-50%] translate-y-[-50%] rounded-[20px] border border-seperator-dark-withTran bg-bg-darkElevated-pri p-[20px] text-label-dark-pri focus:outline-none"
        >
          <div className="flex w-full items-start justify-between">
            <Image
              height={110}
              width={110}
              src={data?.user.image || ""}
              alt="pfp"
              className="rounded-full"
            />
            <NegativeDialog
              title="Logout"
              description="Are you sure you want to logout?"
              cancleButton="Go back"
              actionButton="Logout"
              onClick={handleLogout}
            >
              <Button label="Logout" type="negative" />
            </NegativeDialog>
          </div>
          <Dialog.Title className="mt-5 text-[28px] leading-[34px]">
            {data?.user.name}
          </Dialog.Title>
          <Dialog.Description className="mt-[5px] text-[17px] leading-[22px] text-label-dark-sec">
            {data?.user.email}
          </Dialog.Description>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
export default ProfileDialog;
