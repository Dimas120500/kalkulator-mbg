function exportHTML() {
  let cards = "";
  const now = new Date();
  const waktu = now.toLocaleString("id-ID");

  let totalSemua = totalBesar + totalKecil;

  data.forEach(d => {
    cards += `
      <div class="card">
        <h3>${d.nama}</h3>

        <p><b>Porsi Besar:</b> ${d.besar}</p>
        <p>Ikat: ${d.ib} | Ompreng: ${d.ob}</p>

        <p><b>Porsi Kecil:</b> ${d.kecil}</p>
        <p>Ikat: ${d.ik} | Ompreng: ${d.ok}</p>
      </div>
    `;
  });

  const html = `
<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<title>Laporan MBG</title>
<style>
  body {
    font-family: Arial, sans-serif;
    background: #f4f6f8;
    padding: 20px;
  }
  h1 {
    text-align: center;
  }
  .time {
    text-align: center;
    color: #555;
    margin-bottom: 20px;
  }
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 16px;
  }
  .card {
    background: #fff;
    padding: 16px;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0,0,0,.1);
  }
  .total {
    margin-top: 20px;
    background: #eaf4ff;
    padding: 16px;
    border-radius: 10px;
  }
  footer {
    margin-top: 30px;
    font-size: 12px;
    color: #666;
    text-align: center;
  }
</style>
</head>
<body>

<h1>LAPORAN OMPRENG MBG</h1>
<div class="time">${waktu}</div>

<div class="grid">
  ${cards}
</div>

<div class="total">
  <h3>TOTAL KESELURUHAN</h3>
  <p>Porsi Besar: ${totalBesar}</p>
  <p>Porsi Kecil: ${totalKecil}</p>
  <p><b>Total Semua: ${totalSemua}</b></p>
</div>

<footer>
  Developed by dimsz
</footer>

</body>
</html>
`;

  const blob = new Blob([html], { type: "text/html" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "laporan_mbg.html";
  a.click();
}