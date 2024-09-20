import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { Restaurant } from "~/models";

export const restaurantRouter = createTRPCRouter({
    getRestaurants: publicProcedure.query(async ({ ctx }) => {
        const restaurants: Restaurant[] = await ctx.db.restaurant.findMany({
            orderBy: { createdAt: "asc" },
            include: {
                category: true
            }
        });

        return restaurants ?? [];
    }),

    getByCategoryId: publicProcedure.input(z.object( { id: z.string() })).query(async ({ ctx, input }) => {
        let restaurants: Restaurant[];
        if (!input.id) {
            restaurants = await ctx.db.restaurant.findMany({
                orderBy: { createdAt: "asc" },
                include: {
                    category: true
                }
            })
            return restaurants ?? []
        }
        restaurants = await ctx.db.restaurant.findMany({
            where: {
                categoryId: input.id
            },
            include: {
                category: true
            }
        })
        return restaurants ?? [];
    }),

    updateFavorite: publicProcedure.input(z.object({ id: z.string(), isFavorite: z.boolean() })).mutation(async ({ ctx, input }) => {
        return await ctx.db.restaurant.update({
            where: {
                id: input.id
            },
            data: {
                isFavorite: input.isFavorite
            },
            include: {
                category: true
            }
        })
    })
});
