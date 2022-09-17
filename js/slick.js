$(document).ready(function () {
    $(".slider").slick({
        arrows: false,
        infinite: true,
        speed: 300,
        slidesToShow: 2.5,
        slidesToScroll: .5,
        accessibility: false,
        initialSlide: 0.5,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    accessibility: false,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    accessibility: false,
                    infinite: true,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    accessibility: false,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
        ],
    });
    $(".next").click(function () {
        $(".slider").slick("slickNext");
    });
    $(".prev").click(function () {
        $(".slider").slick("slickPrev");
    });
    setInterval(function () {
        $(".slider").slick("slickNext");
    }, 5000);
    // ------------------------------------------------------------------------------------------------------

    $(".slider_2").slick({
        arrows: false,
        infinite: true,
        speed: 300,
        accessibility: false,
        initialSlide: 1,
        fade: true,
        cssEase: 'linear',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    accessibility: false,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    accessibility: false,
                    infinite: true,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    accessibility: false,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
        ],
    });
    $(".next_2").click(function () {
        $(".slider_2").slick("slickNext");
    });
    $(".prev_2").click(function () {
        $(".slider_2").slick("slickPrev");
    });
    setInterval(function () {
        $(".slider_2").slick("slickNext");
    }, 5000);
});
