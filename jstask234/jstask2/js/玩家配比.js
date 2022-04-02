$(document).ready(function () {
  $("#myRange").on("mousemove", function () {
    let mr = $("#myRange").val()
    var a = parseInt(myRange.value);
    console.log(a)
    $("input[name=zs]").val(mr)
    $("input[name=zs]").prop("value", mr)
    open()
  })

  $("#myRange").on("mousemove", function () {
    hdt()
  })

  $("#myRange").on("touchmove", function () {
    hdt()
  })
  $("#myRange").on("touchmove", function () {
    let mr = $("#myRange").val()
    var a = parseInt(myRange.value);
    console.log(a)
    $("input[name=zs]").val(mr)
    $("input[name=zs]").prop("value", mr)
    open()
  })

  $("input[name=zs]").change(function () {
    open()
    hdt()
  })
   //滑动条覆盖率
   let hdt = function () {
    let range = $("#myRange").val()
    range = Number(range)
    var bfb = (range - 4) * 35
    $(".bg").css("width", "" + bfb + ".5px");
    // let zs = $("input[name=zs]").val()
    // range = $("#myRange").val(zs)
  }

  $(".footer").click(function () {
    let ssch = $("input[name=ssch]").val()
    let pmch = $("input[name=pmch]").val()
    let ss = $("input[name=ss]").val()
    let pm = $("input[name=pm]").val()
    let zs = $("input[name=zs]").val()
    sessionStorage.setItem("ssch", ssch);
    sessionStorage.setItem("pmch", pmch);
    sessionStorage.setItem("pm", pm);
    sessionStorage.setItem("zs", zs);
    sessionStorage.setItem("ss", ss);
    sessionStorage.setItem("i", 1);
    if (zs >= 4 && zs <= 18) {
      if (ssch != "" && pmch != "" && ssch != pmch) {
        $(location).attr(
          "href", "../jstask3/查看身份.html"
        );
      } else {
        alert("请输入正确的词汇")
        $("input[name=ssch]").val("")
        $("input[name=pmch]").val("")
        hdt()
      }
    } else {
      alert("请输入正确的人数")
      hdt()
    }
  })
  //判断是否符合人数限制
  let open = function () {
    let ss = $("input[name=ss]").val()
    let pm = $("input[name=pm]").val()
    let zs = $("input[name=zs]").val()
    if (zs >= 4 && zs <= 18) {
      let mr = $("#myRange").val(zs)
      $("#myRange").prop("value", zs)
      for (var i = 4; i <= zs; i++) {
        ss = Math.floor(pm / 3)
        pm = zs - ss
        $("input[name=ss]").val(ss)
        $("input[name=pm]").val(pm)
      }
    } else {
      if (zs < 4) {
        alert("才" + zs + "个人？ 太少了！再找几个吧")
        $("input[name=zs]").val(4)
        $("input[name=ss]").val(1)
        $("input[name=pm]").val(3)
        hdt()
      } else {
        alert(zs + "个人？ 太多了！你们打算群殴杀手吗？")
        $("input[name=zs]").val(4)
        $("input[name=ss]").val(1)
        $("input[name=pm]").val(3)
        hdt()
      }
    }
  }


});