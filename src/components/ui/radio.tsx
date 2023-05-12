import React from "react";
import * as RadioGroup from "@radix-ui/react-radio-group";

const CategoryRadio = () => (
  <form>
    <RadioGroup.Root
      className="flex gap-5"
      defaultValue="inOut"
      aria-label="View density"
    >
      <div className="flex cursor-pointer items-center">
        <RadioGroup.Item
          className="h-[18px] w-[18px] rounded-full border border-seperator-dark-withTran"
          value="inOut"
          id="r1"
        >
          <RadioGroup.Indicator className="relative flex h-full w-full items-center justify-center after:block after:h-[12px] after:w-[12px] after:rounded-[50%] after:bg-bg-light-pri after:content-['']" />
        </RadioGroup.Item>
        <label
          className="pl-[5px] text-[13px] leading-none text-label-dark-sec"
          htmlFor="r1"
        >
          Letter In & Out
        </label>
      </div>
      <div className="flex cursor-pointer items-center">
        <RadioGroup.Item
          className="shadow-blackA7 h-[18px] w-[18px] rounded-full border border-seperator-dark-withTran"
          value="comfortable"
          id="r2"
        >
          <RadioGroup.Indicator className="relative flex h-full w-full items-center justify-center after:block after:h-[12px] after:w-[12px] after:rounded-[50%] after:bg-bg-light-pri after:content-['']" />
        </RadioGroup.Item>
        <label
          className="pl-[5px] text-[13px] leading-none text-label-dark-sec"
          htmlFor="r2"
        >
          Letter In
        </label>
      </div>
      <div className="flex cursor-pointer items-center">
        <RadioGroup.Item
          className="shadow-blackA7 h-[18px] w-[18px] rounded-full border border-seperator-dark-withTran"
          value="compact"
          id="r3"
        >
          <RadioGroup.Indicator className="relative flex h-full w-full items-center justify-center after:block after:h-[12px] after:w-[12px] after:rounded-[50%] after:bg-bg-light-pri after:content-['']" />
        </RadioGroup.Item>
        <label
          className="pl-[5px] text-[13px] leading-none text-label-dark-sec"
          htmlFor="r3"
        >
          Letter Out
        </label>
      </div>
    </RadioGroup.Root>
  </form>
);

export default CategoryRadio;
