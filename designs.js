
// When size is submitted by the user, call makeGrid()
   $('#sizePicker').submit(function(event){
    event.preventDefault();
     makeGrid();
     
   });
   
   function makeGrid() {

// set the Height and Width of the Pixel Art Maker
var rows = $('#inputHeight').val();
var columns = $('#inputWidth').val();
$('#pixelCanvas').html('');
for(var i=1; i<=rows; i++){
    $('#pixelCanvas').append('<tr id=Tree' + i + '></tr>');
for(var j=1; j<=columns; j++){
        $('#Tree' + i).append('<td></td>');
    }
    
}

    // To add color to the box
    $('td').click(function(event){
     var color= $('#colorPicker').val();
    //  To remove color when clicked on
     if($(this).attr("style")){
        $(this).removeAttr('style');
    }
    else{
            $(this).attr('style', 'background-color:'+ color);
        }
    })

    }
   

   
