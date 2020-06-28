export const devAPIUrl = "http://localhost:3000";
export const prodAPIUrl =
  "https://habits-tracker-next-cherenkor.kucherenko-web.vercel.app";
export const isProd = process.env.NODE_ENV === "production";
export const API_URL = isProd ? prodAPIUrl : devAPIUrl;
