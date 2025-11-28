export default function WeatherCard({ city }: { city: string }) {
  return (
    <div style={{ padding: "1rem", border: "1px solid #ddd", borderRadius: "8px", maxWidth: "200px" }}>
      <h3>{city}</h3>
      <p>🌡️ Temperature: 25°C</p>
      <p>☁️ Condition: Sunny</p>
    </div>
  );
}
