import * as Tooltip from "@radix-ui/react-tooltip";
type NavButtonProps = {
  onClick?: () => void;
  children: React.ReactNode;
  label: string;
  type?: "selected";
};

const NavButton = ({
  onClick,
  children,
  label,
  type: type,
}: NavButtonProps) => {
  let iconColor;

  switch (type) {
    case "selected":
      iconColor = "text-label-dark-pri";

      break;
    default:
      iconColor = "text-label-dark-sec";
  }

  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <button
            className={`p-[20px] ${iconColor} hover:text-label-dark-pri`}
            onClick={onClick}
          >
            {children}
          </button>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            className="data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade text-violet11 select-none rounded-[10px] bg-bg-darkBase-pri/75 px-[10px] py-[8px] text-[13px] leading-none text-label-dark-pri shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity]"
            sideOffset={-10}
            side="right"
          >
            {label}
            <Tooltip.Arrow className="fill-bg-darkBase-pri" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
};

export { NavButton };
