var ajax1 = $.ajax();
var ajax2 = $.ajax();

jQuery(function($) {
  $.when.apply($, [ajax1, ajax2]).done(function() {
    addLyric();

    btnRefreshLyric =
      "<center><button id='btn-refresh-lyric'>Refresh Lyrics</button></center>";

    $("#secondary-inner").before(btnRefreshLyric);

    $("#btn-refresh-lyric").click(function() {
      $("#lyric-list").remove();
      addLyric();
    });
  });
});

function addLyric() {
  var title = $(".title")
    .contents()
    .html();

  music = title
    .split("-")
    .join("(")
    .split(":")
    .join("(")
    .split(",")
    .join("(")
    .split(".")
    .join("(")
    .split("(")
    .join("[")
    .split("[")
    .join(" ft")
    .split(" ft");

  console.log(music);

  jQuery.getJSON(
    "https://api.vagalume.com.br/search.php" +
      "?art=" +
      music[0] +
      "&mus=" +
      music[1],
    +"&limit=1" + "&apikey={key}",
    function(data) {
      var lyrics = "";
      lyricLinesSplited = data.mus[0].text.split("\n");

      for (i = 0; i < lyricLinesSplited.length; i++) {
        lyrics += "<li>" + lyricLinesSplited[i] + "</li>";
      }

      lyricDiv =
        "<ul id='lyric-list' class='lyric-list style-scope ytd-video-secondary-info-renderer'" +
        lyrics +
        "</ul>";

      $("#secondary-inner").before(lyricDiv);

      $(".lyric-list").css("color", "#FFF");
      $(".lyric-list").css("border", "1px solid grey");
      $(".lyric-list").css("max-height", "450px");
      $(".lyric-list").css("overflow", "auto");
      $(".lyric-list").css("font-size", "16px");
      $(".lyric-list").css("padding", "12px");
      $(".lyric-list").css("margin", "6px");
    }
  );
}
