// Đây là nơi bạn có thể thêm các mã JavaScript tùy chỉnh
document.addEventListener('DOMContentLoaded', function() {
    console.log('Trang web đã được tải xong.');
});
// code thêm các hiệu ứng

document.addEventListener('DOMContentLoaded', () => {
    // Thay đổi màu nền của các phần aside khi di chuột qua
    const asides = document.querySelectorAll('.left-aside, .right-aside');
    asides.forEach(aside => {
        aside.addEventListener('mouseover', () => {
            aside.style.backgroundColor = '#e0e0e0';
        });
        aside.addEventListener('mouseout', () => {
            aside.style.backgroundColor = '';
        });
    });
});
// Thêm hiệu ứng cho các liên kết trong thanh menu
const menuItems = document.querySelectorAll('.menu-item');
menuItems.forEach(item => {
    item.addEventListener('click', function () {
        // Xóa lớp active từ tất cả các liên kết
        menuItems.forEach(link => link.classList.remove('active'));
        // Thêm lớp active vào liên kết hiện tại
        this.classList.add('active');
    });
});



