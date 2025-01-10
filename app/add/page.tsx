"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {  } from "../models/produk"; // Fungsi untuk menambahkan produk ke database

export default function AddProdukPage() {
  const [formData, setFormData] = useState({
    id: "",
    nama: "",
    harga: "",
    deskripsi: "",
  });
  const router = useRouter();

  // Fungsi untuk menangani perubahan input
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Fungsi untuk menangani submit form
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await ({
        id: formData.id,
        nama: formData.nama,
        harga: parseFloat(formData.harga),
        deskripsi: formData.deskripsi,
      });
      router.push("/dashboard"); // Redirect ke dashboard setelah berhasil
    } catch (error) {
      console.error("Error menambahkan produk:", error);
    }
  };

  return (
    <div className="p-10 bg-gray-100">
      <div className="bg-white p-6 rounded-md shadow-md max-w-lg mx-auto">
        <h2 className="text-2xl font-bold mb-6">Tambah Produk Baru</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="nama" className="block text-sm font-medium text-gray-700">
              Nama Produk
            </label>
            <input
              type="text"
              name="nama"
              id="nama"
              value={formData.nama}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="harga" className="block text-sm font-medium text-gray-700">
              Harga Produk
            </label>
            <input
              type="number"
              name="harga"
              id="harga"
              value={formData.harga}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="deskripsi" className="block text-sm font-medium text-gray-700">
              Deskripsi Produk
            </label>
            <textarea
              name="deskripsi"
              id="deskripsi"
              value={formData.deskripsi}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Tambahkan
          </button>
        </form>
      </div>
    </div>
  );
}
