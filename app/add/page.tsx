"use client";

import Link from "@/node_modules/next/link";
import { useState } from "react";
import { setSaveData } from "../models/produk"; // Import fungsi setSaveData


export default function AddProdukPage() {
  // State untuk input form
  const [nama, setNama] = useState("");
  const [harga, setHarga] = useState("");
  const [deskripsi, setDeskripsi] = useState("");

  // Fungsi untuk menangani submit form
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Mencegah reload halaman

    if (!nama || !harga) {
      alert("Nama dan harga produk wajib diisi!");
      return;
    }

    try {
      // Panggil fungsi setSaveData
      await setSaveData(nama, parseFloat(harga), deskripsi);
      alert("Produk berhasil ditambahkan!");
      // Reset form setelah submit
      setNama("");
      setHarga("");
      setDeskripsi("");
    } catch (error) {
      console.error("Gagal menyimpan produk:", error);
      alert("Terjadi kesalahan saat menambahkan produk.");
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
            Tambah Produk Baru
          </h2>
          <form onSubmit={handleSubmit}>
            <label className="input input-bordered flex items-center my-5">
              Nama Produk:
              <input
                type="text"
                className="grow"
                placeholder="Produk A"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
              />
            </label>
            <label className="input input-bordered flex items-center my-5">
              Harga:
              <input
                type="number"
                className="grow"
                placeholder="200000000"
                value={harga}
                onChange={(e) => setHarga(e.target.value)}
              />
            </label>
            <label className="input input-bordered flex flex-col my-5 h-40 p-4">
              Deskripsi Produk:
              <textarea
                className="grow p-3 border rounded mt-2 mb-4"
                placeholder="Windows 11, RTX 3050 TI, dll"
                value={deskripsi}
                onChange={(e) => setDeskripsi(e.target.value)}
              ></textarea>
            </label>

            <div className="flex justify-center">
              <button
                type="submit"
                className="btn btn-xs lg:btn-lg bg-blue-500 text-white mr-2"
              >
                Submit
              </button>
              <Link
                href={'/admin'}
                className={'btn btn-xs lg:btn-lg bg-red-500 text-white mr-2'}
              >
               Kembali
              </Link>
              
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
