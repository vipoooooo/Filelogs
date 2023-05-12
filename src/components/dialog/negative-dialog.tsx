import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Button } from "../ui/button";

type NegativeDialogProps = {
  children: React.ReactNode;
  title: string;
  description: string;
  cancleButton: string;
  actionButton: string;
  onClick?: () => void;
};
const NegativeDialog = ({
  children,
  title,
  description,
  cancleButton,
  actionButton,
  onClick,
}: NegativeDialogProps) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <div>{children}</div>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="data-[state=open]:animate-overlayShow fixed inset-0 bg-bg-darkBase-pri/70" />
        <Dialog.Content className="data-[state=open]:animate-contentShow fixed left-[50%] top-[50%] max-h-[85vh] w-[90vw] max-w-[350px] translate-x-[-50%] translate-y-[-50%] rounded-[20px] border border-seperator-dark-withTran bg-bg-darkElevated-pri p-[20px] text-label-dark-pri focus:outline-none">
          <Dialog.Title className="mb-8 flex w-full flex-col items-center gap-[5px]">
            <div className="text-[22px] font-medium">{title}</div>
            <div className="text-[15px] text-label-dark-ter">{description}</div>
          </Dialog.Title>
          <div className="flex w-full items-start justify-between gap-[10px]">
            <Dialog.Close asChild>
              <Button label={cancleButton} width="full" />
            </Dialog.Close>
            <Button
              onClick={onClick}
              label={actionButton}
              type="negative"
              width="full"
            />
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default NegativeDialog;
