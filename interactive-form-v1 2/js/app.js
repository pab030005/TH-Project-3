

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
      { otherTitleText.style.display = 'block';
      otherTitleText.addEventListener('focus', ()=> {otherTitleText.value=''})
      otherTitleText.addEventListener('focusout', ()=> {otherTitleText.value='Your Job Role'
    })
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
const $jsLibs = $("input[name = 'js-libs']");
const $express = $("input[name = 'express']");
const $node = $("input[name = 'node']");
const $buildtools = $("input[name = 'build-tools']");

/*$jsFrameworks.change(function() {
  if(this.checked)
    {$express.attr('disabled', true)}
  else if (this.unchecked)
    {$('.activities').children().attr('disabled', false)}
     }
 );

 $express.change(function() {
   if(this.checked)
     {$jsFrameworks.attr('disabled', true)}
   else if (this.unchecked)
       {$('.activities').children().attr('disabled', false)}
      }
  );

*/

$jsFrameworks.change (function() {
   if (this.checked)
     {$express.attr('disabled', true)}
       else {$express.attr('disabled', false)};
     })

$jsLibs.change (function() {
  if (this.checked)
    {$node.attr('disabled', true)}
      else {$node.attr('disabled', false)};
        })

$express.change (function (){
  if (this.checked)
    {$jsFrameworks.attr('disabled', true)}
      else {$jsFrameworks.attr('disabled', false)};
        })

$node.change (function (){
  if (this.checked)
    {$jsLibs.attr('disabled', true)}
      else {$jsLibs.attr('disabled', false)};
        })

/*
<label><input type="checkbox" name="all"> Main Conference — $200</label>
<label><input type="checkbox" name="js-frameworks"> JavaScript Frameworks Workshop — Tuesday 9am-12pm, $100</label>
<label><input type="checkbox" name="js-libs"> JavaScript Libraries Workshop — Tuesday 1pm-4pm, $100</label>
<label><input type="checkbox" name="express"> Express Workshop — Tuesday 9am-12pm, $100</label>
<label><input type="checkbox" name="node"> Node.js Workshop — Tuesday 1pm-4pm, $100</label>
<label><input type="checkbox" name="build-tools"> Build tools Workshop — Wednesday 9am-12pm, $100</label>
<label><input type="checkbox" name="npm"> npm Workshop — Wednesday 1pm-4pm, $100</label>*/
