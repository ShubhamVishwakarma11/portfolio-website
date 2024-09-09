/** @type {import('next').NextConfig} */
export const images = {
  remotePatterns: [
    {
      protocol: "https",
      hostname: "drive.google.com",
      port: "",
    },
    {
      protocol: "https",
      hostname: "res.cloudinary.com",
      port: "",
    },
  ],
};
