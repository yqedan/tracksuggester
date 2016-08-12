var developFun = function(frontOrBack){
  if(frontOrBack === "front")
    return "Design";
  else //frontOrBack  is back
    return "";
}
var companyFun = function(bigOrSmall,trackSuggested){
  if(!trackSuggested){
    if(bigOrSmall === "small")
      return "Ruby";
    else if(bigOrSmall === "medium")
      return "Java";
    else //bigOrSmall is large
      return "C#";
  }
  else
    return trackSuggested;
}
var operatingSystemFun = function(macPcLinux,trackSuggested){
  if(trackSuggested === "C#"){
    if(macPcLinux === "pc")
      return trackSuggested;
    else //liunx or mac
      return "Java";
  }
  else
      return trackSuggested;
}
var gemstoneFun = function(yesOrNo,trackSuggested){
  if(yesOrNo === "yes")
    return "Ruby"
  else
    return trackSuggested;
}
var blobFun = function(yesOrNo,trackSuggested){
  if(yesOrNo === "yes")
    return "PHP"
  else
    return trackSuggested;
}
$(document).ready(function() {
  $("form").submit(function(event){
    var track = "";
    var develop = $("input:radio[name=develop]:checked").val();
    var size = $("input:radio[name=size]:checked").val();
    var operatingSystem = $("input:radio[name=os]:checked").val();
    var gemstone = $("input:radio[name=gem]:checked").val();
    var blob = $("input:radio[name=blob]:checked").val();
    track = developFun(develop);
    track = companyFun(size,track);
    track = operatingSystemFun(operatingSystem,track);
    track = gemstoneFun(gemstone,track);
    track = blobFun(blob,track);
    alert(track);
    $("#hiddenMessage").show();
    event.preventDefault();
  });
});
