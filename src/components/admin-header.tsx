import { Textfield } from "./ui/textfield";

type AdminHeaderProps = {
  title: string;
  description: string;
  placeholder: string;
  children: React.ReactNode;
};

const AdminHeader = ({
  title,
  description,
  placeholder,
  children,
}: AdminHeaderProps) => {
  return (
    <div className="flex h-fit flex-col gap-5 bg-bg-darkElevated-pri p-5">
      <div className="flex flex-col gap-[5px]">
        <p className="text-xl font-medium text-label-dark-pri">{title}</p>
        <p className="text-[13px] text-label-dark-ter">{description}</p>
      </div>
      <div className="flex gap-[5px]">
        <Textfield placeholder={placeholder} />
        <div>{children}</div>
      </div>
    </div>
  );
};

export { AdminHeader };
