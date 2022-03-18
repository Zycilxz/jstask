$(document).ready(function(){
    $(".jhb").click(function(){
        $(location).attr(
            "href","玩家配比.html"
        );
        let game = $(".jhb").html();
        $(".game span").html(game);
        sessionStorage.setItem("lastname", game);
    });
    $(".ccb").click(function(){
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





























});
