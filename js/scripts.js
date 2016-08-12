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
var displayImage = function(trackSuggested){
  if(trackSuggested === "Java")
    return "<img id='result'src='https://www.digitalreins.com/wp-content/uploads/2015/03/ANDROID.png'class='img-responsive'>";
  else if(trackSuggested === "Design")
    return "<img id='result'src='http://static1.squarespace.com/static/5524448ee4b0d6f6b83ab9e2/t/5759b22cf8baf31aa1970715/1465496112479/Design-100.png?format=300w'class='img-responsive'>";
  else if(trackSuggested === "C#")
    return "<img id='result'src='https://upload.wikimedia.org/wikipedia/en/0/0d/Microsoft_.NET_Framework_v4.5_logo.png'class='img-responsive'>";
  else if(trackSuggested === "Ruby")
    return "<img id='result'src='http://rubyonrails.org/images/rails-logo.svg'class='img-responsive'>";
  else // Track is PHP
    return "<img id='result'src='https://www.drupal.org/files/druplicon-small.png'class='img-responsive'>";
}
$(document).ready(function() {
  $("form").submit(function(event){
    var name = $('#name').val();
    var track = "";
    var develop = $("input:radio[name=develop]:checked").val();
    var size = $("input:radio[name=size]:checked").val();
    var operatingSystem = $("input:radio[name=os]:checked").val();
    var gemstone = $("input:radio[name=gem]:checked").val();
    var blob = $("input:radio[name=blob]:checked").val();
    if(!name){
      alert("Please enter your name");
      event.preventDefault();
      return;
    }
    if((!develop)||(!size)||(!operatingSystem)||(!gemstone)||(!blob)){
      alert(name +", Please answer all of the questions");
      event.preventDefault();
      return;
    }
    $('#result').remove();
    track = developFun(develop);
    track = companyFun(size,track);
    track = operatingSystemFun(operatingSystem,track);
    track = gemstoneFun(gemstone,track);
    track = blobFun(blob,track);
    $("#answer").after(displayImage(track));
    $("#track").text(track);
    $("#nameHere").text(name);
    $("#hiddenMessage").show();
    $('#result').slideDown();
    event.preventDefault();
  });
});
