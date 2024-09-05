// 
document.addEventListener('DOMContentLoaded', function() {
    // Khởi tạo Isotope cho danh sách sản phẩm
    var $grid = new Isotope('.collection-list', {
      itemSelector: '.col-md-6',
      layoutMode: 'fitRows' 
    });

    // Xử lý sự kiện nhấn vào các nút lọc
    var filterButtons = document.querySelectorAll('.filter-button-group button');

    filterButtons.forEach(function(button) {
      button.addEventListener('click', function() {
        var filterValue = this.getAttribute('data-filter');
        resetFilterBtns();
        this.classList.add('active-filter-btn');
        $grid.arrange({ filter: filterValue });
      });
    });

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
        searchInput.focus(); 
    }
});

// Tự động hiển thị toast sau một khoảng thời gian nhất định
function showPromoToast() {
  const promoToast = new bootstrap.Toast(document.getElementById('promoToast'));
  promoToast.show();
}

setInterval(showPromoToast, 15000);

document.addEventListener('DOMContentLoaded', showPromoToast);

document.querySelector('.cart-toggle').addEventListener('click', function() {
  var cartDropdown = document.querySelector('.cart-dropdown');
  var favoritesDropdown = document.querySelector('.favorites-dropdown');
  var registerDropdown = document.querySelector('.register-dropdown');
  
  favoritesDropdown.style.display = 'none';
  registerDropdown.style.display = 'none';

  cartDropdown.style.display = cartDropdown.style.display === 'block' ? 'none' : 'block';
});

document.querySelector('.favorites-toggle').addEventListener('click', function() {
  var cartDropdown = document.querySelector('.cart-dropdown');
  var favoritesDropdown = document.querySelector('.favorites-dropdown');
  var registerDropdown = document.querySelector('.register-dropdown');
  
  cartDropdown.style.display = 'none';
  registerDropdown.style.display = 'none';

  favoritesDropdown.style.display = favoritesDropdown.style.display === 'block' ? 'none' : 'block';
});

document.querySelector('.register-toggle').addEventListener('click', function() {
  var cartDropdown = document.querySelector('.cart-dropdown');
  var favoritesDropdown = document.querySelector('.favorites-dropdown');
  var registerDropdown = document.querySelector('.register-dropdown');
  
  cartDropdown.style.display = 'none';
  favoritesDropdown.style.display = 'none';

  registerDropdown.style.display = registerDropdown.style.display === 'block' ? 'none' : 'block';
});

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

// Chuyển đổi giữa form đăng ký và đăng nhập
document.querySelector('#toggleForm').addEventListener('click', function(e) {
  e.preventDefault();
  const registerForm = document.getElementById('registerForm');
  const loginForm = document.getElementById('loginForm');
  const formTitle = document.getElementById('form-title');
  const toggleText = document.getElementById('toggleForm');

  if (registerForm.style.display === 'block') {
      registerForm.style.display = 'none';
      loginForm.style.display = 'block';
      formTitle.textContent = 'Đăng nhập';
      toggleText.textContent = 'Chưa có tài khoản? Đăng ký';
  } else {
      registerForm.style.display = 'block';
      loginForm.style.display = 'none';
      formTitle.textContent = 'Đăng ký';
      toggleText.textContent = 'Đã có tài khoản? Đăng nhập';
  }
});

// Xử lý ẩn/hiện mật khẩu trong form đăng ký
document.querySelector('#toggleRegisterPassword').addEventListener('click', function () {
  const registerPasswordField = document.getElementById('registerPassword');
  const type = registerPasswordField.getAttribute('type') === 'password' ? 'text' : 'password';
  registerPasswordField.setAttribute('type', type);

  // Đổi biểu tượng mắt
  this.classList.toggle('fa-eye');
  this.classList.toggle('fa-eye-slash');
});

// Xử lý ẩn/hiện mật khẩu trong form đăng nhập
document.querySelector('#toggleLoginPassword').addEventListener('click', function () {
  const loginPasswordField = document.getElementById('loginPassword');
  const type = loginPasswordField.getAttribute('type') === 'password' ? 'text' : 'password';
  loginPasswordField.setAttribute('type', type);

  // Đổi biểu tượng mắt
  this.classList.toggle('fa-eye');
  this.classList.toggle('fa-eye-slash');
});
