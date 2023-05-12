import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const userRouter = createTRPCRouter({
  getMemberofOffice: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(({ ctx, input }) => {
      return ctx.prisma.user.findMany({
        where: {
          officeId: input.id,
        },
        include: {
          role: true,
        },
      });
    }),
  getMemberofRole: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(({ ctx, input }) => {
      return ctx.prisma.user.findMany({
        where: {
          roleId: input.id,
        },
      });
    }),
});
