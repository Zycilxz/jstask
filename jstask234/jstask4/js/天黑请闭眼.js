$(document).ready(function () {


    let wj = $(".wj")
    let fayan = $(".fayan>p")
    let span = $(".header>span")
    let tishi = $(".tishi")
    let ssa = sessionStorage.getItem("zsa").split(",")
    let pma = sessionStorage.getItem("pma").split(",")
   
   
    let zs = sessionStorage.getItem("zs")
    let pd = sessionStorage.getItem("pd")
    sws = sessionStorage.getItem("sw").split(",")
    twt = sessionStorage.getItem("tw").split(",")
    var a = 0
    var b = 0

    //新建一个数组 投票死亡平民
   

    $(".gb").click(function () {
        $(location).attr(
            "href", "../jstask2/首页.html"
        );
    })

    if (pd == 1) {
        span.text("杀手杀人")
        fayan.text("你想干掉谁")
        tishi.text("点击你要杀死的玩家")
        rs()
        indexa()
        $('.dao').click(function () {
            a = $(this).attr("index")
            alert("是否要杀死他？")
            qwe(a)
            
        })
    }else{
        if(pd == 4){
            span.text("投票")
            fayan.text("大家发言讨论")
            tishi.text("点击你要投死的玩家")
            tps()
            indexb()
            $('.hz').click(function () {
                b = $(this).attr("index")
                alert("是否要杀死他？")
                qweb(b)
            })
        }
    }
    function rs() {
        for (var i = 1; i <= zs; i++) {
            wj.append("<div><div class='pingmin'></div><div> " + i + " </div><div class='dao' ></div></div>")
            $(".wj>div").addClass("hz")
            sym(i)
        }
    }
    function tps() {
        for (var i = 1; i <= zs; i++) {
            wj.append("<div><div class='pingmin'>平民</div><div> " + i + " </div></div>")
            $(".wj>div").addClass("hz")
            tpsw(i)
        }
    }


    function sym(i) {
        for (var j = 0; j < ssa.length; j++) {
            if (ssa[j] == i) {
                $(".wj>div:last>div:eq(0)").text("杀手")
            }
        }
        for (var k = 0; k < pma.length; k++) {
            if (pma[k] == i) {
                $(".wj>div:last>div:eq(0)").text("平民")
            }
        }
        for(var l = 1 ; l <= sws.length; l++ ){
            if (sws[l] == i){
                $(".wj>div:last>div:eq(0)").css("background","#888")
                $(".wj>div:last>div:eq(2)").css("display","none")
            }
            if (twt[l] == i){
                $(".wj>div:last>div:eq(0)").css("background","#888")
                $(".wj>div:last>div:eq(2)").css("display","none")
            }
        }
    }

    function tpsw(i) {
        for(var l = 1 ; l <= sws.length; l++ ){
            if (sws[l] == i){
                $(".wj>div:last>div:eq(0)").css("background","#888")
            }
            if (twt[l] == i){
                $(".wj>div:last>div:eq(0)").css("background","#888")
            }
        }
    }


    function indexa() {
        for (var i = 0; i < zs; i++) {
            var j = i + 1
            document.querySelectorAll(".dao")[i].setAttribute("index", j)
        }
        
    }
    function indexb() {
        for (var i = 0; i < zs; i++) {
            var j = i + 1
            document.querySelectorAll(".hz")[i].setAttribute("index", j)
        }
        
    }
})


function qweb(b) {
    let y = 0
    let sws = sessionStorage.getItem("sw").split(",")
    for (var i = 1; i <= sws.length; i++) {
        if (sws[i] == b) {
            alert("他已经死了")
            y = 1
        }else{  
            for (var j = 1; j <= twt.length; j++) {
                if (twt[j] == b) {
                    alert("他已经死了")
                    y = 1
                }
            }
        } 
    }
    if (y != 1) {
        twt = sessionStorage.getItem("tw").split(",")
        twt[twt.length] = b
        pm = sessionStorage.getItem("pm")
        Number(pm)
        ss = sessionStorage.getItem("ss")
        Number(ss)
        zsa = sessionStorage.getItem("zsa").split(",")
        pma = sessionStorage.getItem("pma").split(",")
        tpsw = sessionStorage.getItem("tpsw").split(",")
        tpswpm = sessionStorage.getItem("tpswpm").split(",")
        tssx = sessionStorage.getItem("tssx").split(",")
        for(var i = 0 ; i <= ss; i++){
           if(zsa[i] == b){
            tpsw[tpsw.length] = b
            sessionStorage.setItem("tpsw", tpsw)
           }
        }
        for(var i = 0 ; i <= pm; i++){
            if(pma[i] == b){
             tpswpm[tpswpm.length] = b
             sessionStorage.setItem("tpswpm", tpswpm)
            }
         }
        sessionStorage.setItem("tw", twt)
        sessionStorage.setItem("pd", 1)
        tssx[tssx.length] = b
        sessionStorage.setItem("tssx", tssx)
    $(location).attr(
                "href", "../jstask4/法官台本.html"
            );
    }
}
function qwe(a) {
    let x = 0
    let ssa = sessionStorage.getItem("zsa").split(",")
    
    for (var i = 0; i < ssa.length; i++) {
        if (ssa[i] == a) {
            alert("团长别开枪，我是自己人！")
            x = 1
        }
    }
    if (x != 1) {
        sws = sessionStorage.getItem("sw").split(",")
        sws[sws.length] = a
        sessionStorage.setItem("sw", sws)
        sessionStorage.setItem("pd", 2)
    $(location).attr(
                "href", "../jstask4/法官台本.html"
            );
    }
}