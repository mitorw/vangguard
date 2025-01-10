"use client";

import Link from "@/node_modules/next/link";

export default function AddProdukPage() {


  return (
    <div>
      {/* Navbar */}
      <header className="mb-10">
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
              <Link href="/add">
                <button className=" text-white px-4 py-2 rounded-md ">
                  Tambah Produk
                </button>
              </Link>
              <Link href="/login" className="pl-2">
                <button className="bg-white text-blue-500 px-4 py-2 rounded-md hover:bg-gray-200">
                  Login
                </button>
              </Link>
            </div>
          </div>
        </nav>
      </header>

      <div className="p-10 bg-gray-100 ">
        <div className="bg-white p-6 rounded-md shadow-md max-w-lg mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center text-black">Tambah Produk Baru</h2>
          <label className="input input-bordered flex items-center my-5">
            Nama Produk :
            <input type="text" className="grow" placeholder=" Produk A" />
          </label>
          <label className="input input-bordered flex items-center my-5">
            Harga :
            <input type="text" className="grow" placeholder=" Rp. 200.000.000" />
          </label>
          <label className="input input-bordered flex flex-col my-5 h-40 p-4">
            Deskripsi Produk :
            <textarea className="grow p-3 border rounded mt-2 mb-4" placeholder="Windows 11, RTX 3050 TI, dll"></textarea>
          </label>

          <div className="flex justify-center">
            <button className="btn btn-xs lg:btn-lg bg-blue-500 text-white">Submit</button>
          </div>

        </div>
      </div>
    </div>
  );
}
