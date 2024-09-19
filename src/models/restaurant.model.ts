import { Category } from "~/models/category.model";

export type Restaurant = {
    id: string,
    name: string,
    desc: string,
    city: string,
    imageId: string[],
    rating: string,
    featured: string | null,
    category: Category,
    categoryId: string,
    price_range: string,
    rating_count: number,
    isFavorite: boolean,
}
