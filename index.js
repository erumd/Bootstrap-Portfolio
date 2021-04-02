$(document).ready(function () {
  var classCycle = [
    'imageCycle1',
    'imageCycle2',
    'imageCycle3',
    'imageCycle4',
    'imageCycle5',
    'imageCycle6',
    'imageCycle7',
    'imageCycle8',
    'imageCycle9',
    'imageCycle10',
    'imageCycle11',
    'imageCycle12',
    'imageCycle13',
    'imageCycle14',
    'imageCycle15',
    'imageCycle16',
    'imageCycle17',
    'imageCycle18',
    'imageCycle19',
    'imageCycle20',
  ];
  var randomNumber = Math.floor(Math.random() * classCycle.length);
  var classToAdd = classCycle[randomNumber];
  $('body').addClass(classToAdd);
});
