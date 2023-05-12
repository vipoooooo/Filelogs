import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { api } from "~/utils/api";
import { Header } from "~/components/ui/header";
import { IoChevronBack, IoCloseCircle } from "react-icons/io5";
import { BadgeIII } from "~/components/ui/bagde";
import { AdminHeader } from "~/components/admin-header";
import { TabTrigger } from "~/components/ui/tab-trigger";
import { LabelTextfield } from "~/components/ui/textfield";
import { ScrollAreaDefault } from "~/components/ui/scroll-area";
import NegativeDialog from "~/components/dialog/negative-dialog";
import AddMemberRoleDialog from "~/components/dialog/add-member-role";
import * as Tabs from "@radix-ui/react-tabs";
import * as Switch from "@radix-ui/react-switch";
import * as Tooltip from "@radix-ui/react-tooltip";
import * as RadioGroup from "@radix-ui/react-radio-group";
import CreateRoleDialog from "~/components/dialog/create-role";
import { useRouter } from "next/router";

const Role: NextPage = () => {
  const roles = api.role.getAll.useQuery();

  // Add officeId to url
  const router = useRouter();
  const setRoute = async (roleId: string) => {
    await router.replace(`?role=${roleId}`, undefined, { shallow: true });
  };

  const setRouteBack = async () => {
    await router.replace(``, undefined, { shallow: true });
  };

  // Query the selected office title based on the url
  const roleTitle = api.role.getTitle.useQuery({
    id: router.query.role as string,
  });

  const permissions = api.permission.getAll.useQuery();
  const membersRole = api.user.getMemberofRole.useQuery({
    id: router.query.role as string,
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
            router.query.role === undefined ? "md:flex" : "hidden md:flex"
          }`}
        >
          <Header />
          <section className="flex h-[calc(100vh-65px)] w-full flex-col gap-[1px]">
            <AdminHeader
              title={"Role"}
              description={
                "Use role to group your user and assign their permission."
              }
              placeholder={"Search Role"}
            >
              <CreateRoleDialog />
            </AdminHeader>
            <div className="h-full w-full bg-bg-darkElevated-pri">
              <ScrollAreaDefault>
                {roles.data?.map((role) => (
                  <div
                    key={role.id}
                    className="flex w-full cursor-pointer items-center justify-between gap-5 bg-bg-darkElevated-pri p-[15px] px-5 py-[15px] hover:bg-bg-darkElevated-sec"
                    onClick={() => setRoute(role.id)}
                  >
                    <BadgeIII
                      label={role.title}
                      color={
                        role?.color === "red"
                          ? "red"
                          : role?.color === "orange"
                          ? "orange"
                          : role?.color === "yellow"
                          ? "yellow"
                          : role?.color === "green"
                          ? "green"
                          : role?.color === "cyan"
                          ? "cyan"
                          : role?.color === "blue"
                          ? "blue"
                          : role?.color === "indigo"
                          ? "indigo"
                          : role?.color === "purple"
                          ? "purple"
                          : role?.color === "pink"
                          ? "pink"
                          : undefined // Default color if none of the conditions match
                      }
                    />
                    {role.title === "Admin" ? (
                      <></>
                    ) : (
                      <NegativeDialog
                        title="Delete Role"
                        description="This action cannot be undone"
                        cancleButton="Cancel"
                        actionButton="Delete"
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
                                Delete role
                                <Tooltip.Arrow className="fill-bg-darkBase-pri" />
                              </Tooltip.Content>
                            </Tooltip.Portal>
                          </Tooltip.Root>
                        </Tooltip.Provider>
                      </NegativeDialog>
                    )}
                  </div>
                ))}
              </ScrollAreaDefault>
            </div>
          </section>
        </section>
        <section
          className={`flex w-full flex-col gap-[1px] ${
            router.query.role === undefined ? "hidden md:flex" : "md:flex"
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
          {router.query.role === undefined ? (
            <div className="flex h-[calc(100vh-65px)] w-full items-center justify-center bg-bg-darkElevated-pri text-label-dark-pri">
              <p className="text-xl font-medium">👈 Select one of the role</p>
            </div>
          ) : (
            <Tabs.Root
              className="flex h-[calc(100vh-65px)] w-full flex-col "
              defaultValue="tab1"
            >
              <div className="bg-bg-darkElevated-pri px-5 pt-5">
                <Tabs.List
                  className="flex rounded-[8.91px] bg-bg-darkElevated-sec p-[2px]"
                  aria-label="Manage your account"
                >
                  <TabTrigger label={"Display"} value={"tab1"} />
                  <TabTrigger label={"Permission"} value={"tab2"} />
                  <TabTrigger label={"Member"} value={"tab3"} />
                </Tabs.List>
              </div>

              {/* TAB DISPLAY */}
              <Tabs.Content
                className="grow flex-col bg-bg-darkElevated-pri p-5 outline-none"
                value="tab1"
              >
                <div className="mb-5 flex flex-col gap-[5px]">
                  <p className="text-xl font-medium text-label-dark-pri">
                    Display
                  </p>
                  <p className="text-[13px] text-label-dark-ter">
                    This is where you edit how you want to display this specific
                    role
                  </p>
                </div>
                <LabelTextfield
                  label={"Role Name*"}
                  placeholder={"Role name"}
                />
                <div className="mt-5 flex w-full flex-col gap-[5px]">
                  <label
                    className="text-[13px] font-medium text-label-dark-sec"
                    htmlFor="username"
                  >
                    Role Color
                  </label>
                  <RadioGroup.Root
                    className="flex flex-wrap gap-2.5"
                    defaultValue="default"
                    aria-label="View density"
                  >
                    <RadioItem value={"default"} id={"r1"} />
                    <RadioItem value={"red"} id={"r2"} color="red" />
                    <RadioItem value={"orange"} id={"r3"} color="orange" />
                    <RadioItem value={"yellow"} id={"r4"} color="yellow" />
                    <RadioItem value={"green"} id={"r5"} color="green" />
                    <RadioItem value={"teal"} id={"r6"} color="cyan" />
                    <RadioItem value={"blue"} id={"r7"} color="blue" />
                    <RadioItem value={"indigo"} id={"r8"} color="indigo" />
                    <RadioItem value={"purple"} id={"r9"} color="purple" />
                    <RadioItem value={"pink"} id={"r10"} color="pink" />
                  </RadioGroup.Root>
                </div>
              </Tabs.Content>

              {/* TAB PERMISSION */}
              <Tabs.Content
                className="h-full flex-col outline-none "
                value="tab2"
              >
                <div className="flex h-full flex-col gap-[1px]">
                  <div className="flex flex-col gap-[5px] bg-bg-darkElevated-pri p-5">
                    <p className="text-xl font-medium text-label-dark-pri">
                      Permission
                    </p>
                    <p className="text-[13px] text-label-dark-ter">
                      This is where you assign permission to each role
                    </p>
                  </div>
                  <div className="h-full w-full bg-bg-darkElevated-pri">
                    <ScrollAreaDefault>
                      {permissions.data?.map((permission) => (
                        <div
                          key={permission.id}
                          className="flex gap-5 bg-bg-darkElevated-pri p-5"
                        >
                          <div className="flex grow flex-col">
                            <p className="text-[15px] font-medium capitalize text-label-dark-pri">
                              {permission.title}
                            </p>
                            <p className="text-[13px] text-label-dark-ter">
                              {permission.description}
                            </p>
                          </div>
                          <Switch.Root
                            className="relative h-[31px] w-[51px] cursor-pointer rounded-full bg-bg-darkElevated-sec outline-none  data-[state=checked]:bg-default-dark-green"
                            id="permission"
                          >
                            <Switch.Thumb className="block h-[27px] w-[27px] translate-x-0.5 rounded-full bg-white shadow-xl transition-transform duration-100 will-change-transform data-[state=checked]:translate-x-[22px]" />
                          </Switch.Root>
                        </div>
                      ))}
                    </ScrollAreaDefault>
                  </div>
                </div>
              </Tabs.Content>

              {/* TAB MEMEBR */}
              <Tabs.Content
                className="h-full flex-col outline-none"
                value="tab3"
              >
                <div className="flex h-full flex-col gap-[1px]">
                  <AdminHeader
                    title={`Member of ${roleTitle.data?.title || ""}`}
                    description={"This is where you assign users to each role"}
                    placeholder={"Search Member"}
                  >
                    <AddMemberRoleDialog />
                  </AdminHeader>

                  <div className="h-full w-full bg-bg-darkElevated-pri">
                    <ScrollAreaDefault>
                      {membersRole.data?.map((member) => (
                        <div
                          key={member.id}
                          className="flex w-full items-center gap-2.5 px-5 py-2.5"
                        >
                          <Image
                            height={34}
                            width={34}
                            src={member.image || ""}
                            alt={"Pfp"}
                            className="rounded-full"
                          />

                          <div className="flex w-full gap-2.5">
                            <p className=" text-[13px] font-medium text-label-dark-pri">
                              {member.name}
                            </p>
                            <p className=" text-[13px] text-label-dark-sec">
                              {member.email}
                            </p>
                          </div>
                          <NegativeDialog
                            title="Remove member"
                            description="remove username from role role-title"
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
                </div>
              </Tabs.Content>
            </Tabs.Root>
          )}
        </section>
      </main>
    </>
  );
};

type RadioItemProps = {
  value: string;
  id: string;
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

const RadioItem = ({ value, id, color: colors }: RadioItemProps) => {
  let bgColor;

  switch (colors) {
    case "red":
      bgColor = "bg-default-dark-red";
      break;
    case "orange":
      bgColor = "bg-default-dark-orange";
      break;
    case "yellow":
      bgColor = "bg-default-dark-yellow";
      break;
    case "green":
      bgColor = "bg-default-dark-green";
      break;
    case "cyan":
      bgColor = "bg-default-dark-cyan";
      break;
    case "blue":
      bgColor = "bg-default-dark-blue";
      break;
    case "indigo":
      bgColor = "bg-default-dark-indigo";
      break;
    case "purple":
      bgColor = "bg-default-dark-purple";
      break;
    case "pink":
      bgColor = "bg-default-dark-pink";
      break;
    default:
      bgColor = "bg-bg-darkElevated-ter";
  }
  return (
    <RadioGroup.Item
      className="flex h-[30px] w-[30px] items-center justify-center"
      value={value}
      id={id}
    >
      <div className={`h-[20px] w-[20px] rounded-full ${bgColor}`}></div>
      <RadioGroup.Indicator
        className={`relative flex items-center ${bgColor} justify-center rounded-[50%] border-2 border-label-dark-pri after:h-[30px] after:w-[30px] `}
      >
        <div
          className={`relative rounded-full after:h-[22px] after:w-[22px] ${bgColor}`}
        ></div>
      </RadioGroup.Indicator>
    </RadioGroup.Item>
  );
};

export { Role, RadioItem };
