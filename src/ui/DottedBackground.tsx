const DottedBackground = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "fixed",
        top: 0,
        left: 0,
      }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <pattern
          id="dots"
          x="0"
          y="0"
          width="20"
          height="20"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="10" cy="10" r="3" fill="#007BFF" />
        </pattern>
        <rect x="0" y="0" width="100%" height="100%" fill="url(#dots)" />
        <linearGradient id="fade" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#007BFF" />
          <stop offset="100%" stop-color="#ffffff" />
        </linearGradient>
        <rect x="0" y="0" width="100" height="100" fill="url(#fade)" />
      </svg>
    </div>
  );
};

export default DottedBackground;
