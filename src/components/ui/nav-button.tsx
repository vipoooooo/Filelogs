const NavButton = ({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: () => void;
}) => (
  <button
    className="p-[20px] text-label-dark-sec hover:text-label-dark-pri"
    onClick={onClick}
  >
    {children}
  </button>
);

export { NavButton };
