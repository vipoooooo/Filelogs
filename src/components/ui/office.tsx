const Office = ({ label }: { label: string }) => {
  return (
    <div className="flex h-[50px] w-[50px] items-center justify-center rounded-[25px] border border-seperator-dark-withTran bg-bg-darkElevated-sec transition-all hover:rounded-2xl hover:bg-bg-darkElevated-ter">
      <p className="select-none text-2xl">{label}</p>
    </div>
  );
};

export { Office };
