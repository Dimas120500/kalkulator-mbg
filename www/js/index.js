const ISI_PER_IKAT = 5;

let data = [];
let totalBesar = 0;
let totalKecil = 0;

function tambahData() {
  const nama = document.getElementById("nama").value.trim();
  const besar = parseInt(document.getElementById("besar").value);
  const kecil = parseInt(document.getElementById("kecil").value);

  if (!nama || isNaN(besar) || isNaN(kecil)) {
    alert("Lengkapi semua input!");
    return;
  }

  const ib = Math.floor(besar / ISI_PER_IKAT);
  const ob = besar % ISI_PER_IKAT;
  const ik = Math.floor(kecil / ISI_PER_IKAT);
  const ok = kecil % ISI_PER_IKAT;

  data.push({ nama, besar, kecil, ib, ob, ik, ok });

  totalBesar += besar;
  totalKecil += kecil;

  render();
  document.getElementById("nama").value = "";
  document.getElementById("besar").value = "";
  document.getElementById("kecil").value = "";
}

function hapusData(index) {
  totalBesar -= data[index].besar;
  totalKecil -= data[index].kecil;
  data.splice(index, 1);
  render();
}

function render() {
  const list = document.getElementById("data-list");
  list.innerHTML = "";

  data.forEach((d, i) => {
    list.innerHTML += `
      <div class="card data-item">
        <div class="data-header">
          <strong>${d.nama}</strong>
          <button class="delete" onclick="hapusData(${i})">❌</button>
        </div>

        <p><b>Porsi Besar:</b> ${d.besar}</p>
        <p>• Ikat: ${d.ib}</p>
        <p>• Ompreng: ${d.ob}</p>

        <p><b>Porsi Kecil:</b> ${d.kecil}</p>
        <p>• Ikat: ${d.ik}</p>
        <p>• Ompreng: ${d.ok}</p>
      </div>
    `;
  });

  document.getElementById("totalBesar").innerText = totalBesar;
  document.getElementById("totalKecil").innerText = totalKecil;
}

function exportHTML() {
  const html = `
  <h2>Laporan MBG</h2>
  ${document.getElementById("data-list").innerHTML}
  <p><b>Total Porsi Besar:</b> ${totalBesar}</p>
  <p><b>Total Porsi Kecil:</b> ${totalKecil}</p>
  `;

  const blob = new Blob([html], { type: "text/html" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "laporan_mbg.html";
  a.click();
}