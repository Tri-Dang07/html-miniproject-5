// Đợi cho cấu trúc cây thư mục DOM của HTML tải lên hoàn chỉnh
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('mainRegistrationForm');

  // Lắng nghe sự kiện người dùng nhấn nút Submit gửi form
  form.addEventListener('submit', function(event) {
    // 1. Lấy ra giá trị của trường họ tên và ngành học để kiểm tra
    const nameInput = document.getElementById('hoTen').value.trim();
    const majorSelect = document.getElementById('nganhHoc').value;

    // 2. Chặn gửi dữ liệu nếu phát hiện người dùng chưa chọn ngành học cụ thể
    if (majorSelect === "") {
      event.preventDefault(); // Dừng luồng gửi form lên server
      alert("⚠️ Vui lòng lựa chọn một Chuyên ngành học cụ thể trước khi gửi hồ sơ!");
      return;
    }

    // 3. Nếu mọi điều kiện hợp lệ, hiển thị lời chúc mừng thành công
    alert(`🎉 Chúc mừng ${nameInput}! Bạn đã gửi hồ sơ đăng ký thành công.\nHệ thống đang kết nối dữ liệu.`);
  });
});
