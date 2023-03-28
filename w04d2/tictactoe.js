const checkForVictory = ($td) => {
  const $parentRow = $td.parent();
  const player = $('#player').html();
  let win = true;
  $parentRow.children().each(function(index){
    console.log('index', index );
    if (!($(this).hasClass(player))) {
      win = false;
    }
  });
  return win;
};

$(document).ready(() => {
  $('td').click(function(){
    $(this).off();
    const player = $('#player').html(); // getter for the content of that tag
    // alert(player);
    $(this).addClass(player);
    if (checkForVictory($(this))) {
      $('#message').html('The game is won! Play <a href="">Again!</a>');
      $('td').off();
    } else {
      if (player === 'X') {
        $('#player').html('O'); // sets the new player
      } else {
        $('#player').html('X'); // sets the new player
      } 
    }
  });
});
