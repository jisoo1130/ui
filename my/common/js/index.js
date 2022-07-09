
$(document).ready(function () {

    let $content = $('section.content');
    let windowHeight = $(window).height();

    // 각 콘텐츠 크기를 윈도우 높이에 맞춤
    $content.find('article').height(windowHeight);
});

// var flakeCnt; var delta_x = new Array(), delta_y = new Array(); var move_x = new Array(), move_y = new Array(); var resolution_x, resolution_y; $(function () { resolution_x = document.documentElement.clientWidth, resolution_y = document.documentElement.clientHeight; var position_x, position_y, i = 0; flakeCnt = document.getElementById('petalCanvas').getElementsByTagName('span').length; $("#petalCanvas span").each(function () { position_x = Math.random() * resolution_x; position_y = -30 - (Math.random() * 100); $(this).css({ "left": position_x + "px", "top": position_y + "px" }); $(this).attr("id", "drop" + i); move_x[i] = position_x; move_y[i] = position_y; i++; }); petalSet(); }); function petalSet() { var hei, speed; if (resolution_y < 600) { hei = 600; } else { hei = resolution_y; } var max_angle = hei / 2; for (var i = 0; i < flakeCnt; i++) { speed = Math.random(); delta_x[i] = (speed * max_angle) / 1200 + i / 100; delta_y[i] = (speed * 0.4) + 0.3; } petalDrop(); } function petalDrop() { for (var i = 0; i < flakeCnt; i++) { move_x[i] -= delta_x[i]; move_y[i] += delta_y[i]; if (move_x[i] < 0) move_x[i] = resolution_x - 30; if (move_y[i] > resolution_y - 10) move_y[i] = -20; $("#drop" + i).css({ "left": move_x[i] + "px", "top": move_y[i] + "px" }); } setTimeout("petalDrop()", 10); }
