$(document).ready(function(){
    

    $(".port-item").click(function () {
        $(".collapse").collapse("hide");
      });
    
      $(document).on("click", '[data-toggle="lightbox"]', function (e) {
        e.preventDefault();
        $(this).ekkoLightbox();
      });

    // jQuery methods go here...
  
  });

