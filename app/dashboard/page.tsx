import React from 'react'
import "@fortawesome/fontawesome-svg-core/styles.css"
import Image from '@/node_modules/next/image';
import Link from '@/node_modules/next/link';


export default function dashboardPage() {
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
                  <Link href={"/dashboard"}>Dashboard</Link>
                </li>
                <li>
                  <Link href={"/profil"}>Profil</Link>
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

      {/* Banner */}
      <header>
        <div className="relative h-72 w-full">
          <Image
            className="absolute inset-0 h-full w-full object-cover opacity-70"
            src={"/images/banner.png"}
            alt={"Banner Barang Second"}
            width={1851}
            height={222}
          />
        </div>
      </header>

      {/* content section */}
      <div className='flex items-center justify-center w-auto h-auto p-10 bg-gray-100'>
        <div className='bg-white p-4 rounded-md shadow-lg w-full '>
          <h2 className='text-black text-center mb-10 text-2xl'>
            Daftar Produk
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* Card Product */}
            <div className="card glass">
              <img src="/images/item.jpg" alt="items" className='w-full h-56 object-cover rounded-lg' />
              <div className="card-body text-black">
                <h2 className="card-title ">Life hack</h2>
                <p>How to park your car at your garage?</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Learn now!</button>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}
