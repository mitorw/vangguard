"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "@/node_modules/next/link";
import { getData } from "../models/produk"; // Mengimpor fungsi getData untuk mendapatkan data produk

export default function DashboardPage() {
  const [products, setProducts] = useState<any[]>([]); // Menyimpan data produk dalam state
  const [selectedProduct, setSelectedProduct] = useState<any | null>(null); // Menyimpan produk yang dipilih
  const [isPopupVisible, setPopupVisible] = useState(false); // Mengontrol visibilitas pop-up

  // Fungsi untuk mengambil data produk dari model
  async function fetchData() {
    const data = await getData(); // Mendapatkan data produk
    setProducts(data); // Menyimpan data produk ke state
  }

  // Fungsi untuk menampilkan pop-up detail produk
  function handleDetailClick(product: any) {
    setSelectedProduct(product);
    setPopupVisible(true);
  }

  // Fungsi untuk menutup pop-up
  function closePopup() {
    setPopupVisible(false);
    setSelectedProduct(null);
  }

  // useEffect untuk mengambil data produk ketika halaman dimuat
  useEffect(() => {
    fetchData();
  }, []);

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

      {/* Content Section */}
      <div className="flex items-center justify-center w-auto h-auto p-10 bg-gray-100">
        <div className="bg-white p-4 rounded-md shadow-lg w-full">
          <h2 className="text-black text-center mb-10 text-2xl">Daftar Produk</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div key={product.id} className="card glass">
                <img
                  src="/images/item.jpg"
                  alt={product.nama}
                  className="w-full h-56 object-cover rounded-lg"
                />
                <div className="card-body text-black">
                  <h2 className="card-title">{product.nama}</h2>
                  <p>Price: Rp. {product.harga.toFixed(2)}</p>
                  <p>{product.deskripsi || "No description available."}</p>
                  <div className="card-actions justify-end">
                    <button
                      className="btn btn-primary"
                      onClick={() => handleDetailClick(product)}
                    >
                      Detail Produk
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pop-up */}
      {isPopupVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white p-6 rounded-lg shadow-lg w-3/4 md:w-1/2">
          <h2 className="text-xl font-bold mb-4 text-black">{selectedProduct?.nama}</h2>
          <p className="text-black">
            <strong>Harga:</strong> Rp. {selectedProduct?.harga.toFixed(2)}
          </p>
          <p className="text-black">
            <strong>Deskripsi:</strong> {selectedProduct?.deskripsi || "Tidak ada deskripsi tersedia."}
          </p>
          <button
            onClick={closePopup}
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Tutup
          </button>
        </div>
      </div>
      )}
    </div>
  );
}
