$( function(){
    
    var v1, v2, op;
    
  $("input[name=btn]").click(function(){
   $("#result").val($("#result").val() + $(this).val());
  });
    
    $("input[name=ce]").click( function(){
        $("#result").val('');
        $("#op").text('');
    });
  
    $("input[name=soma]").click( function(){
       if($("#result").val() != ''){
           v1 = parseFloat($("#result").val());
          $("#result").val('');
           op = "soma";
           $("#op").text($(this).val());
           
       } else {
           alert('Insira algum numero para iniciar!');
       }
    });
    
        $("input[name=menos]").click( function(){
       if($("#result").val() != ''){
           v1 = parseFloat($("#result").val());
          $("#result").val('');
           op = "menos";
           $("#op").text($(this).val());
           
       } else {
           alert('Insira algum numero para iniciar!');
       }
    });
    
    $("input[name=vezes]").click( function(){
       if($("#result").val() != ''){
           v1 = parseFloat($("#result").val());
          $("#result").val('');
           op = "vezes";
           $("#op").text($(this).val());
           
       } else {
           alert('Insira algum numero para iniciar!');
       }
    });
    
    $("input[name=div]").click( function(){
       if($("#result").val() != ''){
           v1 = parseFloat($("#result").val());
          $("#result").val('');
           op = "div";
           $("#op").text($(this).val());
           
       } else {
           alert('Insira algum numero para iniciar!');
       }
    });
    
    
    $("input[name=igual]").click( function(){