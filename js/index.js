let trigger = document.querySelectorAll(".trigger");

trigger.forEach(function (video) {
    video.addEventListener("click", function (e) {
        let id = e.target.getAttribute("video-id");

        document.querySelector('iframe').setAttribute("src", 'https://www.youtube.com/watch?v=onbC6N-QGPc' + id);

    });
});
$('.mobile-menu').on('click', function (e) {
e.preventDefault();
$('.menu-btn').toggleClass('menu-active')
$('.menu-wrap').toggleClass('menu-active')
})
