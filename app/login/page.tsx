import Link from "@/node_modules/next/link";


export default function loginPage() {
    return (
    <div>
      {/* Navbar login */}
      {/* Navbar */}
      <header className="mb-10">
          {/* Navbar */}
          <nav>
            <div className="navbar bg-blue-500 fixed top-0 left-0 w-full z-50 shadow-xl flex justify-center">
              <Link href={"/dashboard"} className="btn btn-ghost text-xl">
                Barang Second
              </Link>
            </div>
          </nav>
      </header>

      {/* Login section */}
      <div className="flex items-center justify-center w-auto h-auto p-10 bg-gray-100">
        <div className="bg-white p-8 rounded-md shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold mb-4 text-black text-center">Sign In</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded shadow-sm focus:ring-blue-500 focus:border-blue-500"
                required
                />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded shadow-sm focus:ring-blue-500 focus:border-blue-500"
                required
                />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-600"
              >
              Sign In
            </button>
          </form>
          <p className="mt-4 text-sm text-gray-600 text-center">
            Belum punya akun ?  <Link href="signup" className = "text-blue-500 hover:underline">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
    );
  }
  