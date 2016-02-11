// // $(function() {
// //
// //   var text;
// //   var answer = prompt("What is the creature that walks on four legs in the morning, two legs at noon and three in the evening?");
// //
// //   switch(answer) {
// //     case "Man":
// //       text = "Correct.";
// //       break;
// //     default:
// //       text = "Incorrect";
// //       break;
// //
// //   }
// // });
//
// //
// //   if (answer = ) {
// //     $('#beach').show();
// //   } else {
// //     $('#beach').hide();
// //   }
// // });
//
// var text;
// var favDrink = prompt("What's your favorite cocktail drink?");
// switch(favDrink) {
//     case "Martini":
//         text = "Excellent choice! Martini is good for your soul.";
//         break;
//     case "Daiquiri":
//         text = "Daiquiri is my favorite too!";
//         break;
//     case "Cosmopolitan":
//         text = "Really? Are you sure the Cosmopolitan is your favorite?";
//         break;
//     default:
//         text = "I have never heard of that one..";
//         break;
// }
// document.getElementById("demo").innerHTML = text;
//

// $(function() {
//   $("form#ins").submit(function() {
//     var age = $("input#age").val();
//     var gen = $("input#gen").val();
//
//     var quote = (100 - age) * 3;
//
//     if (age) {
//       var quote = (100 - age) * 3;
//       if (gen === 'm' && age < 26) {
//         quote += 50;
//       }
//
//       $("#rate").empty().append(quote);
//       $("#quote").show();
//
//     } else {
//       alert('Age?');
//     }
//
//     return false;
//   });
// });


// security? code?
// $(function() {
//   r = 27;
//   if (r === 27) {
//     $("#trip").show();
//   } else {
//   alert("No.");
//   }
// });

$(function() {

  var point = 0;

  $('#hit').click(function() {

      var n = new Date();
      var d = n.getMilliseconds();
      var n1 = new Date();
      var d1 = n1.getMilliseconds();
      var n2 = new Date();
      var d2 = n.getMilliseconds();
      var n3 = new Date();
      var d3 = n1.getMilliseconds();

      $('#hit').css({"margin-top":d + 'px', "margin-bottom": d1 + 'px', "margin-left":d2 + 'px', "margin-right":d3 + 'px'});

    point = point + 1;
    $('#score').empty().append(point);
    // alert(point);

  });
});
