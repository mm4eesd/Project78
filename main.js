var images = ["fam.png", "mom.png","dad.png","me.png","bro.png"];
var names = ["Family","Mom", "Dad", "Me","Bro"];
var i = 0;

function family()
{
  var array_length = images.length - 1;
  var updatedImages = images[i];
  var updatedName = names[i];

  document.getElementById("family_member_image").src = updatedImages;
  document.getElementById("family_member_name").innerHTML = updatedName;

  i++;


  if(i>array_length){
  i = 0;              
  } 
}
