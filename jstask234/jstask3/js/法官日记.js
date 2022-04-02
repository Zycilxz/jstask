$(document).ready(function () {
    $(".fh").click(function () {
        $(location).attr(
            "href", "../jstask2/玩家配比.html"
        );
    })
    $(".gb").click(function () {
        $(location).attr(
            "href", "../jstask2/首页.html"

        );
    })
    $(".footer").click(function () {
        $(location).attr(
            "href", "../jstask4/法官台本.html"

        );
    })

    let hz = $('.hz')
    let zsa = sessionStorage.getItem("zsa");
    let zs = sessionStorage.getItem("zs");
    let pma = sessionStorage.getItem("pma");
    zsa = sessionStorage.getItem("zsa").split(",")




    let crhzss = function (i) {
        hz.eq(i).css("display", "block")
        $(".hz").eq(i).find(".bh").text(i)
        $(".hz").eq(i).find(".zy").text("杀手")
    }
    let crhzpm = function (i) {
        hz.eq(i).css("display", "block")
        $(".hz").eq(i).find(".bh").text(i)
        $(".hz").eq(i).find(".zy").text("平民")
    }

    for (var i = 1; i <= zs; i++) {
        crhzpm(i)
        for (var j = 0; j < zsa.length; j++) {
            if ( zsa[j] == i) {
                crhzss(zsa[j])
            }
        }
    }

})