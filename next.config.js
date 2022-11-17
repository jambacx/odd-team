/** @type {import('next').NextConfig} */

module.exports = {
  trailingSlash: true,
  reactStrictMode: true,
  future: {
    webpack5: true
  },
  webpack(config) {
    config.output.webassemblyModuleFilename = "static/wasm/[modulehash].wasm";

    // Since Webpack 5 doesn't enable WebAssembly by default, we should do it manually
    config.experiments = {asyncWebAssembly: true};

    return config;
  },
  images: {
    // loader: 'imgix',
    // path: 'https://noop/',
    // domains: ['mytravel-public.s3.ap-northeast-2.amazonaws.com'],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840]
  }
};
