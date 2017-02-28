function forLoop(array) {
  //console.log('beg. array', array);
  //var loopedArray = array
  for (var i = 0; i < 25; i++) {
    //console.log('inside loop', i)
    if (i == 1) {
      //console.log('got to 1st loop');
      array.push('I am 1 strange loop.');

       }
    //
    else {
      array = [...array, `I am ${i} strange loops.`];
      //console.log('got to', i, 'loop');
    }
  }
  return array;
}

function whileLoop(n) {
  while(n > 0) {
    console.log(n);
    n = n - 1;
  }
  return 'done';
}

function doWhileLoop(array) {

  function maybeTrue() {
  return Math.random() >= 0.5
  }

  do {
    array.pop()
  } while (array.length > 0 && maybeTrue()) {
  }
  return array;
}
