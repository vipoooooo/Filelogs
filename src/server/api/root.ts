import { createTRPCRouter } from "~/server/api/trpc";
import { officeRouter } from "~/server/api/routers/office";
import { roleRouter } from "./routers/role";
import { userRouter } from "./routers/user";
import { permissionRouter } from "./routers/permission";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  office: officeRouter,
  role: roleRouter,
  user: userRouter,
  permission: permissionRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
