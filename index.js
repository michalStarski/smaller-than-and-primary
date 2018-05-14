const Calculator = {
  isPrimary: function(number){
      let result = true;
      if(number <= 1)
        return false;
      for(let i = 2; i <= Math.sqrt(number); i++){
        if(number % i === 0)
          result = false;
      }
      return result;
    },
  resultArray: [],
};

$('#btn').click(function(){
    let input = $('#user-input').val();
    input = parseInt(input);
    if(Number.isNaN(input)){
      alert('Error!');
      return;
    }
    Calculator.resultArray.length = 0;
    for(let i = input-1; i >= 2; i--){
      if(Calculator.isPrimary(i))
        Calculator.resultArray.push(i);
    }
      if(Calculator.resultArray.length === 0)
        $('.answer').empty().append('<p>Brak odpowiedzi</p>');
      else{
        $('.answer').empty();
      for(let i = Calculator.resultArray.length-1; i>=0; i--) {
        $('.answer').append(Calculator.resultArray[i] + ' ');
      }
    }
});
