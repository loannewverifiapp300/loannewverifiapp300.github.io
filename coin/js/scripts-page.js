counted = 0;
counted1 = 0;

$(window).on('load', function () {
    var $preloader = $('#page-preloader'),
        $spinner = $preloader.find('.spinner');
    $spinner.fadeOut();

    $preloader.delay(150).fadeOut(300);
});
$(window).on('load resize', function () {
    bgPos($('#wrapper').width());
});
$(window).scroll(function () {
    var a = $(window).scrollTop();
    op(a);
});


$(function () {


    $(document).on('change', 'label.checkbox-field ', function (event) {
        $(this).toggleClass('checked');
    });


    $(document).on('click focus', 'table.table-form  input, table.table-form textarea', function () {
        var $this = $(this);
        $('table.table-form').find('i').removeClass('active');
        $this.parent().children('i').addClass('active');
    });


    $.getJSON("https://api.cryptonator.com/api/full/btc-usd",
        function (data) {

            var arr = ['Bitstamp', 'BTC-E', 'BitFinex', 'Bittrex'];
            $.each(data.ticker.markets, function (index, val) {
                if (jQuery.inArray(val.market, arr) !== -1) {
                    $('.table-api').append('<tr><th>' + val.market + '</th><td>' + Math.round(val.price * 100) / 100 + '<small>USD</small></td></tr>');
                }
            });
        }
    );


    ShowIcons1();

    $('.line-animated__header').addClass('process');

    $(document).on('click', '.block-lang > a', function (event) {
        $(this).parent().find('ul').slideToggle(400);
        event.preventDefault();
        $(this).find('i').toggleClass('opened');
    });


    $(".icon-col").each(function (index, el) {
        var id = index + 1;
        var icon = Snap.select("#icon-" + id);
        var icon_img = icon.select(".icon-img");
        var leng = icon_img.getTotalLength();
        icon_img.attr({
            "fill-opacity": "0",
            "stroke-width": '1',
            "stroke-dasharray": leng + " " + leng,
            "stroke-dashoffset": leng
        });


    });


    $('#selectBox1').selectator({
        prefix: 'selectator_',
        height: 'auto',
        useDimmer: true,
        useSearch: true,

        keepOpen: false,

        showAllOptionsOnFocus: false,
        selectFirstOptionOnSearch: true,
        searchCallback: function (value) {
        },

        labels: {
            search: ''
        }
    });


    $(document).on('click', '.block-operations__navbar > a:not(.active)', function (event) {
        $('.block-operations__navbar > a').removeClass('active');
        $(this).addClass('active');
        var id = $(this).attr('rel');
        if (id == 1) {
            $('.block-operations__content > div.block-operations__content__tabs-1').css({'top': '0%'});
            $('.block-operations__content > div.block-operations__content__tabs-2').css({'top': '100%'});

        }
        else {
            $('.block-operations__content > div.block-operations__content__tabs-1').css({'top': '-100%'});
            $('.block-operations__content > div.block-operations__content__tabs-2').css({'top': '0%'});


        }


        event.preventDefault();

    });

    $('.to-top').click(function () {
        $("html, body").animate({scrollTop: 0}, 600);
        return false;
    });

});


function bgPos(width) {
    if (width < 1800) {
        var left = (1800 - width) / 2;
        $('.line-animated > div ').css({'background-position': '-' + left + 'px center'});
        $('.line-animated__rules > div ').css({'background-position': '-' + left + 'px center'});
        $('.line-animated__header > div ').css({'background-position': '-' + left + 'px center'});
    }
    else {
        $('.line-animated > div ').css({'background-position': '0 center'});
        $('.line-animated__rules > div ').css({'background-position': '0 center'});
        $('.line-animated__header > div ').css({'background-position': '0 center'});
    }
}


function Count() {

    if (!counted) {
        console.log(counted);
        $('.count').each(function () {
            $(this).prop('Counter', 0).animate({
                Counter: $(this).text()
            }, {
                duration: 1000,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });


        counted = 1;
    }
}

function op(a) {
    if (a < 1500) {

        var max = 1300;
        var min = 0;
        var op = 1 - 1 * (a / max);
        $('.header__bg').css({'opacity': op});

    }

}


function ShowIcons1() {
    setTimeout(function () {
        $(".icon-col").each(function (index, el) {
            var id = $(el).attr('id');
            var current_icon = Snap.select("#" + id);
            current_icon.select(".icon-img").animate({
                "fill-opacity": "0.3",
                'stroke-dashoffset': '0px'

            }, 3000);


        });

    }, 1000);
}    


