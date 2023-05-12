import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Button } from "../ui/button";
import { IoCheckmark, IoClose } from "react-icons/io5";
import { Textfield } from "../ui/textfield";
import { ScrollAreaa } from "../ui/scroll-area";
import * as Checkbox from "@radix-ui/react-checkbox";
import Image from "next/image";
import { BadgeIII } from "../ui/bagde";

const AddMemberRoleDialog = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <div>
          <Button label="Add Member" />
        </div>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="data-[state=open]:animate-overlayShow fixed inset-0 bg-bg-darkBase-pri/70" />
        <Dialog.Content className="data-[state=open]:animate-contentShow fixed left-[50%] top-[50%] max-h-[85vh] w-[90vw] max-w-[500px] translate-x-[-50%] translate-y-[-50%] rounded-[20px] border border-seperator-dark-withTran bg-bg-darkElevated-pri p-[20px] text-label-dark-pri focus:outline-none">
          <Dialog.Title className="mb-5 flex w-full items-center justify-between gap-[5px]">
            <div className="text-[20px] font-medium">Add Member to Admin</div>
            <Dialog.Close asChild>
              <IoClose
                size={24}
                className="text-label-dark-sec hover:text-label-dark-pri"
              />
            </Dialog.Close>
          </Dialog.Title>
          <div className="mb-5 flex w-full flex-col gap-5">
            <Textfield placeholder="Search Member" />
            <div className="h-[300px]">
              <ScrollAreaa>
                <div className="flex items-center gap-2.5 px-[5px] py-[8px]">
                  <Checkbox.Root
                    className="flex h-[20px] w-[20px] appearance-none items-center justify-center rounded-md border border-seperator-dark-noTran outline-none "
                    defaultChecked={false}
                    id="c1"
                  >
                    <Checkbox.Indicator className="rounded-md bg-default-dark-green text-label-light-pri">
                      <IoCheckmark size={20} />
                    </Checkbox.Indicator>
                  </Checkbox.Root>
                  <label className="flex items-center gap-2.5" htmlFor="c1">
                    <Image
                      height={24}
                      width={24}
                      src={"/pfp-holder.jpeg"}
                      alt={"member pfp"}
                      className="rounded-full"
                    />
                    <p className="text-[13px] font-medium text-label-dark-pri">
                      Username
                    </p>
                    <p className="text-[13px] text-label-dark-sec">
                      example@gmail.com
                    </p>
                  </label>
                </div>
              </ScrollAreaa>
            </div>
          </div>

          <Dialog.Close
            asChild
            className="flex w-full items-start justify-between gap-[10px]"
          >
            <Button label="Add Member" width="full" />
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default AddMemberRoleDialog;
