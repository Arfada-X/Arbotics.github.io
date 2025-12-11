const texts = {
  id: {
    navBeranda: "Beranda", navTentang:"Tentang Kami", navLayanan:"Layanan",
    navPortofolio:"Portofolio", navProyek:"Proyek", navDeveloper:"Developer", navKontak:"Kontak",
    titleBeranda:"Kembangkan Imajinasi Masa Depan", descBeranda:"Membawa teknologi cerdas ke level berikutnya.", btnMulai:"Mulai Proyek",
    titlePortofolio:"Portofolio", pf1:"Robot Autonomous", pf1desc:"Implementasi artificial intelligence ringan.",
    pf2:"Dashboard IoT", pf2desc:"Pemantauan pH, TDS, dan suhu realtime.",
    pf3:"Lengan Robotik", pf3desc:"Arm presisi 4 DOF untuk edukasi.",
    pf4:"Proyek Elektronika", pf4desc:"Menerima pembuatan semua jenis alat elektronik & robotika.",
    titleTentang:"Tentang Kami", descTentang:"Arbotics berfokus pada pengembangan robotika modern dengan kualitas tinggi, efisiensi, dan performa terbaik.",
    titleLayanan:"Layanan", srv1:"Perakitan Robot", srv1desc:"Pembuatan robot custom sesuai kebutuhan.",
    srv2:"IoT & Automasi", srv2desc:"Sistem otomatisasi dan dashboard realtime.",
    srv3:"Elektronika", srv3desc:"Pembuatan project elektronika: modul sensor, aktuator, dan perangkat elektronik custom.",
    titleProyek:"Pemesanan Proyek", labelJenis:"Jenis Proyek yang Ingin Dibuat", labelDeskripsi:"Deskripsi Proyek",
    labelKomponen:"Daftar Komponen yang Dibutuhkan", labelLokasi:"Lokasi Pemesan", labelKontak:"Kontak Pemesan", btnKirim:"Kirim Pemesanan",
    titleDeveloper:"Developer / Pengembang & Jasa", descDeveloper:"Tim kami yang mengembangkan website Arbotics beserta jasa yang mereka tawarkan.",
    dev1:"Arya Irfa", dev1role:"Electrical Engineering", dev2:"Reva Apria", dev2role:"Customer Service",
    titleKontak:"Kontak"
  },
  en: {
    navBeranda: "Home", navTentang:"About Us", navLayanan:"Services",
    navPortofolio:"Portfolio", navProyek:"Project", navDeveloper:"Developer", navKontak:"Contact",
    titleBeranda:"Develop Your Future Imagination", descBeranda:"Bringing smart technology to the next level.", btnMulai:"Start Project",
    titlePortofolio:"Portfolio", pf1:"Autonomous Robot", pf1desc:"Lightweight artificial intelligence implementation.",
    pf2:"IoT Dashboard", pf2desc:"Real-time monitoring of pH, TDS, and temperature.",
    pf3:"Robotic Arm", pf3desc:"4 DOF precision arm for education.",
    pf4:"Electronics Project", pf4desc:"Accepts all types of custom electronic & robotics projects.",
    titleTentang:"About Us", descTentang:"Arbotics focuses on modern robotics development with high quality, efficiency, and top performance.",
    titleLayanan:"Services", srv1:"Robot Assembly", srv1desc:"Custom robot creation according to needs.",
    srv2:"IoT & Automation", srv2desc:"Automation systems and real-time dashboards.",
    srv3:"Electronics", srv3desc:"Creation of electronics projects: sensor modules, actuators, and custom electronic devices.",
    titleProyek:"Project Order", labelJenis:"Project Type", labelDeskripsi:"Project Description",
    labelKomponen:"Required Components", labelLokasi:"Client Location", labelKontak:"Client Contact", btnKirim:"Send Order",
    titleDeveloper:"Developer & Services", descDeveloper:"Our team developing Arbotics website and the services they offer.",
    dev1:"Arya Irfa", dev1role:"Electrical Engineering", dev2:"Reva Apria", dev2role:"Customer Service",
    titleKontak:"Contact"
  }
};

function setLanguage(lang){
  for(const id in texts[lang]){
    const el=document.getElementById(id);
    if(el) el.textContent=texts[lang][id];
  }
}
