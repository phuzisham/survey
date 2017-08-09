$(document).ready(function() {
  $("form#survey").submit(function(event) {
    event.preventDefault();
    var name = $("#name").val();
    var born = $("#born").val();
    var color = $("#color").val();
    var music = $("input:radio[name=music]:checked").val();
    var beverage = $("#beverage").val();

    alert(name + born + color + music + beverage);
  });
});
