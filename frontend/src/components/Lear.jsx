export default function Learn() {
  return (
    <svg width="100%" height="400" viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
      {/* Nodes */}
      <circle cx="100" cy="100" r="40" fill="#60a5fa" />
      <text x="100" y="105" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#000">HTML</text>

      <circle cx="250" cy="100" r="40" fill="#f97316" />
      <text x="250" y="105" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#000">CSS</text>

      <circle cx="400" cy="80" r="40" fill="#facc15" />
      <text x="400" y="85" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#000">JS</text>

      <circle cx="300" cy="220" r="40" fill="#3b82f6" />
      <text x="300" y="225" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#000">React</text>

      <circle cx="180" cy="320" r="40" fill="#4ade80" />
      <text x="180" y="325" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#000">Mongo</text>

      {/* Curved Lines */}
      <path d="M140 100 C180 100, 220 100, 210 100" stroke="#000" fill="none" />
      <path d="M290 100 C330 90, 370 85, 360 80" stroke="#000" fill="none" />
      <path d="M400 120 C380 160, 340 200, 300 220" stroke="#000" fill="none" />
      <path d="M260 260 C240 280, 200 300, 180 320" stroke="#000" fill="none" />
    </svg>
  );
}
