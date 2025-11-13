// Tính giá
document.getElementById('days').addEventListener('change', function() {
  const days = parseInt(this.value);
  const pricePerDay = 40 / 30; // Giá/30 ngày
  const totalUSD = pricePerDay * days;
  document.getElementById('totalUSD').textContent = `Tổng: ${totalUSD.toFixed(0)} USD`;
  const vndRate = 25000; // Tỷ giá cố định
  document.getElementById('totalVND').textContent = `Tổng: ${(totalUSD * vndRate).toLocaleString()} VND`;
});

// Xử lý thanh toán
document.getElementById('paymentMethod').addEventListener('change', function() {
  const method = this.value;
  const qrDiv = document.getElementById('qrSection');
  if (method === 'MoMo (VND)') {
    // Generate QR MoMo (dùng API MoMo hoặc qrcode lib)
    const qrData = `momo://pay?amount=${totalVND}&note=Aura EA`; // Dữ liệu QR
    qrDiv.innerHTML = ''; // Clear
    new QRCode(qrDiv, qrData); // Sử dụng thư viện QRCode
  } else {
    // Hiển thị USDT address tĩnh
    qrDiv.innerHTML = '<p>USDT TRC20: T9xLm... (copy button)</p>';
  }
});

// Copy address
function copyAddress() {
  navigator.clipboard.writeText('T9xLm...'); // Địa chỉ ví
  alert('Đã copy!');
}
