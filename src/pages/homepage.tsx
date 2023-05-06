import { type NextPage } from "next";
import Head from "next/head";
import { useEffect, useRef } from "react";
import { NavBar } from "~/components/nav-bar";
import * as ScrollArea from "@radix-ui/react-scroll-area";
import { Badge, BadgeII } from "~/components/ui/bagde";
import { PDFFile } from "~/components/ui/pdf-file";

const Homepage: NextPage = () => {
  const findRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    function handleFind(event: KeyboardEvent) {
      if (event.code === "KeyF" && event.metaKey) {
        event.preventDefault();
        findRef.current?.focus();
      }
    }

    document.addEventListener("keydown", handleFind);

    return () => {
      document.removeEventListener("keydown", handleFind);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Filelogs - Home</title>
        <meta name="Login" content="Login" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex gap-[1px]">
        <NavBar />
        <div className="h-screen w-full gap-[1px] transition-all">
          <div className="flex h-screen w-full flex-col gap-[1px]">
            <div className=" flex h-16 w-full items-center bg-bg-darkElevated-pri px-2.5">
              <input
                ref={findRef}
                className="w-full resize-none rounded-[10px] border border-seperator-dark-withTran bg-bg-darkBase-pri p-[10px] text-[15px] text-white caret-default-dark-green outline-none selection:bg-fill-dark-sec selection:text-white placeholder:text-label-dark-ter hover:resize-y"
                type="text"
                placeholder="Search / ⌘F / ⇧F"
              />
            </div>
            <div className=" h-[calc(100vh-65px)] w-full bg-bg-darkElevated-pri">
              <ScrollArea.Root className="scrollbar-thin scrollbar-thumb-mauve-10 scrollbar-track-blackA6 scrollbar-thumb-rounded scrollbar-track-rounded h-full w-full overflow-hidden">
                <ScrollArea.Viewport className="h-full">
                  {Array.from({ length: 50 }).map((_, i) => (
                    <div
                      key={i}
                      className="flex w-full cursor-pointer flex-col gap-2.5 border-b-[1px] border-bg-darkBase-pri bg-bg-darkElevated-pri p-2.5 hover:bg-bg-darkElevated-sec"
                    >
                      <div className="flex flex-col gap-[5px] ">
                        <div className="flex flex-wrap items-center gap-2.5">
                          <p className="text-xs text-label-dark-sec">69</p>
                          <p className="text-xs text-label-dark-sec">
                            World Bank
                          </p>
                          <p className="text-xs text-label-dark-sec">420</p>
                          <Badge label="Letter In & Out" color="purple" />
                          <BadgeII label="Assigned" color="green" />
                        </div>
                        <p className="text-sm font-medium text-label-dark-pri">
                          Something Something Title
                        </p>
                        <p className="text-xs text-label-dark-ter">
                          Something Something Title
                        </p>
                        <p className="text-xs text-label-dark-sec">
                          Jan 13 - Jan 14
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-[5px]">
                        <PDFFile
                          title="somethingtitle.pdf"
                          size={13.44}
                          url="/"
                        />
                      </div>
                    </div>
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
