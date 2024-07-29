$(function () {
  $("#toggleButton").on("click", function () {
    if ($("#myParagraph").text().length === 0) {
      $("#myParagraph").text("This is a paragraph.");
      return;
    }
    $("#myParagraph").text("");
  });

  $("#colorButton").on("click", function () {
    $("#colorDiv").css("background-color", "yellow");
  });

  $("#addClassButton").on("click", function () {
    $("#classDiv").addClass("className");
  });
  $("#removeClassButton").on("click", function () {
    $("#classDiv").removeAttr("class");
  });

  $("#fadeInButton").click(function () {
    $("#fadeDiv").fadeIn();
  });
  $("#fadeOutButton").click(function () {
    $("#fadeDiv").fadeOut();
  });

  $("#slideUpButton").click(function () {
    $("#slideDiv").slideUp();
  });
  $("#slideDownButton").click(function () {
    $("#slideDiv").slideDown();
  });
});
