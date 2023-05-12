import * as Tabs from "@radix-ui/react-tabs";

const TabTrigger = ({ label, value }: { label: string; value: string }) => {
  return (
    <Tabs.Trigger
      className="flex h-8 flex-1 cursor-pointer select-none items-center justify-center rounded-[6.93px] bg-bg-darkElevated-sec p-2.5 text-[13px] font-medium text-label-dark-sec outline-none first:rounded-tl-md last:rounded-tr-md hover:bg-bg-darkElevated-sec data-[state=active]:bg-bg-darkElevated-ter  data-[state=active]:text-label-dark-pri "
      value={value}
    >
      {label}
    </Tabs.Trigger>
  );
};

export { TabTrigger };
