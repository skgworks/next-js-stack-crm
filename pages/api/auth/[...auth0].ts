import { handleAuth, handleLogout } from "@auth0/nextjs-auth0";

export default handleAuth({
  logout: handleLogout((req) => {
    return { returnTo: `http://${process.env.VERCEL_URL}/logout` };
  }),
});
