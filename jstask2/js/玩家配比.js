$(document).ready(function () {

  $("#myRange").on("mousemove", function () {
    let mr = $("#myRange").val()
    $("input[name=zs]").val(mr)
    $("input[name=zs]").prop("value", mr)
    open()
  })


  $("input[name=zs]").change(function () {
    open()
    hdt()
  })

  $("#myRange").on("mousemove", function () {
    hdt()
  })


  $(".footer").click(function () {
    let ss = $("input[name=ss]").val()
    let pm = $("input[name=pm]").val()
    let zs = $("input[name=zs]").val()
    sessionStorage.setItem("pm", pm);
    sessionStorage.setItem("zs", zs);
    sessionStorage.setItem("ss", ss);
    if (zs >= 4 && zs <= 18) {
    } else {
      alert("请输入正确的人数")
      hdt()
    }
  })

  let open = function () {
    let ss = $("input[name=ss]").val()
    let pm = $("input[name=pm]").val()
    let zs = $("input[name=zs]").val()
    if (zs >= 4 && zs <= 18) {
      let mr = $("#myRange").val(zs)
      $("#myRange").prop("value", zs)
      if (zs <= 7) {
        pm = zs - 1
        ss = 1
        $("input[name=ss]").val(ss)
        $("input[name=pm]").val(pm)
      } else {
        if (zs <= 12) {
          pm = zs - 2
          ss = 2
          $("input[name=ss]").val(ss)
          $("input[name=pm]").val(pm)
        } else {
          pm = zs - 3
          ss = 3
          $("input[name=ss]").val(ss)
          $("input[name=pm]").val(pm)
        }
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

  let hdt = function () {
    let zs = $("input[name=zs]").val()
    let range = $("#myRange").val()
    range = Number(range)
    switch (range) {
      case (4):
        $(".bg").css("width", "0");
        break
      case (5):
        $(".bg").css("width", "6.5%");
        break
      case (6):
        $(".bg").css("width", "12.5%");
        break
      case (7):
        $(".bg").css("width", "18.5%");
        break
      case (8):
        $(".bg").css("width", "24.5%");
        break
      case (9):
        $(".bg").css("width", "30.5%");
        break
      case (10):
        $(".bg").css("width", "36.5%");
        break
      case (11):
        $(".bg").css("width", "42.5%");
        break
      case (12):
        $(".bg").css("width", "48.5%");
        break
      case (13):
        $(".bg").css("width", "54.5%");
        break
      case (14):
        $(".bg").css("width", "60.5%");
        break
      case (15):
        $(".bg").css("width", "66.5%");
        break
      case (16):
        $(".bg").css("width", "72.5%");
        break
      case (17):
        $(".bg").css("width", "78.5%");
        break
      case (18):
        $(".bg").css("width", "84.5%");
        break
    }
    zs = $("input[name=zs]").val()
    range = $("#myRange").val(zs)
  }
































});