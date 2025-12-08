import "./globals.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export const metadata = {
  title: "WeatherWise",
  description: "Real-Time Weather Dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-gray-100">
        {/* Navigation Bar */}
        <NavBar />

        {/* Main Page Content */}
        <main className="flex-1 w-full max-w-4xl mx-auto px-4 py-6">
          {children}
        </main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
