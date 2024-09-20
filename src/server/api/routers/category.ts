import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import {Category} from "~/models";

export const categoryRouter = createTRPCRouter({
  getCategories: publicProcedure.query(async ({ ctx }) => {
    const categories: Category[] = await ctx.db.category.findMany();
    return categories ?? [];
  })
});
