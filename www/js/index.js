function exportHTML() {
  const html = `
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Laporan MBG</title>
<style>
body {
  font-family: Arial;
  padding: 20px;
}
.card {
  border: 1px solid #ccc;
  padding: 12px;
  margin-bottom: 10px;
  border-radius: 8px;
}
</style>
</head>
<body>

<h2>LAPORAN OMPRENG MBG</h2>
<p>${new Date().toLocaleString()}</p>

<div class="card">
  <b>Contoh Data</b><br>
  Porsi Besar: 20<br>
  Ikat: 4 | Ompreng: 0
</div>

</body>
</html>
`;

  const blob = new Blob([html], { type: "text/html" });
  const url = URL.createObjectURL(blob);
  window.open(url, "_blank");
}