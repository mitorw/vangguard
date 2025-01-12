"use server"
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Fungsi untuk menampilkan data produk
export async function getData() {
  const products = await prisma.tb_produk.findMany();
  return products;
}

// Fungsi untuk mengambil produk berdasarkan nama
export const getProductByNama = async (nama: string) => {
  return await prisma.tb_produk.findMany({
    where: { nama },
  });
};

// Fungsi untuk memperbarui data produk berdasarkan nama
export const updateProduct = async (
  old_nama: string, // Nama lama sebagai parameter
  nama: string,
  harga: number,
  deskripsi: string
) => {
  if (!old_nama) {
    throw new Error("Parameter old_nama tidak boleh kosong.");
  }

  // Cari produk berdasarkan nama lama untuk mendapatkan ID-nya
  const productToUpdate = await prisma.tb_produk.findUnique({
    where: { nama: old_nama },
  });

  if (!productToUpdate) {
    throw new Error("Produk tidak ditemukan dengan nama tersebut.");
  }

  // Perbarui produk menggunakan ID yang ditemukan
  return await prisma.tb_produk.update({
    where: { id: productToUpdate.id }, // Gunakan ID produk yang ditemukan
    data: {
      nama: nama,
      harga: harga,
      deskripsi: deskripsi,
    },
  });
};


// Endpoint untuk menangani permintaan produk via API
export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const products = await getData();
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch products' });
    }
  } else if (req.method === 'PUT') {
    const { old_nama, nama, harga, deskripsi } = req.body; // Tambahkan old_nama ke body
    try {
      if (!old_nama || !nama || !harga || !deskripsi) {
        return res.status(400).json({ error: 'Semua data harus disediakan' });
      }

      await updateProduct(old_nama, nama, harga, deskripsi);
      res.status(200).json({ message: 'Produk berhasil diperbarui' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to update product' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}

// Fungsi untuk menyimpan data produk baru
export async function setSaveData(nama: string, harga: number, deskripsi?: string) {
  try {
    // Pastikan harga adalah angka (integer) sebelum disimpan
    const hargaInt = Number.isNaN(harga) ? 0 : Math.floor(harga);

    // Simpan data produk ke database
    await prisma.tb_produk.create({
      data: {
        nama: nama,
        harga: hargaInt,  // Pastikan harga adalah integer
        deskripsi: deskripsi || null,  // Deskripsi opsional
      },
    });
  } catch (error) {
    console.error("Gagal menyimpan data produk:", error);
    throw new Error("Gagal menyimpan data produk. Silakan periksa log untuk detail lebih lanjut.");
  }
}

// Fungsi untuk menghapus produk berdasarkan ID
export async function deleteProduct(id: string) {
  try {
    await prisma.tb_produk.delete({
      where: { id },
    });
  } catch (error) {
    console.error("Gagal menghapus data produk:", error);
    throw new Error("Gagal menghapus data produk.");
  }
}

