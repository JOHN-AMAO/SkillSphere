/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.freepik.com/",
        port: "",
        pathname:
          "/free-vector/software-tester-concept-illustration_114360-12815.jpg?w=740&t=st=1692577828~exp=1692578428~hmac=098a785e288af3e048b3009cd274dcfa93f349f4313499f1029e287a506f393e",
      },
    ],
  },
};
