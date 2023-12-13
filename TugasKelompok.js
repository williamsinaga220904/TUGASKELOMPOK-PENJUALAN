//Nama Kelompok:
//1.William Charlie Septian Sinaga
//2.Adi Setiawan Sitorus
//3.Dodi Zepanya Manurung
//4.Gustav Padang

class Item {
  constructor(nama, harga) {
    this.nama = nama;
    this.harga = harga;
  }
}

class KeranjangBelanja {
  constructor() {
    this.items = [];
  }

  tambahItem(item) {
    this.items.push(item);
  }

  hapusItem(namaItem) {
    this.items = this.items.filter((item) => item.nama !== namaItem);
  }

  totalHarga() {
    return this.items.reduce((total, item) => total + item.harga, 0);
  }

  lihatKeranjang() {
    if (this.items.length === 0) {
      console.log("Keranjang Belanja kosong.");
    } else {
      console.log("Keranjang Belanja:");
      this.items.forEach((item) => {
        console.log(`- ${item.nama}: Rp ${item.harga}`);
      });
      console.log(`Total Harga: Rp ${this.totalHarga()}`);
    }
  }
}

class Pembayaran {
  constructor(total) {
    this.total = total;
  }

  bayar(jumlahBayar) {
    if (jumlahBayar >= this.total) {
      const kembalian = jumlahBayar - this.total;
      console.log(`Pembayaran berhasil. Kembalian: Rp ${kembalian}`);
      return true;
    } else {
      console.log("Pembayaran gagal. Jumlah bayar kurang.");
      return false;
    }
  }
}

class Pelanggan {
  constructor(nama, email, alamat) {
    this.nama = nama;
    this.email = email;
    this.alamat = alamat;
  }

  tampilkanInfoPelanggan() {
    console.log(`Nama Pelanggan: ${this.nama}`);
    console.log(`Email: ${this.email}`);
    console.log(`Alamat: ${this.alamat}`);
  }
}

class TransaksiPenjualan {
  constructor(
    nomorTransaksi,
    tanggalTransaksi,
    keranjang,
    totalBayar,
    pelanggan
  ) {
    this.nomorTransaksi = nomorTransaksi;
    this.tanggalTransaksi = tanggalTransaksi;
    this.keranjang = keranjang;
    this.totalBayar = totalBayar;
    this.pelanggan = pelanggan;
  }

  tampilkanTransaksi() {
    console.log(`Nomor Transaksi: ${this.nomorTransaksi}`);
    console.log(`Tanggal Transaksi: ${this.tanggalTransaksi}`);
    console.log("Detail Keranjang Belanja:");
    this.keranjang.lihatKeranjang();
    console.log(`Total Pembayaran: Rp ${this.totalBayar}`);
  }

  lakukanPembayaran(jumlahBayar) {
    const pembayaran = new Pembayaran(this.totalBayar);
    pembayaran.bayar(jumlahBayar);
  }
}

const keranjang = new KeranjangBelanja();

const item1 = new Item("Baju", 150000);
const item2 = new Item("Celana", 200000);

keranjang.tambahItem(item1);
keranjang.tambahItem(item2);

const totalBelanja = keranjang.totalHarga();

const pelanggan = new Pelanggan(
  "Satria Bima",
  "SatriaBimaX2.com",
  "Jalan Satria No. 24"
);

const transaksi = new TransaksiPenjualan(
  11234,
  "2023-12-13",
  keranjang,
  totalBelanja,
  pelanggan
);

transaksi.tampilkanTransaksi();
transaksi.lakukanPembayaran(400000);
pelanggan.tampilkanInfoPelanggan();
