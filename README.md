This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Setting up Redux Toolkit

To set up Redux Toolkit in this project, follow these steps:

1. Install Redux Toolkit and React-Redux:
   ```bash
   npm install @reduxjs/toolkit react-redux
   ```

2. Create the Redux store:
   - Create a file `app/store/store.ts` and set up the Redux store using `configureStore()`.

3. Create a counter slice:
   - Create a file `app/store/counterSlice.ts` to manage a counter with `createSlice()`.

4. Combine slices into a root reducer:
   - Create a file `app/store/rootReducer.ts` to combine slices into a root reducer using `combineReducers()`.

5. Create a Redux Provider:
   - Create a file `app/provider.tsx` to wrap the app in a Redux Provider.

6. Wrap the app in the Redux Provider:
   - Modify `app/layout.tsx` to wrap the app in the Redux Provider.

7. Display the counter and interact with the Redux store:
   - Modify `app/page.tsx` to display a counter and include buttons to increment and decrement the counter, interacting with the Redux state.

8. Add global styles:
   - Add global styles to `app/globals.css`.

9. Run and test:
   - Verify that the project compiles correctly and that the Redux state is fully functional.
