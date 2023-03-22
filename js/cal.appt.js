// Scroll to the bottom of the page
function scrollToBottom() {
    window.scrollTo(0, document.body.scrollHeight);
  }
  
  // Attach an event listener to a button or other element
  document.getElementByClassName('dropdown-item active').select('click', function() {
    // Perform any actions associated with the button click here
  
    // Scroll to the bottom of the page
    scrollToBottom();
  });

  $(".dropdown-menu-1").ready(function(){
    $('.availibility').hide();

    $('#dropdownMenuButton').change(function() {
      var selectedValue = $(this).val(".btn-secondary");
      
      // Hide all containers
      $('.availibility').hide();
      
      // Show the appropriate container based on the selected value
      if (selectedValue === 'item1') {
        $('#itemContent1').show();
      } else if (selectedValue === 'item2') {
        $('#itemContent2').show();
      } 
    });
  });



  
  $('.dropdown-item').on("click", function(){
  
    if ($(this).hasClass("item1")){
      $(".item1").addClass("active");
      $(".item2").removeClass("active");
      $("#itemContent1").css("display", "block");
      $("#itemContent2").css("display", "none");
    }
    else if ($(this).hasClass("item2")){
      $(".item2").addClass("active");
      $(".item1").removeClass("active");
      $("#itemContent2").css("display", "block");
      $("#itemontent1").css("display", "none");
    }
  });