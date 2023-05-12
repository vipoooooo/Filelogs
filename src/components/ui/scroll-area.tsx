import * as ScrollArea from "@radix-ui/react-scroll-area";

const ScrollAreaa = ({ children }: { children: React.ReactNode }) => {
  return (
    <ScrollArea.Root className="scrollbar-thin scrollbar-thumb-mauve-10 scrollbar-track-blackA6 scrollbar-thumb-rounded scrollbar-track-rounded h-full w-full overflow-hidden">
      <ScrollArea.Viewport className="h-full">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i}>{children}</div>
        ))}
      </ScrollArea.Viewport>
      <ScrollArea.Scrollbar
        className="w-scrollbar-size h-scrollbar-size bg-blackA6 duration-160 scrollbar-thumb-mauve-10 scrollbar-track-blackA8 scrollbar-thumb-rounded scrollbar-track-rounded flex select-none items-center justify-center transition-colors ease-out"
        orientation="vertical"
      >
        <ScrollArea.Thumb className="relative flex-1">
          <div className="min-w-44 min-h-44 absolute inset-0 h-full w-full"></div>
        </ScrollArea.Thumb>
      </ScrollArea.Scrollbar>
      <ScrollArea.Scrollbar
        className="w-scrollbar-size h-scrollbar-size bg-blackA6 duration-160 scrollbar-thumb-mauve-10 scrollbar-track-blackA8 scrollbar-thumb-rounded scrollbar-track-rounded flex select-none flex-col items-center justify-center transition-colors ease-out"
        orientation="horizontal"
      >
        <ScrollArea.Thumb className="relative flex-1">
          <div className="min-w-44 min-h-44 absolute inset-0 h-full w-full"></div>
        </ScrollArea.Thumb>
      </ScrollArea.Scrollbar>
      <ScrollArea.Corner className="bg-blackA8"></ScrollArea.Corner>
    </ScrollArea.Root>
  );
};

const ScrollAreaDefault = ({ children }: { children: React.ReactNode }) => {
  return (
    <ScrollArea.Root className="scrollbar-thin scrollbar-thumb-mauve-10 scrollbar-track-blackA6 scrollbar-thumb-rounded scrollbar-track-rounded h-full w-full overflow-hidden">
      <ScrollArea.Viewport className="h-full">
        <div>{children}</div>
      </ScrollArea.Viewport>
      <ScrollArea.Scrollbar
        className="w-scrollbar-size h-scrollbar-size bg-blackA6 duration-160 scrollbar-thumb-mauve-10 scrollbar-track-blackA8 scrollbar-thumb-rounded scrollbar-track-rounded flex select-none items-center justify-center transition-colors ease-out"
        orientation="vertical"
      >
        <ScrollArea.Thumb className="relative flex-1">
          <div className="min-w-44 min-h-44 absolute inset-0 h-full w-full"></div>
        </ScrollArea.Thumb>
      </ScrollArea.Scrollbar>
      <ScrollArea.Scrollbar
        className="w-scrollbar-size h-scrollbar-size bg-blackA6 duration-160 scrollbar-thumb-mauve-10 scrollbar-track-blackA8 scrollbar-thumb-rounded scrollbar-track-rounded flex select-none flex-col items-center justify-center transition-colors ease-out"
        orientation="horizontal"
      >
        <ScrollArea.Thumb className="relative flex-1">
          <div className="min-w-44 min-h-44 absolute inset-0 h-full w-full"></div>
        </ScrollArea.Thumb>
      </ScrollArea.Scrollbar>
      <ScrollArea.Corner className="bg-blackA8"></ScrollArea.Corner>
    </ScrollArea.Root>
  );
};

export { ScrollAreaa, ScrollAreaDefault };
