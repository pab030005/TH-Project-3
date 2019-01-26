

document.getElementById('name').focus();

//global variables
let userTitle;
const otherTitleText = document.getElementById('other_title');

//hide 'other title' text input
otherTitleText.style.display = 'none';

//upon selecting 'other', unhide text input
document.getElementById("title").addEventListener('change', () => {
  otherTitleText.style.display = 'none'
  let x = document.getElementById("title").selectedIndex;
  userTitle = document.getElementsByTagName("option")[x].value;
    if (userTitle === 'other')
      { otherTitleText.style.display = 'block'
      otherTitleText.addEventListener('focus', ()=> {otherTitleText.value=''})
    }
})


let xx = document.getElementById('design');
let shirtDesign = document.getElementById('design').children;
let shirtColor = document.getElementById('color').children;
document.getElementById('design').parentNode.addEventListener('change', (e) => {
  if (e.target.selectedIndex === 1 ) {
    shirtColor[0].setAttribute('selected', 'selected')
    shirtColor[0].style.display = 'block'
    shirtColor[1].style.display = 'block'
    shirtColor[2].style.display = 'block'
    shirtColor[3].style.display = 'none'
    shirtColor[4].style.display = 'none'
    shirtColor[5].style.display = 'none'
}
  if (e.target.selectedIndex === 2 ) {
    shirtColor[3].setAttribute('selected', 'selected')
    shirtColor[3].style.display = 'block'
    shirtColor[4].style.display = 'block'
    shirtColor[5].style.display = 'block'
    shirtColor[0].style.display = 'none'
    shirtColor[1].style.display = 'none'
    shirtColor[2].style.display = 'none'
}
})

const $confEntry = $("input[name='all']");
const $jsFrameworks = $("input[name = 'js-frameworks']");
$jsFrameworks.attr('disabled', true)
/*
<label><input type="checkbox" name="all"> Main Conference — $200</label>
<label><input type="checkbox" name="js-frameworks"> JavaScript Frameworks Workshop — Tuesday 9am-12pm, $100</label>
<label><input type="checkbox" name="js-libs"> JavaScript Libraries Workshop — Tuesday 1pm-4pm, $100</label>
<label><input type="checkbox" name="express"> Express Workshop — Tuesday 9am-12pm, $100</label>
<label><input type="checkbox" name="node"> Node.js Workshop — Tuesday 1pm-4pm, $100</label>
<label><input type="checkbox" name="build-tools"> Build tools Workshop — Wednesday 9am-12pm, $100</label>
<label><input typ
*/
