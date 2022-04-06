$(document).ready(function () {
    let zs = sessionStorage.getItem("zs");
    zs = Number(zs)
    let pm = sessionStorage.getItem("pm");
    pm = Number(pm)
    let ss = sessionStorage.getItem("ss");
    ss = Number(ss)
    let ssch = sessionStorage.getItem("ssch");
    let pmch = sessionStorage.getItem("pmch");
    let bg = $(".container")
    let shuzi = $(".sz")
    let shenfen = $(".footer")
    let ch = $(".ch")
    sessionStorage.setItem("i", 2);
    let zsa = new Array(zs) //总人数 空数组
    let pma = new Array(pm) //平民数 空数组

    sessionStorage.setItem("sw","0")
    sessionStorage.setItem("tw","0")
    sessionStorage.setItem("pd","1")
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

    //循环出总人数 得到数组 zsa[1,2,3,4,5,6,7.....]
    for (var i = 0; i < zsa.length; i++) {
        zsa[i] = i + 1
    }

    
    for (var i = 0; i < pma.length; i++) {
        //得到平民数组  //随机一个数为zsa[]数组的序号 赋值给平民
        pma[i] = zsa[parseInt(Math.random() * zsa.length)]
        console.log("这是zsa数组的lenght"+zsa.length+"")
        //新建一个数组
        var newArr = []
        // 把上面 zsa[parseInt(Math.random() * zsa.length)] 随机到的数剔除 
        //然后得到新的数组newArr  新数组zsa.length比上次少1 因为被剔除
        for (var j = 0; j < zsa.length; j++) {
            if (zsa[j] != pma[i]) {
                newArr[newArr.length] = zsa[j];
            }
        }
        // 这是赋值新数组
        zsa = newArr
        console.log("这是zsa数组"+zsa+"")
    }

    $(".footer").click(function () {
        ch.html("<strong>您的身份是：</strong>杀手<p><strong>您的词汇是：</strong>" + ssch + "</p>");
        var j = sessionStorage.getItem("i")
        var f = ch.css("display");
        if (f === "none" || zs < j) {
            op(j)
        } else {
            open(j)
            j++
        }
        sessionStorage.setItem("i", j);
    })
    let op = function (j) {
        bg.css("background-image", "url(./img/sf.png)");
        ch.css("display", "block");
        shenfen.text("传递给" + j + "号");
        j = Number(j)
        if (zs < j) {
            shenfen.text("法官查看");
            shenfen.click(function () {
                $(location).attr(
                    "href", "法官日记.html "
                );
            })
        }
        for (var i = 0; i < pma.length; i++) {
            var s = shuzi.text();
            Number(s)
            while (pma[i] == s) {
                console.log(s);
                console.log(pma);
                ch.html("<strong>您的身份是：</strong>平民<p><strong>您的词汇是：</strong>" + pmch + " </p> ");
                break
            }
        }
    }

    let open = function (j) {
        bg.css("background-image", "url(./img/sp.png)");
        ch.css("display", "none");
        shuzi.text(j);
        shenfen.text("查看" + j + "号身份");
    }
    sessionStorage.setItem("zsa", zsa)
    sessionStorage.setItem("pma", pma)
    sessionStorage.setItem("tpsw","0")
    sessionStorage.setItem("tpswpm","0")
    sessionStorage.setItem("tssx","0")
    
})

