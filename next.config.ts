import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	reactStrictMode: true,
	webpack: (config) => {
		return config;
	}
};

export default nextConfig;
