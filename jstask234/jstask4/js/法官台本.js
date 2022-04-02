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
    $("#b1").click(function () {
        $(location).attr(
            "href", "../jstask2/首页.html"

        );
    })
    $(".main").hide()
    $("#b2").click(function () {
        $(".main").toggle()
    })
    let sssr = $(".sssr")
    let wlfy = $(".wlfy")
    let wjfy = $(".wjfy")
    let qmtp = $(".qmtp")
    let ul = $("ul")
    let pd = sessionStorage.getItem("pd")
    if (pd == 2) {
        sssr.css("background", "#aaa")
    }
    sssr.click(function () {
        if (pd == 1) {
            zt()
            
            $(location).attr(
                "href", "../jstask4/天黑请闭眼.html"
            );
        } else {
            alert("请按顺序点击")
        }
    })
    wlfy.click(function () {
        if (pd == 2) {
            alert("亡灵请发言")
            zt()
            pd = 3
        } else {
            alert("请按顺序点击")
        }
    })
    wjfy.click(function () {
        if (pd == 3) {
            alert("玩家依次请发言")
            zt()
            pd = 4
        } else {
            alert("请按顺序点击")
        }
    })
    qmtp.click(function () {
        if (pd == 4) {
            sessionStorage.setItem("pd", 4)
            $(location).attr(
                "href", "../jstask4/天黑请闭眼.html"
            );
        } else {
            alert("请按顺序点击")
        }
    })
    function zt() {
        pd = Number(pd)
        switch (pd) {
            case 2:
                sssr.css("background", "#aaa")
                wlfy.css("background", "#aaa")
                break
            case 3:
                sssr.css("background", "#aaa")
                wlfy.css("background", "#aaa")
                wjfy.css("background", "#aaa")
                break
        }
    }
    twt = sessionStorage.getItem("tw").split(",")
    var leng = twt.length
    for (var i = 1; i <= leng; i++) {
        ul.append("<ol>第" + i + "天</ol>")
    }


    //投票死亡的平民
    let tpsw = sessionStorage.getItem("tpsw").split(",")
    let tpswpm = sessionStorage.getItem("tpswpm").split(",")

    //杀手杀死的平民
    let sws = sessionStorage.getItem("sw").split(",")

    //总的平民数
    let pm = sessionStorage.getItem("pm")

    //总的杀手数
    let ss = sessionStorage.getItem("ss")

    //杀死的平民数
    let m = sws.length - 1

    //投死的杀手
    let n = tpsw.length - 1

    //投死的平民
    let mn = tpswpm.length - 1
    ss = Number(ss)
    pm = Number(pm)
    console.log("杀手" + ss)
    console.log("平民" + pm)
    console.log("投票死杀手" + n)
    console.log("投票死平民" + mn)
    console.log("杀手杀平民" + m)
    console.log("剩余杀手" + (ss - n))
    console.log("剩余平民" + (pm - m - mn))

    if ((ss - n) >= (pm - m - mn)) {
        sessionStorage.setItem("sl", 1)
        $(location).attr(
            "href", "../jstask4/胜利.html"
        );
    } else {
        if (((ss - n) == 0)) {
            sessionStorage.setItem("sl", 2)

            $(location).attr(
                "href", "../jstask4/胜利.html"
            );
        }
    }
    tssx = sessionStorage.getItem("tssx").split(",")
    zsa = sessionStorage.getItem("zsa").split(",")
    for (var i = 1; i <= m; i++) {
        if (tssx[i] != undefined) {
            $(".main").append("<div class='nr'>第" + i + "天<p>晚上：" + sws[i] + "号被杀死，身份是平民</p><p>白天：" + tssx[i] + "号被投死，身份是平民 </p></div>")
        } else {
            $(".main").append("<div class='nr'>第" + i + "天 <p>晚上：" + sws[i] + "号被杀死，身份是平民</p><p>白天：没有人死亡 </p></div>")
        }
        for (var j = 0; j < ss; j++) {
            if (tssx[i] == zsa[j]) {
                if (tssx[i] != undefined) {
                    $(".nr:last").html("<div>第" + i + "天  <p>晚上：" + sws[i] + "号被杀死，身份是平民</p><p>白天：" + tssx[i] + "号被投死，身份是杀手 </p></div>")
                } else {
                    $(".nr:last").html("<div>第" + i + "天<p>晚上：" + sws[i] + "号被杀死，身份是平民</p></div>")
                }
            }
        }
    }



});