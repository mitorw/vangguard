"use client";

import { useState } from "react";
import { updateProduct } from "../models/produk"; // Import fungsi updateProduct
import Link from "next/link";

export default function UpdateProdukPage() {
  // State untuk input form
  const [nama, setNama] = useState("");
  const [harga, setHarga] = useState("");
  const [deskripsi, setDeskripsi] = useState("");

  // Fungsi untuk menangani submit form
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Mencegah reload halaman

    if (!nama || !harga || !deskripsi) {
      alert("Nama, harga, dan deskripsi produk wajib diisi!");
      return;
    }

    try {
      // Panggil fungsi updateProduct tanpa ID, hanya menggunakan nama
      await updateProduct(nama, parseFloat(harga), deskripsi);
      alert("Produk berhasil diperbarui!");
      // Reset form setelah submit
      setNama("");
      setHarga("");
      setDeskripsi("");
    } catch (error) {
      console.error("Gagal memperbarui produk:", error);
      alert("Terjadi kesalahan saat memperbarui produk.");
    }
  };

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

      <div className="p-10 bg-gray-100">
        <div className="bg-white p-6 rounded-md shadow-md max-w-lg mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center text-black">
            Update Produk
          </h2>
          <form onSubmit={handleSubmit}>
            <label className="input input-bordered flex items-center my-5">
              Nama Produk:
              <input
                type="text"
                className="grow"
                placeholder=""
                value={nama}
                onChange={(e) => setNama(e.target.value)}
              />
            </label>
            <label className="input input-bordered flex items-center my-5">
              Harga:
              <input
                type="number"
                className="grow"
                placeholder=""
                value={harga}
                onChange={(e) => setHarga(e.target.value)}
              />
            </label>
            <label className="input input-bordered flex flex-col my-5 h-40 p-4">
              Deskripsi Produk:
              <textarea
                className="grow p-3 border rounded mt-2 mb-4"
                placeholder=""
                value={deskripsi}
                onChange={(e) => setDeskripsi(e.target.value)}
              ></textarea>
            </label>

            <div className="flex justify-center">
              <button
                type="submit"
                className="btn btn-xs lg:btn-lg bg-blue-500 text-white"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
