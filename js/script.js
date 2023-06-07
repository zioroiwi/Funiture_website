let closer = document.querySelector('#closer');

// closer.onclick = () => {
// // add an event listener for when the closer element is clicked
// closer.style.display = 'none'; // hide the closer element
// navbar.classList.remove('active'); // remove the "active" class from navbar
// cart.classList.remove('active'); // remove the "active" class from cart
// loginForm.classList.remove('active'); // remove the "active" class from loginForm
// };
$('#closer').click(function () {
    console.log('closer clicked');
    // add a click event listener to the closer element
    $('#closer').hide(); // hide the closer element
    $('.navbar, .shopping-cart, .login-form').removeClass('active');
});

let navbar = document.querySelector('.navbar');
// let navbar = $(".navbar");

document.querySelector('#menu-btn').onclick = () => { // closer.style.display = 'block';
    $('#closer').show();
    // navbar.classList.toggle('active');
    $(navbar).toggleClass("active");
};

let cart = $('.shopping-cart');

$('#cart-btn').click(function () {
    $('#closer').show();
    $(cart).toggleClass('active');
});

let loginForm = $('.login-form');

$('#login-btn').click(function () {
    $('#closer').show();
    $(loginForm).toggleClass('active');
});
