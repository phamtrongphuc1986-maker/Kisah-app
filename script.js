let soLuot = 0;
function batThongBao() {
  soLuot = soLuot + 1;
  document.getElementById("thongbao").innerText = "Đã có " + soLuot + " lượt bấm nút này.";
}
let danhSach = [
  { ten: "Millionaire Took a Homeless Woman to His Ex-Fiancée's Wedding", ma: "sdLd1YBgG_w" },
  { ten: "He Ordered a Wife", ma: "uGfF4pZ_LwQ" },
  { ten: "Adik Ipar Makan Nasi Pakai Garam (Part 2)", ma: "9RKN8PeFMXU" }
];
function vePhim(ds) {
  let vungPhim = document.getElementById("danhSachPhim");
  vungPhim.innerHTML = "";
  for (let phim of ds) {
    vungPhim.innerHTML += `
      <div class="film">
        <img src="https://i.ytimg.com/vi/${phim.ma}/hqdefault.jpg" width="300">
        <h3>${phim.ten}</h3>
        <p><a href="https://youtu.be/${phim.ma}">Xem phim này</a></p>
      </div>`;
  }
}
function timPhim() {
  let tuKhoa = document.getElementById("oTim").value.toLowerCase();
  let ketQua = [];
  for (let phim of danhSach) {
    if (phim.ten.toLowerCase().includes(tuKhoa)) {
      ketQua.push(phim);
    }
  }
  vePhim(ketQua);
}
window.onload = timPhim;
