export function throttle(fn, delay, atleast) {
  var timer = null;
  var previous = null;

  return function() {
    var now = +new Date();

    if (!previous) previous = now;

    if (now - previous > atleast) {
      fn();
      previous = now;
    } else {
      clearTimeout(timer);
      timer = setTimeout(function() {
        fn();
      }, delay);
    }
  };
}
