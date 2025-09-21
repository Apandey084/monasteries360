// /** @type {import('next').NextConfig} */
// const nextConfig = {
//    images: {
//     domains: ["encrypted-tbn0.gstatic.com", "media.istockphoto.com"],
//   },
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: '**', pathname: '/**' },
    ],
  },
};

export default nextConfig;


