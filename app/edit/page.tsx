"use client";

import Link from "next/link";
import { useState } from "react";
import { getProductByNama, updateProduct } from "../models/produk";

export default function EditProduct() {
  const [oldNama, setOldNama] = useState("");
  const [product, setProduct] = useState({ nama: "", harga: 0, deskripsi: "" });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  // Fungsi untuk memuat data produk berdasarkan nama lama
  const loadProduct = async () => {
    if (!oldNama.trim()) {
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
      setError("Gagal memuat data produk.");
    }
  };

  // Fungsi untuk menangani perubahan data input
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProduct((prev) => ({
      ...prev,
      [name]: name === "harga" ? parseInt(value) || 0 : value,
    }));
  };

  // Fungsi untuk menyimpan perubahan
  const handleSave = async () => {
    try {
      if (!oldNama.trim() || !product.nama.trim() || !product.deskripsi.trim() || product.harga <= 0) {
        setError("Semua data harus diisi dengan benar.");
        return;
      }
      await updateProduct(oldNama, product.nama, product.harga, product.deskripsi);
      setMessage("Produk berhasil diperbarui.");
      setError("");
    } catch (err) {
      setError("Gagal memperbarui data produk.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-md shadow-lg w-full max-w-md">
        <h1 className="text-black text-2xl mb-4 text-center">Edit Produk</h1>

        <div className="mb-4">
          <label className="block text-sm text-gray-700">Nama Produk Lama:</label>
          <input
            type="text"
            value={oldNama}
            onChange={(e) => setOldNama(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
          <button onClick={loadProduct} className="bg-blue-500 text-white px-4 py-2 mt-3 rounded">
            Muat Data
          </button>
        </div>

        {error && <p className="text-red-500">{error}</p>}
        {message && <p className="text-green-500">{message}</p>}

        {product.nama && (
          <div>
            <div className="mb-4">
              <label className="block text-sm text-gray-700">Nama Produk Baru:</label>
              <input
                type="text"
                name="nama"
                value={product.nama}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded mt-1"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm text-gray-700">Harga Produk:</label>
              <input
                type="number"
                name="harga"
                value={product.harga}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded mt-1"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm text-gray-700">Deskripsi Produk:</label>
              <textarea
                name="deskripsi"
                value={product.deskripsi}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded mt-1"
              ></textarea>
            </div>
            <button onClick={handleSave} className="bg-green-500 text-white px-6 py-2 rounded">
              Simpan Perubahan
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
