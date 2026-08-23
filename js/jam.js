function updateDateTime() {
    const now = new Date();

    // Nama hari
    const hari = [
        "Minggu",
        "Senin",
        "Selasa",
        "Rabu",
        "Kamis",
        "Jumat",
        "Sabtu"
    ];

    // Nama bulan
    const bulan = [
        "Januari",
        "Februari",
        "Maret",
        "April",
        "Mei",
        "Juni",
        "Juli",
        "Agustus",
        "September",
        "Oktober",
        "November",
        "Desember"
    ];

    const namaHari = hari[now.getDay()];
    const tanggal = now.getDate();
    const namaBulan = bulan[now.getMonth()];
    const tahun = now.getFullYear();

    let jam = now.getHours();
    let menit = now.getMinutes();
    let detik = now.getSeconds();

    jam = String(jam).padStart(2, '0');
    menit = String(menit).padStart(2, '0');
    detik = String(detik).padStart(2, '0');

    document.getElementById("datetime").innerHTML =
        `${namaHari}, ${tanggal} ${namaBulan} ${tahun} | ${jam}:${menit}:${detik}`;
}

updateDateTime();
setInterval(updateDateTime, 1000);