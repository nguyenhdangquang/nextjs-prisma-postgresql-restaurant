# Start App
Required Node v18 or higher
1. `npm install`
2. If you have do not PostgreSQL at locally. You can run `./start-database.sh` to set PostgreSQL docker image -> then type "y".(Note: Incase you want to use my PostgreSQL cloud just skip this step)
3. If you step start PostgreSQL finished -> `npm run db:migrate` to init table -> `npx prisma db seed` to  seed data migration.
   3.1. Incase you want to see table migration and data: `npx prisma studio`
4. `npm run dev`
Check it out on locally: http://localhost:3000
Check database on locally: http://localhost:5555

## What's next? How do I make an app with this?

Techstack from this project:

- [Next.js](https://nextjs.org)
- [Prisma](https://prisma.io)
- [Tailwind CSS](https://tailwindcss.com)
- [tRPC](https://trpc.io)
- [PostgreSQL](https://www.postgresql.org/)

> [!NOTE]
## Keys of Implementation:
    :+1: Setup Prisma ORM connect with PostgreSQL (checkout config at ./start-database.sh - Linux or OS)
    :+1: Setup Prisma built using tRPC 
    :+1: Using Nextjs for server-side rending
    :+1: Migrate table category and restaurant by categoryId is the ref of restaurant tbl (checkout seed migrate at ./prisma/seed.ts)
    :+1: Implementing APIs getRestaurants and updateFavorite (Bonus point: getCategories, searchRestaurant)
    :+1: Searching restaurants on search input component
    :+1: Loading implementation
    :+1: No data found implementation
    
## Demonstrated    
https://github.com/user-attachments/assets/31b3b540-1884-42eb-ad28-b096e001b4dd

## Github Repository
You can check out the [GitHub repository](https://github.com/nguyenhdangquang/nextjs-prisma-trpc-postgresql-restaurant.git) — your feedback and contributions are welcome!

## Deployment app

Follow our deployment link at [Vercel]()
