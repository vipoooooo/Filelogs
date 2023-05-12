import React from "react";
import { type NextPage } from "next";
import Head from "next/head";
import { useEffect, useRef } from "react";
import { NavBar } from "~/components/nav-bar";
import { Badge, BadgeII } from "~/components/ui/bagde";
import { PDFFile } from "~/components/ui/pdf-file";
import CreateLogDialog from "~/components/dialog/create-log";
import { ScrollAreaa } from "~/components/ui/scroll-area";
import { Header } from "~/components/ui/header";
import { NavButton } from "~/components/ui/nav-button";
import {
  IoArrowBack,
  IoArrowForward,
  IoCheckmark,
  IoChevronBack,
  IoChevronDown,
  IoTrashOutline,
} from "react-icons/io5";
import EditLogDialog from "~/components/dialog/edit-log";
import NegativeDialog from "~/components/dialog/negative-dialog";
import * as ScrollArea from "@radix-ui/react-scroll-area";

import { cn } from "../lib/utils";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "../components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../components/ui/popover";

import { api } from "~/utils/api";

const Homepage: NextPage = (props) => {
  const findRef = useRef<HTMLInputElement>(null);
  const offices = api.office.getAll.useQuery();
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

  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  const officesss = [
    {
      value: "it office",
      label: "IT office",
    },
    {
      value: "infra office",
      label: "Infra Office",
    },
    {
      value: "finance office",
      label: "Finance Office",
    },
  ];

  return (
    <>
      <Head>
        <title>Filelogs - Home</title>
        <meta name="Login" content="Login" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex gap-[1px]">
        <NavBar />
        <div className="h-screen w-full flex-auto gap-[1px] transition-all">
          <div className="flex h-screen w-full flex-col gap-[1px]">
            <div className=" flex h-16 w-full items-center gap-[5px] bg-bg-darkElevated-pri px-2.5">
              <input
                ref={findRef}
                className="w-full resize-none rounded-[10px] border border-seperator-dark-withTran bg-bg-darkBase-pri px-[10px] py-[9px] text-[15px] text-white caret-default-dark-green outline-none selection:bg-fill-dark-sec selection:text-white placeholder:text-label-dark-ter hover:resize-y"
                type="text"
                placeholder="Search / ⌘F / ⇧F"
              />
              <div>
                <CreateLogDialog />
              </div>
            </div>
            <div className="h-[calc(100vh-65px)] w-full bg-bg-darkElevated-pri">
              <ScrollAreaa>
                <div className="flex w-full cursor-pointer flex-col gap-2.5 border-b-[1px] border-bg-darkBase-pri bg-bg-darkElevated-pri p-[15px] hover:bg-bg-darkElevated-sec">
                  <div className="flex flex-col gap-[5px] ">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <p className="text-xs text-label-dark-sec">69</p>
                      <p className="text-xs text-label-dark-sec">World Bank</p>
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
                    <PDFFile title="somethingtitle.pdf" size={13.44} url="/" />
                  </div>
                </div>
              </ScrollAreaa>
            </div>
          </div>
        </div>
        <div className="hidden w-[500px] flex-none flex-col gap-[1px] lg:flex">
          <Header>
            <div className="flex items-center justify-between lg:justify-end">
              <button
                className={`flex h-[64px] items-center gap-[5px] p-2.5 text-label-dark-sec hover:bg-bg-darkElevated-sec hover:text-label-dark-pri lg:hidden`}
              >
                <IoChevronBack size={24} />
                <p className="text-[13px]">BACK</p>
              </button>
              <NavButton label={"Previous Log"}>
                <IoArrowBack size={24} />
              </NavButton>
              <NavButton label={"Next Log"}>
                <IoArrowForward size={24} />
              </NavButton>
              <EditLogDialog />
              <NegativeDialog
                title={"Delete Log"}
                description={"Are you sure you want to delete this log?"}
                cancleButton={"Cancel"}
                actionButton={"Delete"}
              >
                <NavButton label={"Delete Log"}>
                  <IoTrashOutline size={24} />
                </NavButton>
              </NegativeDialog>
            </div>
          </Header>
          <ScrollArea.Root className="scrollbar-thin scrollbar-thumb-mauve-10 scrollbar-track-blackA6 scrollbar-thumb-rounded scrollbar-track-rounded h-full w-full overflow-hidden">
            <ScrollArea.Viewport className="h-full">
              <div className="flex flex-col gap-[1px]">
                <div className="bg-bg-darkElevated-pri p-5">
                  <div className="flex w-full flex-col gap-[5px]">
                    <label
                      className="text-[13px] font-medium text-label-dark-sec"
                      htmlFor="username"
                    >
                      Assign office
                    </label>

                    {/* ASSIGN OFFICE */}
                    <Popover open={open} onOpenChange={setOpen}>
                      <PopoverTrigger asChild className="text-label-dark-pri">
                        <button
                          className={`flex w-full rounded-[10px] border border-seperator-dark-withTran bg-bg-darkBase-pri p-[10px] text-label-dark-pri hover:bg-bg-darkBase-pri/30`}
                        >
                          <p className="w-full text-left text-white">
                            {value
                              ? officesss.find(
                                  (office) => office.value === value
                                )?.label
                              : "Select framework..."}
                          </p>
                          <IoChevronDown
                            size={24}
                            className="text-label-dark-sec"
                          />
                        </button>
                      </PopoverTrigger>
                      <PopoverContent className="w-full border-seperator-dark-withTran p-0 text-label-dark-pri">
                        <Command className="bg-bg-darkBase-pri">
                          <CommandInput placeholder="Search office..." />
                          <CommandEmpty>No office found.</CommandEmpty>
                          <CommandGroup>
                            {officesss.map((office) => (
                              <CommandItem
                                className="text-label-dark-pri selection:bg-bg-darkElevated-ter hover:bg-bg-darkBase-sec"
                                key={office.value}
                                onSelect={(currentValue) => {
                                  setValue(
                                    currentValue === value ? "" : currentValue
                                  );
                                  setOpen(false);
                                }}
                              >
                                <IoCheckmark
                                  size={16}
                                  className={cn(
                                    "m-1 h-4 w-4 text-white",
                                    value === office.value
                                      ? "opacity-100"
                                      : "opacity-0"
                                  )}
                                />
                                {office.label}
                              </CommandItem>
                            ))}
                          </CommandGroup>
                        </Command>
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>
                {/* INFORMATION */}
                <div className="flex flex-col gap-5 bg-bg-darkElevated-pri p-5 text-[13px]">
                  <InfoLog label={"Document ID"} value={"001"} />
                  <InfoLog label={"Letter ID"} value={"002"} />
                  <InfoLog label={"Title"} value={"Something Log"} />
                  <InfoLog
                    label={"Description"}
                    value={
                      "something something something something something something something something description"
                    }
                  />
                  <InfoLog label={"Source"} value={"World Bank"} />
                  <InfoLog label={"Category"} value={"Letter In & Out"} />
                  <InfoLog label={"Status"} value={"Completed"} />
                  <InfoLog label={"Date In"} value={"may 1"} />
                  <InfoLog label={"Date Out"} value={"may 2"} />
                  <InfoLog label={"Created At"} value={"may 2"} />
                  <InfoLog label={"Created By"} value={"vipoo"} />
                  <InfoLog label={"Updated At"} value={"---"} />
                  <InfoLog label={"Updated By"} value={"---"} />
                </div>
              </div>
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
    </>
  );
};

const InfoLog = ({ label, value }: { label: string; value: string }) => {
  return (
    <div className="flex gap-5">
      <p className="w-24 flex-none text-label-dark-sec">{label}</p>
      <p className="flex-auto text-label-dark-pri">{value}</p>
    </div>
  );
};

export default Homepage;
