"use server"
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Fungsi untuk menampilkan data produk
export async function getData() {
  const products = await prisma.tb_produk.findMany();
  return products;
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
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
