var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","https://www.pngitem.com/pimgs/m/344-3443946_baby-boss-brother-name-hd-png-download.png", "https://miro.medium.com/max/842/1*38QD8tbJ8z7Q4WyI9VC6QA.png" , "https://i.pinimg.com/originals/e6/f5/d2/e6f5d201c7f1e458f6efd23323215962.jpg", "https://i.postimg.cc/wjMnFtMX/father.jpg", "https://i.postimg.cc/bw5W5zSK/mother.jpg"];
var names = ["Family Book","Arya Sudarsanam", "Athreya Sudarsanam", "Aaradhya Sudarsanam", "Arvind Sudarsanam", "Lakshmi Srinivasan"];
var i = 0;
function update()
{
  i++;
    var numbers_of_family_member_in_array = 5
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }

    
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = images[i];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = names [i] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
 

}
