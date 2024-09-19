import React from "react";
import SearchRestaurant from '~/app/_components/SearchRestaurant';
import { HydrateClient } from "~/trpc/server";
import { Footer } from "~/app/_components/common";

export default async function Home() {
  return (
    <HydrateClient>
      <main className="py-4 flex min-h-screen flex-col items-center justify-center bg-[#F9FAFB] text-white">
        <SearchRestaurant />
        <Footer />
      </main>
    </HydrateClient>
  );
}
