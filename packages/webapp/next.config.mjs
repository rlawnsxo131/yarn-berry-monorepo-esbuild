import transpiler from 'next-transpile-modules';

const withTM = transpiler(['@packages/coreui']);

const nextConfig = {
  swcMinify: true,
  compress: true,
  webpack: (config, options) => {
    config.resolve.fallback = { fs: false };
    if (!options.dev) {
      config.devtool = options.isServer ? false : 'hidden-source-map';
    }

    return config;
  },
};

export default withTM(nextConfig);
