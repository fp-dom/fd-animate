import {curry3} from 'fj-curry';

let _animate = (animFunc, confFunc, elem) => {
  return elem.animate(animFunc(),confFunc());
}

export default curry3(_animate);
