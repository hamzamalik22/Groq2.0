import React from "react";
import ContentLoader from "react-content-loader";

const WebsiteLoader = (props) => (
  <div className="bg-zinc-800 flex justify-center items-center w-full h-screen">
    <ContentLoader
      height={400}
      width={700}
      viewBox="0 0 400 200"
      backgroundColor="#18181B"
      foregroundColor="#ecebeb"
      {...props}
    >
      <rect x="15" y="15" rx="4" ry="4" width="130" height="10" />
      <rect x="155" y="15" rx="3" ry="3" width="130" height="10" />
      <rect x="295" y="15" rx="3" ry="3" width="90" height="10" />
      <rect x="15" y="50" rx="3" ry="3" width="90" height="10" />
      <rect x="115" y="50" rx="3" ry="3" width="60" height="10" />
      <rect x="185" y="50" rx="3" ry="3" width="200" height="10" />
      <rect x="15" y="90" rx="3" ry="3" width="130" height="10" />
      <rect x="160" y="90" rx="3" ry="3" width="120" height="10" />
      <rect x="290" y="90" rx="3" ry="3" width="95" height="10" />
      <rect x="15" y="130" rx="3" ry="3" width="130" height="10" />
      <rect x="160" y="130" rx="3" ry="3" width="225" height="10" />
    </ContentLoader>
  </div>
);

export default WebsiteLoader;
