-- CreateTable
CREATE TABLE `tb_produk` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nama` VARCHAR(255) NOT NULL,
    `harga` DOUBLE NOT NULL,
    `deskripsi` TEXT NULL,
    `gambar` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
