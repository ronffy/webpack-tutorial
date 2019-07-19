import $ from 'jquery';
import right from '../assets/right.png';

$('#root')
.attr('ronffy', '123')
.html(`
  <div className="img" id="root">
    <image src="${right}" />
  </div>
`);
