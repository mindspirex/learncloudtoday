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
        <div className="b border py-2">
          <NavBar />
        </div>
        <main>{children}</main>
        <div className="bg-[#3b379f] py-5">
          <Footer />
        </div>
      </body>
    </html>
  );
}
