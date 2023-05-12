import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const roleRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.role.findMany({ orderBy: { title: "asc" } });
  }),
  getTitle: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(({ ctx, input }) => {
      return ctx.prisma.role.findUnique({
        where: {
          id: input.id,
        },
      });
    }),
});
