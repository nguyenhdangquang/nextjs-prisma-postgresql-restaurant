/*
  Warnings:

  - You are about to drop the column `category_id` on the `restaurant` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[categoryId]` on the table `restaurant` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `categoryId` to the `restaurant` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "restaurant" DROP CONSTRAINT "restaurant_category_id_fkey";

-- DropIndex
DROP INDEX "restaurant_category_id_key";

-- AlterTable
ALTER TABLE "restaurant" DROP COLUMN "category_id",
ADD COLUMN     "categoryId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "restaurant_categoryId_key" ON "restaurant"("categoryId");

-- AddForeignKey
ALTER TABLE "restaurant" ADD CONSTRAINT "restaurant_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "category"("id") ON DELETE CASCADE ON UPDATE CASCADE;
