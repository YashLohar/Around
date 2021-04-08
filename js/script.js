
$(document).ready(function(){

    $(".fa-navicon").click(function(){
           $(".navigation").slideToggle(150);
    });
    
    $("#click").click(function(){
        
        var value=$("#val-change").text();
        if(value==12){
            $("#val-change").text("15");
        }
        else{
            $("#val-change").text("12");
        }
    });
});