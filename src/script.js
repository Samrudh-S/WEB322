/* First Slider */
$('.slider-one')
  .not('.slick-initialized')
  .slick({
    autoplay: true,
    autoplaySpeed: 3500,
    dots: true,
    prevArrow: '.site-slider .slider-btn .prev',
    nextArrow: '.site-slider .slider-btn .next'
  });

  function validateRegister() 
  {
    var a = document.forms["ContactUs"]["Email"].value;    
    var b = document.forms["ContactUs"]["FName"].value;
    var c = document.forms["ContactUs"]["LName"].value;      
    var d = document.forms["ContactUs"]["Password"].value;  

    if (a == "" || b == "" || c == "" || d == "")
    {
      alert("Fields must be filled out");
      
      return false;
    }
  } 

  function validateLogin() 
  {
  var e = document.forms["Login"]["LPassword"].value;    
  var f = document.forms["Login"]["LEmail"].value;  

  if (e == "" || f == "") 
  {
    alert("Field(s) must be filled in order to login");
    return false;
  }
}