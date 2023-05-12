import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const permissionRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.permission.findMany({ orderBy: { createdAt: "desc" } });
  }),
});
