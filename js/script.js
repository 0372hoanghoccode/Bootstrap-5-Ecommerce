// 
document.addEventListener('DOMContentLoaded', function() {
    // Khởi tạo Isotope cho danh sách sản phẩm
    var $grid = new Isotope('.collection-list', {
      itemSelector: '.col-md-6', // Chọn lớp của các mục
      layoutMode: 'fitRows' // Hoặc kiểu khác như 'masonry'
    });

    // Xử lý sự kiện nhấn vào các nút lọc
    var filterButtons = document.querySelectorAll('.filter-button-group button');

    filterButtons.forEach(function(button) {
      button.addEventListener('click', function() {
        var filterValue = this.getAttribute('data-filter');
        
        // Đặt lại trạng thái của tất cả các nút lọc
        resetFilterBtns();
        
        // Thêm lớp 'active-filter-btn' cho nút được nhấn
        this.classList.add('active-filter-btn');
        
        // Áp dụng bộ lọc
        $grid.arrange({ filter: filterValue });
      });
    });

    // Hàm đặt lại trạng thái của tất cả các nút lọc
    function resetFilterBtns() {
      filterButtons.forEach(function(btn) {
        btn.classList.remove('active-filter-btn');
      });
    }
  });

// xử lý sự kiện khi nhấn vào nút toggle search
  document.querySelector('.search-toggle').addEventListener('click', function() {
    var searchContainer = this.parentElement;
    var searchInput = searchContainer.querySelector('.search-input');
    
    // Toggle visibility
    if (searchInput.style.display === 'block') {
        searchInput.style.display = 'none';
    } else {
        searchInput.style.display = 'block';
        searchInput.focus(); // Focus vào ô nhập liệu khi hiện lên
    }
});

// Tự động hiển thị toast sau một khoảng thời gian nhất định
function showPromoToast() {
  const promoToast = new bootstrap.Toast(document.getElementById('promoToast'));
  promoToast.show();
}

// Hiển thị toast mỗi 30 giây
setInterval(showPromoToast, 15000);

// Hiển thị toast ngay khi trang vừa tải
document.addEventListener('DOMContentLoaded', showPromoToast);

// Toggle visibility of cart dropdown
document.querySelector('.cart-toggle').addEventListener('click', function() {
  var cartDropdown = document.querySelector('.cart-dropdown');
  var favoritesDropdown = document.querySelector('.favorites-dropdown');
  var registerDropdown = document.querySelector('.register-dropdown');
  
  // Hide other dropdowns
  favoritesDropdown.style.display = 'none';
  registerDropdown.style.display = 'none';

  // Toggle visibility of cart
  cartDropdown.style.display = cartDropdown.style.display === 'block' ? 'none' : 'block';
});

// Toggle visibility of favorites dropdown
document.querySelector('.favorites-toggle').addEventListener('click', function() {
  var cartDropdown = document.querySelector('.cart-dropdown');
  var favoritesDropdown = document.querySelector('.favorites-dropdown');
  var registerDropdown = document.querySelector('.register-dropdown');
  
  // Hide other dropdowns
  cartDropdown.style.display = 'none';
  registerDropdown.style.display = 'none';

  // Toggle visibility of favorites
  favoritesDropdown.style.display = favoritesDropdown.style.display === 'block' ? 'none' : 'block';
});

// Toggle visibility of register dropdown
document.querySelector('.register-toggle').addEventListener('click', function() {
  var cartDropdown = document.querySelector('.cart-dropdown');
  var favoritesDropdown = document.querySelector('.favorites-dropdown');
  var registerDropdown = document.querySelector('.register-dropdown');
  
  // Hide other dropdowns
  cartDropdown.style.display = 'none';
  favoritesDropdown.style.display = 'none';

  // Toggle visibility of register
  registerDropdown.style.display = registerDropdown.style.display === 'block' ? 'none' : 'block';
});

// Close dropdowns when clicking outside
document.addEventListener('click', function(e) {
  var cartDropdown = document.querySelector('.cart-dropdown');
  var favoritesDropdown = document.querySelector('.favorites-dropdown');
  var registerDropdown = document.querySelector('.register-dropdown');
  
  if (!cartDropdown.contains(e.target) && !favoritesDropdown.contains(e.target) && !registerDropdown.contains(e.target) && !document.querySelector('.cart-toggle').contains(e.target) && !document.querySelector('.favorites-toggle').contains(e.target) && !document.querySelector('.register-toggle').contains(e.target)) {
      cartDropdown.style.display = 'none';
      favoritesDropdown.style.display = 'none';
      registerDropdown.style.display = 'none';
  }
});
