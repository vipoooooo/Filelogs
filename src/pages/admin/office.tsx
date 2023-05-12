import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import {
  IoChevronBack,
  IoCloseCircle,
  IoEllipsisVertical,
  IoPersonOutline,
  IoTrashOutline,
} from "react-icons/io5";
import { AdminHeader } from "~/components/admin-header";
import { Header } from "~/components/ui/header";
import { ScrollAreaDefault } from "~/components/ui/scroll-area";
import { BadgeIII } from "~/components/ui/bagde";
import NegativeDialog from "~/components/dialog/negative-dialog";
import CreateOfficeDialog from "~/components/dialog/create-office";
import AddMemberOfficeDialog from "~/components/dialog/add-member-office";
import EditOfficeDialog from "~/components/dialog/edit-offce";
import * as Tooltip from "@radix-ui/react-tooltip";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

import { api } from "~/utils/api";
import { useRouter } from "next/router";

const Office: NextPage = (props) => {
  const utils = api.useContext();
  const offices = api.office.getAll.useQuery();

  // Add officeId to url
  const router = useRouter();
  const setRoute = async (officeId: string) => {
    await router.replace(`?office=${officeId}`, undefined, { shallow: true });
  };

  // When Click back, remove the added url
  const setRouteBack = async () => {
    await router.replace(``, undefined, { shallow: true });
  };

  // Query member based on officeId that is from url
  const membersOffice = api.user.getMemberofOffice.useQuery({
    id: router.query.office as string,
  });

  // Query the selected office title based on the url
  const officeTitle = api.office.getTitle.useQuery({
    id: router.query.office as string,
  });

  // Delete office
  const { mutate: deleteOffice } = api.office.delete.useMutation({
    onSuccess: async () => {
      await utils.office.getAll.invalidate();
    },
  });

  return (
    <>
      <Head>
        <title>Filelogs - Admin</title>
        <meta name="Login" content="Login" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex h-screen w-full gap-[1px] transition-all">
        <section
          className={`flex w-full flex-col gap-[1px] ${
            router.query.office === undefined ? "md:flex" : "hidden md:flex"
          }`}
        >
          <Header />
          <section className="flex h-[calc(100vh-65px)] w-full flex-col gap-[1px]">
            <AdminHeader
              title={"Office"}
              description={
                "Use offices to assign users to each office for them to view log in that office"
              }
              placeholder={"Search Office"}
            >
              <CreateOfficeDialog />
            </AdminHeader>
            <div className="h-full w-full flex-1 bg-bg-darkElevated-pri">
              <ScrollAreaDefault>
                {offices.data?.map((office) => (
                  <div
                    key={office.id}
                    className={`flex w-full cursor-pointer items-center gap-5 ${
                      router.query.office === office.id
                        ? "bg-bg-darkElevated-sec"
                        : "bg-bg-darkElevated-pri"
                    } p-[15px] px-5 py-1.5 hover:bg-bg-darkElevated-sec`}
                    onClick={() => setRoute(office.id)}
                  >
                    <p className="leading-0 text-[34px]">{office.icon}</p>
                    <div className="flex w-full flex-col gap-[5px] text-[13px]">
                      <p className=" w-full font-medium text-label-dark-pri">
                        {office.title}
                      </p>
                      <div className="flex w-full gap-[5px]">
                        <IoPersonOutline
                          className="text-label-dark-sec"
                          size={16}
                        />
                        <p className="w-full text-label-dark-sec">
                          {JSON.stringify(office._count.user)}
                        </p>
                      </div>
                    </div>

                    <DropdownMenu.Root>
                      <DropdownMenu.Trigger asChild>
                        <button aria-label="Customise options">
                          <IoEllipsisVertical
                            className="text-label-dark-sec hover:text-label-dark-pri"
                            size={20}
                          />
                        </button>
                      </DropdownMenu.Trigger>

                      <DropdownMenu.Portal>
                        <DropdownMenu.Content
                          className="data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade w-fit min-w-[200px] rounded-[10px] bg-bg-darkBase-pri p-[5px] will-change-[opacity,transform]"
                          sideOffset={5}
                        >
                          <EditOfficeDialog />
                          <NegativeDialog
                            title="Delete Role"
                            description="This action cannot be undone"
                            cancleButton="Cancel"
                            actionButton="Delete"
                            onClick={() => deleteOffice({ id: office.id })}
                          >
                            <div className="hover:text-text-default-dark-red/75 flex cursor-pointer select-none items-center gap-[5px] rounded-[5px] p-2 text-[15px] font-medium leading-none text-default-dark-red/75 outline-none hover:bg-default-dark-red/20 data-[disabled]:pointer-events-none">
                              <IoTrashOutline size={18} />
                              <p>Delete</p>
                            </div>
                          </NegativeDialog>

                          <DropdownMenu.Arrow className="fill-bg-darkBase-pri" />
                        </DropdownMenu.Content>
                      </DropdownMenu.Portal>
                    </DropdownMenu.Root>
                  </div>
                ))}
              </ScrollAreaDefault>
            </div>
          </section>
        </section>
        <section
          className={`flex w-full flex-col gap-[1px] ${
            router.query.office === undefined ? "hidden md:flex" : "md:flex"
          }`}
        >
          <Header>
            <div className="flex items-center justify-between lg:justify-end">
              <button
                className={`flex h-[64px] items-center gap-[5px] p-2.5 text-label-dark-sec hover:bg-bg-darkElevated-sec hover:text-label-dark-pri lg:hidden`}
                onClick={setRouteBack}
              >
                <IoChevronBack size={24} />
                <p className="text-[13px]">BACK</p>
              </button>
            </div>
          </Header>
          {router.query.office === undefined ? (
            <div className="flex h-[calc(100vh-65px)] w-full items-center justify-center bg-bg-darkElevated-pri text-label-dark-pri">
              <p className="text-xl font-medium">👈 Select one of the office</p>
            </div>
          ) : (
            <section className="flex h-[calc(100vh-65px)] w-full flex-col gap-[1px]">
              <AdminHeader
                title={`Member of ${officeTitle.data?.icon || ""} ${
                  officeTitle.data?.title || ""
                }`}
                description={"This is where you manage members of each office"}
                placeholder={"Search Member"}
              >
                <AddMemberOfficeDialog />
              </AdminHeader>
              <div className="h-full w-full flex-1 bg-bg-darkElevated-pri">
                <ScrollAreaDefault>
                  {membersOffice.data?.map((member) => (
                    <div
                      key={member.id}
                      className="flex w-full cursor-pointer items-center gap-2.5  bg-bg-darkElevated-pri p-[15px] px-5 py-2.5"
                    >
                      <Image
                        height={34}
                        width={34}
                        src={member.image || ""}
                        alt={"Pfp"}
                        className="rounded-full"
                      />
                      <div className="flex w-full gap-2.5 text-[13px]">
                        <p className="font-medium text-label-dark-pri">
                          {member.name}
                        </p>
                        <BadgeIII
                          label={member.role?.title || ""}
                          color={
                            member.role?.color === "red"
                              ? "red"
                              : member.role?.color === "orange"
                              ? "orange"
                              : member.role?.color === "yellow"
                              ? "yellow"
                              : member.role?.color === "green"
                              ? "green"
                              : member.role?.color === "cyan"
                              ? "cyan"
                              : member.role?.color === "blue"
                              ? "blue"
                              : member.role?.color === "indigo"
                              ? "indigo"
                              : member.role?.color === "purple"
                              ? "purple"
                              : member.role?.color === "pink"
                              ? "pink"
                              : undefined // Default color if none of the conditions match
                          }
                        />
                        <p className=" text-[13px] text-label-dark-sec">
                          {member.email}
                        </p>
                      </div>
                      <NegativeDialog
                        title="Remove member"
                        description="remove username from officeName"
                        cancleButton="Cancel"
                        actionButton="Remove"
                        onClick={() => console.log("")}
                      >
                        <Tooltip.Provider delayDuration={0}>
                          <Tooltip.Root>
                            <Tooltip.Trigger asChild>
                              <div>
                                <IoCloseCircle
                                  className="text-label-dark-sec hover:text-label-dark-pri"
                                  size={20}
                                />
                              </div>
                            </Tooltip.Trigger>
                            <Tooltip.Portal>
                              <Tooltip.Content
                                className="data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade text-violet11 select-none rounded-[10px] bg-bg-darkBase-pri/75 px-[10px] py-[8px] text-[13px] leading-none text-label-dark-pri shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity]"
                                sideOffset={5}
                              >
                                Remove member
                                <Tooltip.Arrow className="fill-bg-darkBase-pri" />
                              </Tooltip.Content>
                            </Tooltip.Portal>
                          </Tooltip.Root>
                        </Tooltip.Provider>
                      </NegativeDialog>
                    </div>
                  ))}
                </ScrollAreaDefault>
              </div>
            </section>
          )}
        </section>
      </main>
    </>
  );
};

export default Office;
