//check off todo's by cicking 

// what this is saying --> we only want the code to run when an li is clicked inside a ul
// notices how it reads RtL
$("ul").on("click", "li", function(){
    // // console.log($(this).css("color"))
    // if($(this).css("color") === "rgb(128, 128, 128)"){
    //     $(this).css({
    //         color: "black",
    //         textDecoration: "none",
    //     });
    // }else{
    // // $(this).toggle($(this).css("text-decoration", "line-through"));
    //     $(this).css({
    //         color: "gray",
    //         textDecoration: "line-through",
    //     });
    // };

    // $(this).toggleC
    $(this).toggleClass("completed");
});

//click on x to delete 
$("ul").on("click", "span", function(event){
    //  alert(event.type);
    
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });

    //stops it from causeing parent events to fire ---> stops it from bubling up 
     event.stopPropagation();
});

//working with the event object again
$("input[type= 'text']").keypress(function(e){
    //e.which checks the key code
    if(e.which === 13){
        
        // grabbing new todo from textbox on enter
        var todoText = ($(this).val());
        //clearing input 
        $(this).val("");

        // create new li and add to ul 
        $("ul").append("<li><span><i class='fas fa-trash'></i></span> " + todoText + "</li>")

    }
});


//fadeToggle used as boolean like for on off 
$(".fa-pencil-alt").click(function(){
    $("input[type= 'text']").fadeToggle();
});