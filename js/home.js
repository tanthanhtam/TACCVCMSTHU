/* =====================================================
   HOME.JS
   GIAI ĐOẠN: OFFLINE
   - Không yêu cầu đăng nhập
   - Cho phép truy cập tự do
   ===================================================== */

/*
  CỜ CHẾ ĐỘ
  Sau này đưa online:
  const OFFLINE_MODE = false;
*/
const OFFLINE_MODE = true;

/* ===== GUARD TRUY CẬP ===== */
function guard(event) {
  if (OFFLINE_MODE) {
    // OFFLINE: cho phép truy cập tất cả
    return true;
  }

  // ===== ONLINE (SẼ DÙNG SAU) =====
  // if (localStorage.getItem("logged") !== "1") {
  //   event.preventDefault();
  //   openAuth();
  // }
}

/* ===== POPUP ĐĂNG NHẬP (TẠM) ===== */
function openAuth() {
  if (OFFLINE_MODE) {
    alert("Hiện tại website đang ở chế độ OFFLINE.\nChức năng đăng nhập sẽ được bật khi đưa lên online.");
    return;
  }

  // ===== ONLINE (SẼ VIẾT SAU) =====
  // showLoginPopup();
}

/* ===== LOG ===== */
console.log("Home loaded | OFFLINE MODE =", OFFLINE_MODE);
