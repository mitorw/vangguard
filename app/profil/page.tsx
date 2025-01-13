import Image from "@/node_modules/next/image";
import Link from "@/node_modules/next/link";


export default function Profile() {
  return (
    <div>
    {/* Navbar */}
    <header className="mb-10">
          {/* Navbar */}
          <nav>
            <div className="navbar bg-blue-500 fixed top-0 left-0 w-full z-50 shadow-xl">
              <div className="navbar-start">
                <Link href={"/dashboard"} className="navbar-center btn btn-ghost text-xl">
                Barang Second
              </Link>
              </div>

              <div className="navbar-end lg:flex">
              <ul className="menu menu-horizontal px-1">
                  <li>
                  <Link href={"/admin"}>Admin Dashboard</Link>
                  </li>
                </ul>
                
                <Link href="/login" className="pl-2">
                  <button className="bg-white text-blue-500 px-4 py-2 rounded-md hover:bg-gray-200">
                    Login
                  </button>
                </Link>
              </div>
            </div>
          </nav>
    </header>
    
    {/* Bagian Profile */}
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-full mx-10">
        {/* Header Profil */}
        <div className="flex items-center space-x-4">
          <div className="w-32 h-32">
            <img
              src="/images/item.jpg" // source gambar avatar pengguna
              alt="User Avatar"
              width={150}
              height={150}
              className="object-cover rounded-full"
              />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Budi</h2>
            <p className="text-sm text-gray-500">budi@gmail.com</p>
            <p className="mt-1 text-gray-600">
              Member since: January 2024
            </p>
          </div>
        </div>

        {/* Informasi Detail */}
        <div className="mt-6 border-t pt-4">
          <h3 className="text-lg font-semibold text-gray-700">Profile Details</h3>
          <div className="mt-3 space-y-2">
            <div className="flex justify-between text-sm text-gray-600">
              <span>Full Name:</span>
              <span></span>
            </div>
            <div className="flex justify-between text-sm text-gray-600">
              <span>Email:</span>
              <span></span>
            </div>
            <div className="flex justify-between text-sm text-gray-600">
              <span>Phone:</span>
              <span></span>
            </div>
            <div className="flex justify-between text-sm text-gray-600">
              <span>Address:</span>
              <span></span>
            </div>
          </div>
        </div>

        {/* Tombol Edit Profil */}
        <div className="mt-6 text-center">
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Edit Profile
          </button>
        </div>


        
      </div>
    </div>
  </div>
  );
}
