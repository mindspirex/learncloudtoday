import "@/app/globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="b border">
          <NavBar />
        </div>
        <main>{children}</main>
        <div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
