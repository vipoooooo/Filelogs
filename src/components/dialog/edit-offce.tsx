import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Button } from "../ui/button";
import { IoClose, IoPencil } from "react-icons/io5";
import { LabelTextfield } from "../ui/textfield";

const EditOfficeDialog = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <div className="flex cursor-pointer select-none items-center gap-[5px] rounded-[5px] p-2 text-[15px] font-medium leading-none text-label-dark-sec outline-none hover:bg-bg-darkElevated-pri hover:text-label-dark-pri data-[disabled]:pointer-events-none">
          <IoPencil size={18} />
          <p>Edit</p>
        </div>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="data-[state=open]:animate-overlayShow fixed inset-0 bg-bg-darkBase-pri/70" />
        <Dialog.Content className="data-[state=open]:animate-contentShow fixed left-[50%] top-[50%] max-h-[85vh] w-[90vw] max-w-[500px] translate-x-[-50%] translate-y-[-50%] rounded-[20px] border border-seperator-dark-withTran bg-bg-darkElevated-pri p-[20px] text-label-dark-pri focus:outline-none">
          <Dialog.Title className="mb-5 flex w-full items-center justify-between gap-[5px]">
            <div className="text-[20px] font-medium">Edit Office</div>
            <Dialog.Close asChild>
              <IoClose
                size={24}
                className="text-label-dark-sec hover:text-label-dark-pri"
              />
            </Dialog.Close>
          </Dialog.Title>
          <div className="mb-5 flex w-full flex-col gap-5">
            <div className="flex w-full flex-col gap-[5px]">
              <label
                className="text-[13px] font-medium text-label-dark-sec"
                htmlFor="username"
              >
                Office Icon
              </label>
              <input
                className="w-14 resize-none rounded-[10px] border border-seperator-dark-withTran bg-bg-darkBase-pri p-[10px] text-[30px] text-white caret-default-dark-green outline-none selection:bg-fill-dark-sec selection:text-white placeholder:text-label-dark-ter hover:resize-y"
                placeholder="👺"
                value={"👺"}
                type="text"
              />
              <p className="text-xs text-label-dark-ter">
                please enter only a single emoji only
              </p>
            </div>
            <LabelTextfield
              label="Office Title*"
              placeholder="Enter Office Title"
              value="Something Something Office"
            />
          </div>

          <Dialog.Close
            asChild
            className="flex w-full items-start justify-between gap-[10px]"
          >
            <Button label="Edit Office" width="full" />
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default EditOfficeDialog;
