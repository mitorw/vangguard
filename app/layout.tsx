import Link from "@/node_modules/next/link";
import "../app/globals.css";

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Navbar */}
        <nav className="navbar  bg-blue-500 text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <ul className="flex space-x-4">
              <li>
                <Link href="/dashboard"></Link>
                  <a className="hover:underline">Dashboard</a>
                
              </li>
              <li>
                <Link href="/about"></Link>
                  <a className="hover:underline">About</a>
                
              </li>
              <li>
                <Link href="/contact"></Link>
                  <a className="hover:underline">Contact</a>
                
              </li>
            </ul>
            <Link href="login">
                  <button className="bg-white text-blue-500 px-4 py-2 rounded-md hover:bg-gray-200">
                    Login
                  </button>
                </Link>
          </div>
        </nav>


        {/* Main Content */}
        <section>{children}</section>

        {/* Footer */}
        <footer className="footer footer-center bg-blue-500 text-white rounded p-10">
          <nav className="grid grid-flow-col gap-4">
            <p>Follows Our Socials</p>
          </nav>
          <aside>Copyright ©2024 - Barang Second - Vanguard</aside>
        </footer>
      </body>
    </html>
  );
}
