$(document).ready(function(){
    $(".jhb").click(function(){
        sjjj()
        $(location).attr(
            "href","玩家配比.html"
        );
        let game = $(".jhb").html();
        $(".game span").html(game);
        sessionStorage.setItem("lastname", game);
    });
    $(".ccb").click(function(){
        sjjj()
        $(location).attr(
            "href","玩家配比.html"
        );
        let game = $(".ccb").html();
        $(".game span").html(game);
        sessionStorage.setItem("lastname", game);
    });
    $(".game span").html(sessionStorage.getItem("lastname"));
    $(function() {
        $(".sjxr").click(function() {
            $(".main").hide();
            $(".main1").show();
            $(".sjxr").hide();
            $(".sjxl").show();
        })
        $(".sjxl").click(function() {
            $(".main1").hide();
            $(".main").show();
            $(".sjxl").hide();
            $(".sjxr").show();
        })
    });
    function sjjj(){

    
        var myDate = new Date
        var year = myDate.getFullYear() //获取当前年
        var moom = myDate.getMonth() //获取当前月
        var date = myDate.getDate() //获取当前天
        var myDatetime = new Date().getTime()
        // var houre = myDate.getHours() //获取小时数
        // var minutes = myDate.getMinutes() //和获取分钟数
        // var seconds = myDate.getSeconds() //获取秒数
        var myDa = new Date().getTime()
        sessionStorage.setItem("sj", myDa)
    }



























});
