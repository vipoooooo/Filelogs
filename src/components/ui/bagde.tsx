type BadgeProps = {
  label: string;
  color?:
    | "red"
    | "orange"
    | "yellow"
    | "green"
    | "cyan"
    | "blue"
    | "indigo"
    | "purple"
    | "pink";
};

const Badge = ({ label, color }: BadgeProps) => {
  let bgColor;
  let textColor;

  switch (color) {
    case "orange":
      bgColor = "bg-default-dark-orange/20";
      textColor = "text-default-dark-orange";
      break;
    case "yellow":
      bgColor = "bg-default-dark-yellow/20";
      textColor = "text-default-dark-yellow";
      break;
    case "green":
      bgColor = "bg-default-dark-green/20";
      textColor = "text-default-dark-green";
      break;
    case "cyan":
      bgColor = "bg-default-dark-cyan/20";
      textColor = "text-default-dark-cyan";
      break;
    case "blue":
      bgColor = "bg-default-dark-blue/20";
      textColor = "text-default-dark-blue";
      break;
    case "indigo":
      bgColor = "bg-default-dark-indigo/20";
      textColor = "text-default-dark-indigo";
      break;
    case "purple":
      bgColor = "bg-default-dark-purple/20";
      textColor = "text-default-dark-purple";
      break;
    case "pink":
      bgColor = "bg-default-dark-pink/20";
      textColor = "text-default-dark-pink";
      break;
    default:
      bgColor = "bg-default-dark-red/20";
      textColor = "text-default-dark-red";
  }

  return (
    <div
      className={`whitespace-nowrap rounded-full ${bgColor} px-[7px] py-[3px] text-xs ${textColor}`}
    >
      {label}
    </div>
  );
};

const BadgeII = ({ label, color }: BadgeProps) => {
  let bgColor;
  let textColor;

  switch (color) {
    case "orange":
      bgColor = "bg-default-dark-orange";
      textColor = "text-label-light-pri";
      break;
    case "yellow":
      bgColor = "bg-default-dark-yellow";
      textColor = "text-label-light-pri";
      break;
    case "green":
      bgColor = "bg-default-dark-green";
      textColor = "text-label-light-pri";
      break;
    case "cyan":
      bgColor = "bg-default-dark-cyan";
      textColor = "text-label-light-pri";
      break;
    case "blue":
      bgColor = "bg-default-dark-blue";
      textColor = "text-label-light-pri";
      break;
    case "indigo":
      bgColor = "bg-default-dark-indigo";
      textColor = "text-label-light-pri";
      break;
    case "purple":
      bgColor = "bg-default-dark-purple";
      textColor = "text-label-light-pri";
      break;
    case "pink":
      bgColor = "bg-default-dark-pink";
      textColor = "text-label-light-pri";
      break;
    default:
      bgColor = "bg-default-dark-red";
      textColor = "text-label-light-pri";
  }

  return (
    <div
      className={`whitespace-nowrap rounded-full ${bgColor} px-[7px] py-[3px] text-xs ${textColor}`}
    >
      {label}
    </div>
  );
};

export { Badge, BadgeII };
