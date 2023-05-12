import { Input } from "postcss";
import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const officeRouter = createTRPCRouter({
  create: publicProcedure
    .input(z.object({ icon: z.string(), title: z.string() }))
    .mutation(({ input, ctx }) => {
      const res = ctx.prisma.office.create({
        data: { icon: input.icon, title: input.title },
      });
      return res;
    }),
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.office.findMany({
      orderBy: { createdAt: "desc" },
      select: {
        title: true,
        icon: true,
        id: true,
        _count: { select: { user: true } },
      },
    });
  }),
  getTitle: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(({ ctx, input }) => {
      return ctx.prisma.office.findUnique({
        where: {
          id: input.id,
        },
      });
    }),
  delete: publicProcedure
    .input(z.object({ id: z.string() }))
    .mutation(({ input, ctx }) => {
      const res = ctx.prisma.office.delete({
        where: { id: input.id },
      });
      return res;
    }),
});
