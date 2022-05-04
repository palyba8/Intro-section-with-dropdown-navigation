$('.menu-toggle').click(function () {
    $('.nav-menu').toggleClass('nav-menu-open')
    $('.bg-shadow').toggleClass('bg-shadow-open')
    $(this).toggleClass('menu-toggle-open')
})
$('.dropdown-menu').click(function () {
    $(this.children[2]).toggleClass('menu-sub-open')
    $(this.children[0]).toggleClass('arrow-up')
})