type ButtonProps = {
  onClick?: () => void;
  label: string;
  type?: "negative" | "warning";
  width?: "full";
};

const Button = ({ onClick, label, type: type, width: width }: ButtonProps) => {
  let bgColor;
  let bgHoverColor;
  let textColor;
  let borderColor;

  let w;

  switch (type) {
    case "negative":
      bgColor = "bg-default-dark-red/20";
      bgHoverColor = "hover:bg-default-dark-red/30";
      textColor = "text-default-dark-red";
      borderColor = "border-default-dark-red/30";
      break;
    case "warning":
      bgColor = "bg-default-dark-yellow/20";
      bgHoverColor = "hover:bg-default-dark-yellow/30";
      textColor = "text-default-dark-yellow";
      borderColor = "border-default-dark-yellow/30";
      break;
    default:
      bgColor = "bg-bg-darkElevated-sec";
      bgHoverColor = "hover:bg-bg-darkElevated-ter";
      textColor = "text-label-dark-pri";
      borderColor = "border-seperator-dark-withTran";
  }

  switch (width) {
    case "full":
      w = "w-full";
      break;
    default:
      w = "w-fit";
  }

  return (
    <button
      onClick={onClick}
      className={`${w} rounded-[10px] border ${borderColor} ${bgColor} p-[10px] ${bgHoverColor}`}
    >
      <p
        className={`text-[13px] font-medium leading-[18px] ${textColor} whitespace-nowrap`}
      >
        {label}
      </p>
    </button>
  );
};

export { Button };
