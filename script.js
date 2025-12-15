function login() {
  if (username.value === "admin" && password.value === "1234") {
    loginBox.classList.add("hidden");
    dashboard.classList.remove("hidden");
  } else {
    error.innerText = "Username atau password salah";
  }
}

function logout() {
  dashboard.classList.add("hidden");
  loginBox.classList.remove("hidden");
}

// SEARCH PRODUK
function searchProduct() {
  let keyword = searchInput.value.toLowerCase();
  document.querySelectorAll(".card").forEach(card => {
    card.style.display = card.innerText.toLowerCase().includes(keyword)
      ? "block"
      : "none";
  });
}

// DETAIL PRODUK
function showDetail(id) {
  const products = {
    1:["E-Book Digital Marketing","Panduan strategi pemasaran online untuk pemula.","Rp50.000"],
    2:["Template Konten Instagram","Template desain promosi siap pakai.","Rp30.000"],
    3:["Kelas Online Marketing","Belajar digital marketing dari dasar.","Rp150.000"],
    4:["Template Feed UMKM","Feed Instagram khusus UMKM.","Rp25.000"],
    5:["Template Story Instagram","Story promosi siap upload.","Rp20.000"],
    6:["E-Book Bisnis Pemula","Panduan memulai bisnis dari nol.","Rp45.000"],
    7:["Paket Iklan Facebook","Iklan Facebook untuk UMKM.","Rp100.000"],
    8:["Paket Iklan Instagram","Promosi Instagram Ads.","Rp100.000"],
    9:["Template Landing Page","Landing page produk.","Rp40.000"],
    10:["Template Copywriting","Kalimat promosi menarik.","Rp35.000"],
    11:["Jasa Manajemen Sosmed","Kelola akun bisnis.","Rp200.000"],
    12:["Desain Logo Bisnis","Logo profesional.","Rp150.000"],
    13:["Template Proposal Bisnis","Proposal usaha siap pakai.","Rp30.000"],
    14:["E-Book Branding","Strategi membangun brand.","Rp55.000"],
    15:["Kelas Ads Pemula","Belajar iklan online.","Rp120.000"],
    16:["Template Kalender Konten","Jadwal konten bulanan.","Rp25.000"],
    17:["Template Analisis Pasar","Analisis target market.","Rp40.000"],
    18:["Paket Konsultasi Digital","Konsultasi bisnis online.","Rp250.000"]
  };

  detailTitle.innerText = products[id][0];
  detailDesc.innerText = products[id][1];
  detailPrice.innerText = "Harga: " + products[id][2];
  detailBox.classList.remove("hidden");
}

function closeDetail() {
  detailBox.classList.add("hidden");
}
