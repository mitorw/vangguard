"use server"
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Fungsi untuk menampilkan data produk
export async function getData() {
  const products = await prisma.tb_produk.findMany();
  return products;
}

// Fungsi untuk memperbarui data produk berdasarkan nama
export async function updateProduct(nama: string, harga: number, deskripsi?: string) {
  try {
    const hargaInt = Number.isNaN(harga) ? 0 : Math.floor(harga);

    // Perbarui data produk berdasarkan nama
    await prisma.tb_produk.updateMany({
      where: { nama: nama },
      data: {
        harga: hargaInt,  // Pastikan harga adalah integer
        deskripsi: deskripsi || null,  // Deskripsi opsional
      },
    });
  } catch (error) {
    console.error("Gagal memperbarui data produk:", error);
    throw new Error("Gagal memperbarui data produk. Silakan periksa log untuk detail lebih lanjut.");
  }
}

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
    const { nama, harga, deskripsi } = req.body;
    try {
      if (!nama || !harga || !deskripsi) {
        return res.status(400).json({ error: 'Nama dan harga harus disediakan' });
      }
      
      
      await updateProduct(nama, harga, deskripsi);
      res.status(200).json({ message: 'Produk berhasil diperbarui' });
    } catch (error) {
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

