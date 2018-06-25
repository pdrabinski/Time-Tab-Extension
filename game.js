
$(document).ready(function() {

  var game = {
    user: '',
    computer: '',
    currentPlayer: '',
    moves: 1,
};

$("#xbutton").click({param1: 'x'}, initGame);
$("#obutton").click({param1: 'o'},initGame);
$("#first").click({param1: 'first'}, preprocess_move);
$("#second").click({param1: 'second'}, preprocess_move);
$("#third").click({param1: 'third'}, preprocess_move);
$("#fourth").click({param1: 'fourth'}, preprocess_move);
$("#fifth").click({param1: 'fifth'}, preprocess_move);
$("#sixth").click({param1: 'sixth'}, preprocess_move);
$("#seventh").click({param1: 'seventh'}, preprocess_move);
$("#eighth").click({param1: 'eighth'}, preprocess_move);
$("#ninth").click({param1: 'ninth'}, preprocess_move);

function start() {
    $('#myModal').modal('show');
}

function initGame(id) {
  id = id.data.param1;
  console.log('initGame was called');
  game.moves = 0;
  if (id === 'x') {
    game.user = '<span>X</span>';
    game.computer = '<span>O</span>';
    setCurrPl('user')
    console.log('user is x, computer is o');
  } else if (id === 'o') {
    game.user = '<span>O</span>';
    game.computer = '<span>X</span>';
    console.log('computer is x, user is o');
    setCurrPl('computer')
    comp();
    }
}

function setCurrPl(curr) {
    game.currentPlayer = curr;
}

function preprocess_move(id) {
  id = id.data.param1;
  if ($('#' + id).html() != game.user && $('#' + id).html() != game.computer) {
    update_board(id);
  }
}

function update_board(id) {
    if (game.currentPlayer == 'user') {
        $('#' + id).html(game.user);
    }
    else if (game.currentPlayer == 'computer') {
        $('#' + id).html(game.computer);
    }
    let status = gameStatus();
    game.moves++;
    if (status === false) {
      console.log(game.moves, ":",status);
      is_it_a_draw();
      if (game.currentPlayer == 'user') {
        setCurrPl('computer');
        setTimeout(comp, 300);
      }
      else {
        setCurrPl('user');
      }
    }
    else {
      return;
    }
}
    
function comp() {
    if (game.moves === 0) {
      update_board('fifth');
    }
    else {
      switch (true) {
          case $('#first').html() != game.user && $('#first').html() != game.computer:
          update_board('first');
          break;
          case $('#second').html() !== game.user && $('#second').html() !== game.computer:
          update_board('second');
          break;
          case $('#third').html() !== game.user && $('#third').html() !== game.computer:
          update_board('third');
          break;
          case $('#fourth').html() !== game.user && $('#fourth').html() !== game.computer:
          update_board('fourth');
          break;
          case $('#fifth').html() !== game.user && $('#fifth').html() !== game.computer:
          update_board('fifth');
          break;
          case $('#sixth').html() !== game.user && $('#sixth').html() !== game.computer:
          update_board('sixth');
          break;
          case $('#seventh').html() !== game.user && $('#seventh').html() !== game.computer:
          update_board('seventh');
          break;
          case $('#eighth').html() !== game.user && $('#eighth').html() !== game.computer:
          update_board('eighth');
          break;
          case $('nineth').html() !== game.user && $('#nineth').html() !== game.computer:
          update_board('nineth');
        break;
      }
    }
}


function gameStatus() {
    var curPlayer;
  
    if (game.currentPlayer == 'user') {
      curPlayer = game.user;
    } else if (game.currentPlayer == 'computer') {
      curPlayer = game.computer;
    }
  
    switch (true) {
      case $('#first').html() === curPlayer && $('#second').html() === curPlayer &&
      $('#third').html() === curPlayer:
        show('#first', '#second', '#third');
        return true;
      case $('#fourth').html() === curPlayer && $('#fifth').html() === curPlayer &&
      $('#sixth').html() === curPlayer:
        show('#fourth', '#fifth', '#sixth');
        return true;
      case $('#seventh').html() === curPlayer && $('#eighth').html() === curPlayer &&
      $('#nineth').html() === curPlayer:
        show('#seventh', '#eighth', '#nineth');
        return true;
      case $('#first').html() === curPlayer && $('#fourth').html() === curPlayer &&
      $('#seventh').html() === curPlayer:
        show('#first', '#fourth', '#seventh');
        return true;
      case $('#second').html() === curPlayer && $('#fifth').html() === curPlayer &&
      $('#eighth').html() === curPlayer:
        show('#second', '#fifth', '#eighth');
        return true;
      case $('#third').html() === curPlayer && $('#sixth').html() === curPlayer &&
      $('#nineth').html() === curPlayer:
        show('#third', '#sixth', '#nineth');
        return true;
      case $('#first').html() === curPlayer && $('#fifth').html() === curPlayer &&
      $('#nineth').html() === curPlayer:
        show('#first', '#fifth', '#nineth');
        return true;
      case $('#third').html() === curPlayer && $('#fifth').html() === curPlayer &&
      $('#seventh').html() === curPlayer:
        show('#third', '#fifth', '#seventh');
        return true;
    }
    return false;
  };

  function is_it_a_draw() {
    if (game.moves === 9) {
      setTimeout(reset, 1000);
    }
  }

  function show(x, y, z) {
    $(x).addClass('win');
    $(y).addClass('win');
    $(z).addClass('win');
    setTimeout(reset, 2000);
  }

  function reset() {
    $('.game-field').html('');
    game.moves = 0;
    $('.win').removeClass('win');
    if (game.user === '<span>O</span>') {
      game.user = '<span>X</span>';
      game.computer = '<span>O</span>';
      setCurrPl('user')
    }
    else {
      game.user = '<span>O</span>';
      game.computer = '<span>X</span>';
      setCurrPl('computer')
      setTimeout(comp, 200);
    }
  }

});
