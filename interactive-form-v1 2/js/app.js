

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
