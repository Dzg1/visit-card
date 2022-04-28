<script type="text/javascript">
$(function()
{
  $('#container').hover(function()
    {
    $('#menu').css(
        {
        'background-color' : '#333',
        'color' : 'gainsboro'
        });
    $('#main').css('display','inline-block');
    }, function()  
    {
    $('#menu').css( 
        {
        'background-color' : 'gainsboro',
        'color': '#333',
        });
    $('#main').hide();
    });  
})






</script>