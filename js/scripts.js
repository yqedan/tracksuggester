$(document).ready(function() {
  $("form").submit(function(event){
    $("#hiddenMessage").show();
    event.preventDefault();
  });
});
