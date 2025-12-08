// Temporary placeholder for Phase 2
// In Phase 3 we replace this with real API calls

export async function getWeatherPlaceholder(city: string) {
  return {
    city,
    temperature: "25°C",
    condition: "Sunny",
    icon: "🌤️",
    message: "API not connected yet — using placeholder data.",
  };
}
