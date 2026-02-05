const ISI_PER_IKAT = 5;
let totalBesar = 0;
let totalKecil = 0;

function tambahData() {
  const nama = document.getElementById("nama").value.trim();
  const besar = parseInt(document.getElementById("besar").value);
  const kecil = parseInt(document.getElementById("kecil").value);

  if (!nama || isNaN(besar) || isNaN(kecil)) {
    alert("Data belum lengkap");
    return;
  }

  const ib = Math.floor(besar / ISI_PER_IKAT);
  const ob = besar % ISI_PER_IKAT;
  const ik = Math.floor(kecil / ISI_PER_IKAT);
  const ok = kecil % ISI_PER_IKAT;

  totalBesar += besar;
  totalKecil += kecil;

  document.getElementById("totalBesar").innerText = totalBesar;
  document.getElementById("totalKecil").innerText = totalKecil;

  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${nama}</td>
    <td>${besar}</td>
    <td>${kecil}</td>
    <td>${ib}</td>
    <td>${ob}</td>
    <td>${ik}</td>
    <td>${ok}</td>
    <td><button onclick="hapus(this)">❌</button></td>
  `;

  document.querySelector("#tabel tbody").appendChild(row);

  document.getElementById("nama").value = "";
  document.getElementById("besar").value = "";
  document.getElementById("kecil").value = "";
}

function hapus(btn) {
  const row = btn.parentElement.parentElement;
  totalBesar -= parseInt(row.children[1].innerText);
  totalKecil -= parseInt(row.children[2].innerText);

  document.getElementById("totalBesar").innerText = totalBesar;
  document.getElementById("totalKecil").innerText = totalKecil;

  row.remove();
}

function exportHTML() {
  const html = `
<!DOCTYPE html>
<html>
<head><title>Laporan MBG</title></head>
<body>
<h2>Laporan MBG</h2>
${document.getElementById("tabel").outerHTML}
<p>Total Besar: ${totalBesar}</p>
<p>Total Kecil: ${totalKecil}</p>
</body>
</html>
`;
  const blob = new Blob([html], { type: "text/html" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "laporan_mbg.html";
  a.click();
}