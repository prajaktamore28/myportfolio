$("#commonform").validate();
jQuery('.numbersOnly').keyup(function () { 
  this.value = this.value.replace(/[^0-9\.]/,'');
});


  AOS.init();
