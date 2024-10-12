// next.config.js
import withPlugins from 'next-compose-plugins';


const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(glsl|vs|fs)$/,
      use: 'raw-loader',
    });
    return config;
  },
  reactStrictMode: false,
};

export default withPlugins([], nextConfig);