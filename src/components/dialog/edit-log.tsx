import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Button } from "../ui/button";
import { IoClose, IoPencil } from "react-icons/io5";
import { LabelTextarea, LabelTextfield } from "../ui/textfield";
import CategoryRadio from "../ui/radio";
import { NavButton } from "../ui/nav-button";

const EditLogDialog = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <div>
          <NavButton label={"Edit Log"}>
            <IoPencil size={24} />
          </NavButton>
        </div>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="data-[state=open]:animate-overlayShow fixed inset-0 bg-bg-darkBase-pri/70" />
        <Dialog.Content className="data-[state=open]:animate-contentShow fixed left-[50%] top-[50%] max-h-[85vh] w-[90vw] max-w-[500px] translate-x-[-50%] translate-y-[-50%] rounded-[20px] border border-seperator-dark-withTran bg-bg-darkElevated-pri p-[20px] text-label-dark-pri focus:outline-none">
          <Dialog.Title className="mb-5 flex w-full items-center justify-between gap-[5px]">
            <div className="text-[20px] font-medium">Edit Log</div>
            <Dialog.Close asChild>
              <IoClose
                size={24}
                className="text-label-dark-sec hover:text-label-dark-pri"
              />
            </Dialog.Close>
          </Dialog.Title>
          <div className="mb-5 flex w-full flex-col gap-5">
            <div className="flex w-full gap-2.5">
              <LabelTextfield
                label="Document ID*"
                placeholder="Enter Document ID"
              />
              <LabelTextfield label="Letter ID" placeholder="Enter Letter ID" />
            </div>
            <LabelTextfield label="Title*" placeholder="Enter Title" />
            <LabelTextarea
              label="Description"
              placeholder="Enter Description"
            />
            <LabelTextfield label="Source" placeholder="Enter Source" />
            <div className="flex w-full flex-col gap-2.5">
              <label
                className="text-[13px] font-medium text-label-dark-sec"
                htmlFor="username"
              >
                Category
              </label>
              <CategoryRadio />
            </div>

            <div className="flex w-full gap-2.5">
              <LabelTextfield label="Date In" placeholder="Enter Date In" />
              <LabelTextfield label="Date Out" placeholder="Enter Date Out" />
            </div>
            <div className="flex w-full flex-col gap-[5px]">
              <label
                className="text-[13px] font-medium text-label-dark-sec"
                htmlFor="username"
              >
                Files
              </label>
              <input
                className="w-full cursor-pointer rounded-[10px] border border-dashed border-seperator-dark-withTran bg-bg-darkBase-pri p-[10px] text-[13px] text-white caret-default-dark-green outline-none selection:bg-green-900 selection:text-white"
                id="file"
                type="file"
                accept="application/pdf"
                multiple
              />
            </div>
          </div>

          <Dialog.Close
            asChild
            className="flex w-full items-start justify-between gap-[10px]"
          >
            <Button label="Edit Log" width="full" />
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default EditLogDialog;
