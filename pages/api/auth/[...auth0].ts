import { handleAuth, handleLogin, handleLogout } from "@auth0/nextjs-auth0";

export default handleAuth({
  login: handleLogin((req) => {
    return { returnTo: `https://${process.env.VERCEL_URL}` };
  }),
  logout: handleLogout((req) => {
    return { returnTo: `https://${process.env.VERCEL_URL}/logout` };
  }),
});
