$(document).ready(function() {


  function DieView(dieView){
    this.dieView = dieView;
  }


  DieView.prototype = {
    add: function(die) {
      this.dieView.append(die);
    },
    roll: function(dice){
      dice.each(function(k, dice) {
        var value = Math.floor((Math.random()*6)+1);
        $(dice).text(value);
      });
    }

  }

  function DieController(view){
    this.view = view; 
    var self = this;
    // setInterval(function() {
    // },1000);
  }

  DieController.prototype.sum = function(){
    var self = this; 
    var numbers = $('.die').text().split('');
    var sum = 0;
    $(numbers).each(function(index, value){
      sum += parseInt(value);
    });
    $('.sum').text(sum);

  }

  var DieView = new DieView($('.dice'))
  var DieController = new DieController(DieView)

  $('#roller button.add').on('click', function(e) {
    DieView.add('<div class="die">0</div>');
  });

  $('#roller button.roll').on('click', function() {
    DieView.roll($('.die'));
    DieController.sum();
  });
});
