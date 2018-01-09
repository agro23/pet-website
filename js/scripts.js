$(document).ready(function() {
  $("button#change").click(function() {
    $("body").toggleClass("light-dark dark-light");
  });
  $("p span").click(function() {
    $(this).toggleClass("highlight");
  });
});
