$(document).ready(function () {
  $("#input-outside").on("input", function () {
    $("body").css("background-color", $(this).val());
    $(".container .main1 p").css("color", $(this).val());
    $(".container .main1 button").css("background-color", $(this).val());
  });
  $("#input-inside").on("input", function () {
    $(".container").css("background-color", $(this).val());
  });
});

var buton = $("button");
$("button").click(function () {
  Swal.fire({
    title: "Rankınızı Seçmek İçin Yan Taraftaki Bölgeden Seçebilirsiniz",
    showClass: {
      popup: "animate__animated animate__fadeInDown",
    },
    hideClass: {
      popup: "animate__animated animate__fadeOutUp",
    },
  });
});

var modal = $(".modalBox");
$(".login").click(function () {
  modal.show();
});

$(".close").click(function () {
  modal.hide();
});

$("#grandmaster").click(function () {
  Swal.fire({
    title: "Tebrikler Pupgde En Üst Seviyesiniz Sizden İyisi Mezarda",

    icon: "warning",
  });
});

$("#master").click(function () {
  Swal.fire({
    title: "Tebrikler Pupgde En üst seviyeye son adımınız kaldı Al sana bombe",

    icon: "warning",
  });
});

$("#elite").click(function () {
  Swal.fire({
    title:
      " Tebrikler Pupgde en üst seviyeye son adımlarınız kaldı winner winner chicken dinner",

    icon: "warning",
  });
});

$("#diamond").click(function () {
  Swal.fire({
    title: " Elmas olsanızda neolur? Botları vurmadıkça...",

    icon: "warning",
  });
});

$("#platinum").click(function () {
  Swal.fire({
    title: " Platin olsanızda farketmez Bizim takım affetmez...",

    icon: "warning",
  });
});

$("#gold").click(function () {
  Swal.fire({
    title: " Altın Olmuşsunuz amma Hepimizi Vuruyosunuz",

    icon: "warning",
  });
});

$("#silver").click(function () {
  Swal.fire({
    title: "Yeni Yeni Isınıyosunuz İleride Mastermı Olacaksınız?",

    icon: "warning",
  });
});

$("#bronze").click(function () {
  Swal.fire({
    title: "Bronze olmayın Çok vurulursunuz...",

    icon: "warning",
  });
});
