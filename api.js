$(function (){
      var $planets =  $('#planets');
    

    $.ajax({
        type: 'GET',
        url: "https://swapi.co/api/planets/3/",
        success: function(planets) {
            console.log(planets);
                $.each(planets, function(i, planet){
                console.log(planet);    
                $planets.append('<li>' + i + ' = ' + planet + '</li>');
            });
        }
});

});
