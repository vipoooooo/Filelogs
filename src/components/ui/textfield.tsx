type TextfieldProps = {
  label: string;
  placeholder: string;
  value?: string;
};

const LabelTextfield = ({ label, placeholder, value }: TextfieldProps) => {
  return (
    <div className="flex w-full flex-col gap-[5px]">
      <label
        className="text-[13px] font-medium text-label-dark-sec"
        htmlFor="username"
      >
        {label}
      </label>
      <Textfield placeholder={placeholder} value={value} />
    </div>
  );
};

const LabelTextarea = ({ label, placeholder }: TextfieldProps) => {
  return (
    <div className="flex w-full flex-col gap-[5px]">
      <label
        className="text-[13px] font-medium text-label-dark-sec"
        htmlFor="username"
      >
        {label}
      </label>
      <textarea
        className="w-full resize-none rounded-[10px] border border-seperator-dark-withTran bg-bg-darkBase-pri p-[10px] text-[13px] text-white caret-default-dark-green outline-none selection:bg-fill-dark-sec selection:text-white placeholder:text-label-dark-ter hover:resize-y"
        placeholder={placeholder}
      />
    </div>
  );
};

const Textfield = ({
  placeholder,
  value,
}: {
  placeholder: string;
  value?: string;
}) => {
  return (
    <input
      className="w-full resize-none rounded-[10px] border border-seperator-dark-withTran bg-bg-darkBase-pri p-[10px] text-[13px] text-white caret-default-dark-green outline-none selection:bg-fill-dark-sec selection:text-white placeholder:text-label-dark-ter hover:resize-y"
      type="text"
      placeholder={placeholder}
      value={value}
    />
  );
};

export { LabelTextfield, LabelTextarea, Textfield };
