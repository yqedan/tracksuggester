var developFun = function(frontOrBack){
  if(frontOrBack === "front")
    return "Design";
  else //frontOrBack === "back"
    return "";
}
var companyFun = function(bigOrSmall,trackSuggested){
  if(!trackSuggested){
    if(bigOrSmall === "small")
      return "Ruby";
    else if(bigOrSmall === "medium")
      return "Java";
    else //bigOrSmall === "large"
      return "C#";
  }
  else
    return trackSuggested;
}

$(document).ready(function() {
  $("form").submit(function(event){
    var track = "";
    var develop = $("input:radio[name=develop]:checked").val();
    var size = $("input:radio[name=size]:checked").val();
    track = developFun(develop);
    track = companyFun(size,track);
    alert(track);
    $("#hiddenMessage").show();
    event.preventDefault();
  });
});
