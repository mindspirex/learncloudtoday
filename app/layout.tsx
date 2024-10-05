import "@/app/globals.css";
import NavBar from "@/components/NavBar";

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
      </body>
    </html>
  );
}
