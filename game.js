
$(document).ready(function() {

  var game = {
    user: '',
    computer: '',
    currentPlayer: '',
    moves: 1,
};

$("#xbutton").click({param1: 'x'}, setFig);
$("#obutton").click({param1: 'o'},setFig);
$("#first").click({param1: 'first'}, preprocess_icon);
$("#second").click({param1: 'second'}, preprocess_icon);
$("#third").click({param1: 'third'}, preprocess_icon);
$("#fourth").click({param1: 'fourth'}, preprocess_icon);
$("#fifth").click({param1: 'fifth'}, preprocess_icon);
$("#sixth").click({param1: 'sixth'}, preprocess_icon);
$("#seventh").click({param1: 'seventh'}, preprocess_icon);
$("#eighth").click({param1: 'eighth'}, preprocess_icon);
$("#ninth").click({param1: 'ninth'}, preprocess_icon);

function start() {
    $('#myModal').modal('show');
}

function firstMove() {
    $('#fifth').html(game.computer);
    $('#fifth').removeAttr('onClick');
}

function setFig(id) {
  id = id.data.param1;
  console.log('setFig was called');
  console.log(id,'is id');
  if (id == 'x') {
    game.user = '<span>X</span>';
    game.computer = '<span>O</span>';
    console.log('user is x, computer is o');
  } else if (id == 'o') {
    game.user = '<span>O</span>';
    game.computer = '<span>X</span>';
    console.log('computer is x, user is y');
    firstMove();
    }
    setCurrPl('user');
}

function setCurrPl(curr) {
    game.currentPlayer = curr;
}

function preprocess_icon(id) {
  id = id.data.param1;
  icon(id);
}

function icon(id) {
    console.log(id, 'is id within icon')
    if (game.currentPlayer == 'user') {
        $('#' + id).html(game.user);
        $('#' + id).removeAttr('onClick');
        gameStatus();
        setCurrPl('computer');
    }
    else if (game.currentPlayer == 'computer') {
        $('#' + id).html(game.computer);
        $('#' + id).removeAttr('onClick');
        gameStatus();
        setCurrPl('user');
    }
    game.move++
    is_it_a_draw();
    gameStatus();

    if (game.currentPlayer == 'computer') {
        comp();
    }
}
    
function comp() {
    switch (true) {
        case $('#first').html() != game.user && $('#first').html() != game.computer:
        icon('first');
        break;
        case $('#second').html() !== game.user && $('#second').html() !== game.computer:
        icon('second');
        break;
        case $('#third').html() !== game.user && $('#third').html() !== game.computer:
        icon('third');
        break;
        case $('#fourth').html() !== game.user && $('#fourth').html() !== game.computer:
        icon('fourth');
        break;
        case $('#fifth').html() !== game.user && $('#fifth').html() !== game.computer:
        icon('fifth');
        break;
        case $('#sixth').html() !== game.user && $('#sixth').html() !== game.computer:
        icon('sixth');
        break;
        case $('#seventh').html() !== game.user && $('#seventh').html() !== game.computer:
        icon('seventh');
        break;
        case $('#eighth').html() !== game.user && $('#eighth').html() !== game.computer:
        icon('eighth');
        break;
        case $('nineth').html() !== game.user && $('#nineth').html() !== game.computer:
        icon('nineth');
      break;
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
        break;
      case $('#fourth').html() === curPlayer && $('#fifth').html() === curPlayer &&
      $('#sixth').html() === curPlayer:
        show('#fourth', '#fifth', '#sixth');
        break;
      case $('#seventh').html() === curPlayer && $('#eighth').html() === curPlayer &&
      $('#nineth').html() === curPlayer:
        show('#seventh', '#eighth', '#nineth');
        break;
      case $('#first').html() === curPlayer && $('#fourth').html() === curPlayer &&
      $('#seventh').html() === curPlayer:
        show('#first', '#fourth', '#seventh');
        break;
      case $('#second').html() === curPlayer && $('#fifth').html() === curPlayer &&
      $('#eighth').html() === curPlayer:
        show('#second', '#fifth', '#eighth');
        break;
      case $('#third').html() === curPlayer && $('#sixth').html() === curPlayer &&
      $('#nineth').html() === curPlayer:
        show('#third', '#sixth', '#nineth');
        break;
      case $('#first').html() === curPlayer && $('#fifth').html() === curPlayer &&
      $('#nineth').html() === curPlayer:
        show('#first', '#fifth', '#nineth');
        break;
      case $('#third').html() === curPlayer && $('#fifth').html() === curPlayer &&
      $('#seventh').html() === curPlayer:
        show('#third', '#fifth', '#seventh');
        break;
      default:
        is_it_a_draw();
    }
  };

  function is_it_a_draw() {
    if (game.moves === 9) {
      setTimeout(reset, 1000);
    }
  }

  function lockAll() {
    $('.game-field').removeAttr('Click');
  }

  function show(x, y, z) {
    $(x).addClass('win');
    $(y).addClass('win');
    $(z).addClass('win');
    lockAll();
    setTimeout(reset, 2000);
  }

  function reset() {
    $('.game-field').html('');
    game.moves = 1;
    $('.game-field').attr('onClick', 'icon(this.id)');
    $('.win').removeClass('win');
    setTimeout(firstMove, 200);
  }

});
