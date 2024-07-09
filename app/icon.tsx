import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";

// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 24,
          background: "#FEFAE1",
          width: "100%",
          height: "100%",
          borderRadius: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
        }}
      >
        <svg
          width="25.2"
          height="18"
          viewBox="0 0 84 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M78.259 48.8105C78.259 48.8105 80.0719 -1.39127 56.5036 14.9394C56.5036 14.9394 42.9065 -30.726 9.66906 37.6209L0 47.2984C0 47.2984 43.5108 41.25 84 60L78.259 48.8105Z"
            fill="#41352E"
          />
        </svg>
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported icons size metadata
      // config to also set the ImageResponse's width and height.
      ...size,
    }
  );
}
