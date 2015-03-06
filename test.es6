import assert from 'assert';
import animate from './';

var p = document.createElement('p')

p.innerHTML = 'HELLO';

document.body.appendChild(p)

animate(function(){return [
      {opacity: "0.5", transform: "scale(0.5)"},
      {opacity: "1.0", transform: "scale(1)"}
]}, function(){return {direction: "alternate", duration: 500, iterations: Infinity}}, p);


it('fd-animate', () => {
  p.pause();
  assert.equal(p.playState, "paused");
  assert.equal(p.currentTime > 1, true);
});
