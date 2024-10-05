This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

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

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# Description

1. Task: https://github.com/rolling-scopes-school/tasks/blob/master/react/modules/tasks/final.md
2. Screenshot:
![image](https://github.com/user-attachments/assets/73810945-0c0f-4905-b338-d2f72efcd350)
![image](https://github.com/user-attachments/assets/2798b639-002d-465a-9acc-dad3f34ca2f1)
![image](https://github.com/user-attachments/assets/02b5ea7a-d401-4d31-88f4-a59f63b96a72)
![image](https://github.com/user-attachments/assets/0faf341a-0626-4435-bb15-5a0410491f92)
![image](https://github.com/user-attachments/assets/8cfe447c-f7f3-44af-a6f9-6fbbac0e74b7)

3. Deployment: https://graphiql-app2.vercel.app/en
4. Done 2024-09-15 / deadline 2024-09-16 01:59
5. Score: 400 / 400

#### Main route - max 50 points
  - [x] The Main page should contain general information about the developers, project, and course. - 10 points
  - [x] In the upper right corner there are 2 buttons: Sign In and Sign Up. - 10 points
  - [x] If the login token is valid and unexpired, the Sign In and Sign Up buttons are replaced with the "Main Page" button. - 10 points
  - [x] When the token expires - the user should be redirected to the Main page automatically. - 10 points
  - [x] Pressing the Sign In / Sign up button redirects a user to the route with the Sign In / Sign up form. - 10 points
#### Sign In / Sign Up - max 50 points
  - [x] Buttons for Sign In / Sign Up / Sign Out are everywhere where they should be. - 10 points
  - [x] Client-side validation is implemented. - 20 points
  - [x] Upon successful login, the user is redirected to the Main page. - 10 points
  - [x] If the user is already logged in and tries to reach these routes, they should be redirected to the Main page. - 10 points
#### RESTfull client - max 120 points
  - [x] Functional editor enabling query editing and prettifying, request body provided in the url as base64-encoded on focus out. - 40 points
  - [x] Functional read-only response section, with information about HTTP status and the code. - 30 mpoints
  - [x] Method selector, shows all the valid HTTP verbs, value is provided in the url on change. - 10 points
  - [x] Input for the url, entered value is provided in base64-encoded way on change. - 15 points
  - [x] Variables section that can shown or hidden, specified variables are included in the body. - 15 points
  - [x] Headers section, value is provided in the url on header add/change. - 20 points
#### GraphiQL route - max 80 points
  - [x] Functional editor enabling query editing and prettifying, request body provided in the url as base64-encoded on focus out. - 35 points
  - [x] Read-only response section, with information about HTTP status and the code, reused from the RESTfull client. - 5 points
  - [x] Operational documentation explorer, visible only upon successful SDL request. - 20 points
  - [x] Variables section that can shown or hidden, specified variables are included in the body. - 10 points
  - [x] Header section that can be shown or hidden, value is provided in the url on header add/change. - 10 points
#### History route - max 50 points
  - [x] History shows informational message with links to the clients when there are no requests in the local storage. - 10 points
  - [x] User can navigate to the previoulsy executed HTTP request to the RESTfull client, HTTP method, url, body, headers, variables are restored. 20 points
  - [x] User can navigate to the previoulsy executed GraphQL request to the GraphiQL client, url, SDL url, body, headers, variables are restored. 20 points
#### General requirements - max 50 points
  - [x] Multiple (at lest 2) languages support / i18n. - 30 points
  - [x] Sticky header. - 10 points
  - [x] Errors are displayed in the user friendly format. - 10 points
