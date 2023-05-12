import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Button } from "../ui/button";
import { IoClose } from "react-icons/io5";
import { LabelTextfield } from "../ui/textfield";
import * as RadioGroup from "@radix-ui/react-radio-group";
import { RadioItem } from "~/pages/admin/role";

const CreateRoleDialog = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <div>
          <Button label="Create Role" />
        </div>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="data-[state=open]:animate-overlayShow fixed inset-0 bg-bg-darkBase-pri/70" />
        <Dialog.Content className="data-[state=open]:animate-contentShow fixed left-[50%] top-[50%] max-h-[85vh] w-[90vw] max-w-[500px] translate-x-[-50%] translate-y-[-50%] rounded-[20px] border border-seperator-dark-withTran bg-bg-darkElevated-pri p-[20px] text-label-dark-pri focus:outline-none">
          <Dialog.Title className="mb-5 flex w-full items-center justify-between gap-[5px]">
            <div className="text-[20px] font-medium">Create Role</div>
            <Dialog.Close asChild>
              <IoClose
                size={24}
                className="text-label-dark-sec hover:text-label-dark-pri"
              />
            </Dialog.Close>
          </Dialog.Title>
          <div className="mb-5 flex w-full flex-col gap-5">
            <LabelTextfield
              label="Role Title*"
              placeholder="Enter Role Title*"
            />
            <div className="mt-5 flex w-full flex-col gap-[5px]">
              <label
                className="text-[13px] font-medium text-label-dark-sec"
                htmlFor="username"
              >
                Role Color
              </label>
              <RadioGroup.Root
                className="flex flex-wrap gap-2.5"
                defaultValue="default"
                aria-label="View density"
              >
                <RadioItem value={"default"} id={"r1"} />
                <RadioItem value={"red"} id={"r2"} color="red" />
                <RadioItem value={"orange"} id={"r3"} color="orange" />
                <RadioItem value={"yellow"} id={"r4"} color="yellow" />
                <RadioItem value={"green"} id={"r5"} color="green" />
                <RadioItem value={"teal"} id={"r6"} color="cyan" />
                <RadioItem value={"blue"} id={"r7"} color="blue" />
                <RadioItem value={"indigo"} id={"r8"} color="indigo" />
                <RadioItem value={"purple"} id={"r9"} color="purple" />
                <RadioItem value={"pink"} id={"r10"} color="pink" />
              </RadioGroup.Root>
            </div>
          </div>

          <Dialog.Close
            asChild
            className="flex w-full items-start justify-between gap-[10px]"
          >
            <Button label="Create Role" width="full" />
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default CreateRoleDialog;
