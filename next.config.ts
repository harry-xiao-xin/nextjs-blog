import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "110.41.180.53",
        port: "9000",
        pathname: "/aurora/**",
        search: "",
      },
    ],
  },
};
export default withNextIntl(nextConfig);
