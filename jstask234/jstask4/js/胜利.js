$(document).ready(function () {
    let a = sessionStorage.getItem("sl")
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



    var myDate = new Date
            var year = myDate.getFullYear() //获取当前年
            var moom = myDate.getMonth() //获取当前月
            var date = myDate.getDate() //获取当前天
            var myDatetime = new Date().getTime()
            // var houre = myDate.getHours() //获取小时数
            // var minutes = myDate.getMinutes() //和获取分钟数
            // var seconds = myDate.getSeconds() //获取秒数
            var myDa = new Date().getTime()
            var ys = sessionStorage.getItem("sj")
            ys = Number(ys)
            yss = myDa - ys
            // hh = new Date(ys).getHours()
            var mmm = parseInt((yss / 1000) / 60)
            var sss = parseInt(yss / 1000) - mmm * 60

    if (a == 1) {
        $("h2").text("杀手胜利")
        $("h3").text("太棒了！在杀人游戏中只有20%的杀手才能获得游戏的胜利！")
        sssl()
    } else {
        $("h2").text("平民胜利")
        $("h3").text("你他娘的真是个废物")
        sssl()
    }
    function sssl() {
        $(".ji>div").text("游戏用时"+mmm+"分"+sss+"秒" )
        $("span").html("杀手" + (ss - n) + "人&nbsp; &nbsp;  平民" + (pm - m - mn) + "人")
    }

    $("#btnle").click(function () {
        $(location).attr(
            "href", "../jstask2/首页.html"
        );
    })
    tssx = sessionStorage.getItem("tssx").split(",")
    zsa =  sessionStorage.getItem("zsa").split(",")
    for(var i = 1 ; i <= m ; i++){
            if(tssx[i] != undefined ){
                console.log(2222)
                $(".main").append("<div class='nr'  >第"+i+"天 <p>晚上："+sws[i]+"号被杀死，身份是平民</p><p>白天："+tssx[i]+"号被投死，身份是平民 </p></div>")            
            }else{
                $(".main").append("<div class='nr'>第"+i+"天<p>晚上："+sws[i]+"号被杀死，身份是平民</p><p>白天：没有人死亡！ 因为游戏已经结束了 </p></div>")
            }
        
        for(var j = 0; j< ss ; j++){
                    if(tssx[i] == zsa[j]){
                        if(tssx[i] != undefined ){
                            console.log(2222)
                            $(".nr:last").html("<div>第"+i+"天<p>晚上："+sws[i]+"号被杀死，身份是平民</p><p>白天："+tssx[i]+"号被投死，身份是杀手 </p></div>")
                        }else{
                            $(".nr:last").html("<div>第"+i+"天<p>晚上："+sws[i]+"号被杀死，身份是平民</p></div>")
                        }
                    }
                }
    }
            


})