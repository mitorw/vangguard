"use client"

import Link from "@/node_modules/next/link";
// pages/edit-product.tsx
import { useState, useEffect } from "react";
import { getProductByNama, updateProduct } from "../models/produk";

export default function EditProduct() {
  const [oldNama, setOldNama] = useState(""); // Nama produk lama
  const [product, setProduct] = useState({
    nama: "",
    harga: 0,
    deskripsi: "",
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  // Fungsi untuk memuat data produk berdasarkan nama lama
  const loadProduct = async () => {
    if (!oldNama) {
      setError("Masukkan nama produk lama untuk memuat data.");
      return;
    }
    try {
      const products = await getProductByNama(oldNama);
      if (products.length === 0) {
        setError("Produk tidak ditemukan.");
        return;
      }
      const { nama, harga, deskripsi } = products[0];
      setProduct({ nama, harga, deskripsi });
      setError("");
    } catch (err) {
      setError("Gagal memuat data produk. Silakan coba lagi.");
    }
  };

  // Fungsi untuk menangani perubahan data input
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProduct((prev) => ({
      ...prev,
      [name]: name === "harga" ? parseInt(value) || 0 : value, // Pastikan harga adalah angka
    }));
  };

  // Fungsi untuk menyimpan perubahan
  const handleSave = async () => {
    try {
      if (!oldNama || !product.nama || !product.harga || !product.deskripsi) {
        setError("Semua data harus diisi.");
        return;
      }

      // Panggil fungsi updateProduct dengan data yang benar
      await updateProduct(oldNama, product.nama, product.harga, product.deskripsi);

      setMessage("Produk berhasil diperbarui.");
      setError("");
    } catch (err) {
      console.error("Error saat menyimpan:", err);
      setError("Gagal memperbarui data produk. Silakan coba lagi.");
    }
  };

  return (
    <div className="flex items-center justify-center w-auto h-auto p-10 bg-gray-100 pt-32">
      {/* Navbar */}
      <header className="mb-10">
        <nav>
          <div className="navbar bg-blue-500 fixed top-0 left-0 w-full z-50 shadow-xl">
            <div className="navbar-start">
              <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h7"
                    />
                  </svg>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                  <Link href="/add">
                    <button className="text-white px-4 py-2 rounded-md">
                      Tambah Produk
                    </button>
                  </Link>
                </ul>
              </div>
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

      
        <div className="bg-white p-8 rounded-md shadow-lg w-full max-w-md">

          <h1 className="text-black text-3xl text-center mb-3">Edit Produk</h1>

          <div className="mb-4">
            <label className="text-black">Nama Produk Lama:</label>
            <input
              type="text"
              placeholder="Masukkan nama produk lama"
              value={oldNama}
              onChange={(e) => setOldNama(e.target.value)}
              className="text-white w-full p-2 mt-1"
            />
            <button onClick={loadProduct} className="text-white mt-2 btn bg-blue-500">
              Muat Data
            </button>
          </div>

          {error && <p className="text-red-500 bg-black rounded p-3 mb-5">{error}</p>}
          {message && <p className="text-green-500">{message}</p>}

          {product.nama && (
            <div className="text-black">
              <div className="mb-4">
                <label>Nama Produk Baru:</label>
                <input
                  type="text"
                  name="nama"
                  placeholder="Nama Produk Baru"
                  value={product.nama}
                  onChange={handleInputChange}
                  className="text-white w-full p-2 mt-1"
                />
              </div>

              <div className="mb-4">
                <label>Harga Produk:</label>
                <input
                  type="number"
                  name="harga"
                  placeholder="Harga Produk"
                  value={product.harga}
                  onChange={handleInputChange}
                  className="text-white w-full p-2 mt-1"
                />
              </div>

              <div className="mb-4">
                <label>Deskripsi Produk:</label>
                <textarea
                  name="deskripsi"
                  placeholder="Deskripsi Produk"
                  value={product.deskripsi}
                  onChange={handleInputChange}
                  className="text-white w-full p-2 mt-1"
                />
              </div>

              <button onClick={handleSave} className="bg-blue-500 text-white px-6 py-3 rounded-md ">
                Simpan Perubahan
              </button>
            </div>
          )}
        </div>

      </div>
  );
}
