const nameForm = document.getElementById('name');
const emailForm = document.getElementById('mail');
nameForm.focus();

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

const $all = $("input[name = 'all']");
const $confEntry = $("input[name='all']");
const $jsFrameworks = $("input[name = 'js-frameworks']");
const $jsLibs = $("input[name = 'js-libs']");
const $express = $("input[name = 'express']");
const $node = $("input[name = 'node']");
const $buildtools = $("input[name = 'build-tools']");
const $npm = $("input[name = 'npm']");
let $total = 0
let $newP = $("<p id = total>Total: $0</p>")
let $actChecks = $(".activities");
$actChecks.append($newP);
let $actCntr = 0;

$all.change(function() {
  if (this.checked) {
    $total += 200;
    $actCntr +=1;
  }

  if ($(this).prop("checked") == false) {
    $total -= 200;
    $actCntr -=1;
  }
  $newP.text("Total: $" + $total);
});

$jsFrameworks.change (function() {
   if (this.checked)
     {$express.attr('disabled', true);
      $total += 100;
      $actCntr +=1;}
   if ($(this).prop("checked") == false)
      {$express.attr('disabled', false);
      $total -= 100
      $actCntr -=1;};
  $newP.text('Total: $' + $total);
    });

$jsLibs.change (function() {
  if (this.checked)
    {$node.attr('disabled', true);
    $total += 100;
    $actCntr +=1;}
 if ($(this).prop("checked") == false)
    {$node.attr('disabled', false);
    $total -= 100;
    $actCntr -=1}
  $newP.text('Total: $' + $total);
  });

$express.change (function (){
  if (this.checked)
    {$jsFrameworks.attr('disabled', true);
    $total += 100
    $actCntr +=1;};
 if ($(this).prop("checked") == false)
    {$jsFrameworks.attr('disabled', false);
    $total -= 100
    $actCntr -=1;};
  $newP.text('Total: $' + $total);
  });

$node.change (function (){
  if (this.checked)
    {$jsLibs.attr('disabled', true)
    $total += 100
    $actCntr +=1;};
 if ($(this).prop("checked") == false)
    {$jsLibs.attr('disabled', false);
    $total -= 100
    $actCntr -=1;};
  $newP.text('Total: $' + $total);
  });

$buildtools.change (function() {
  if (this.checked)
     {$total += 100
     $actCntr +=1;}
  if ($(this).prop("checked") == false)
     {$total -= 100
      $actCntr -=1;
    }
  $newP.text('Total: $' + $total);
  });

  $npm.change(function() {
    if (this.checked) {
      $total += 100;
      $actCntr +=1;
    }

    if ($(this).prop("checked") == false) {
      $total -= 100;
      $actCntr -=1;
    }
    $newP.text("Total: $" + $total);
  });

const payDetails =  document.querySelector('#payment')
const pp = document.getElementsByTagName('p')[1]
const btc = document.getElementsByTagName('p')[2]
const cc = document.getElementById('credit-card')
const all = document.getElementById('credit-card').parentNode.children
const submitButton = document.getElementsByTagName('button')[0];

btc.style.display = 'none';
pp.style.display = 'none';
payDetails[1].selected = 'selected';

const ccnum = document.querySelector('#cc-num')
const cczip = document.querySelector('#zip');
const cccvv = document.querySelector('#cvv')
const emailRegEx = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
const ccnumRegEx = /[0-9]{13,16}/;
const cczipRegEx = /[0-9]{5}/;
const cccvvRegEx = /[0-9]{2}/;

submitButton.addEventListener('click', (e) => {
  if (payDetails.selectedIndex === 1) {

    if (ccnumRegEx.test(ccnum.value) === false) {
          e.preventDefault();
          if (ccnum.value === '') {
            ccnum.value = 'CC Number is required';
            ccnum.style.color = 'red';
            ccnum.addEventListener('focus', () => {
              ccnum.value= '';
            })
          }
          else  {ccnum.value = 'CC Number must be proper format';
            ccnum.style.color = 'red';
            ccnum.addEventListener('focus', () => {
                ccnum.value= '';
              })
          }
      }

    if (cczipRegEx.test(cczip.value) === false) {
          e.preventDefault();
          if (cczip.value === '') {
            cczip.value = 'ZIP is required';
            cczip.style.color = 'red';
            cczip.addEventListener('focus', () => {
              cczip.value= '';
            })
          }
          else  {cczip.value = 'ZIP 5 digits';
            cczip.style.color = 'red';
            cczip.addEventListener('focus', () => {
                cczip.value= '';
              })
          }
      }

    if (cccvvRegEx.test(cccvv.value) === false) {
          e.preventDefault();
          if (cccvv.value === '') {
              cccvv.value = 'CVV is required';
              cccvv.style.color = 'red';
              cccvv.addEventListener('focus', () => {
                cccvv.value= '';
              })
            }
          else  {cccvv.value = 'CVV 3 digits';
              cccvv.style.color = 'red';
              cccvv.addEventListener('focus', () => {
                  cccvv.value= '';
                })
            }
        }
      }
    }
  )


  payDetails.addEventListener('change', (e) => {
    if (e.target.selectedIndex === 1 )
      {cc.style.display = 'block';
        btc.style.display = 'none';
        pp.style.display = 'none';
    ccnum.focus()
      }

    if (e.target.selectedIndex === 2 )
      {pp.style.display = 'block';
        btc.style.display = 'none';
        cc.style.display = 'none';}

    if (e.target.selectedIndex === 3 )
      {btc.style.display = 'block';
        pp.style.display = 'none';
        cc.style.display = 'none';
        submitButton.disabled = false}

    if (e.target.selectedIndex === 0 )
      {submitButton.disabled = true;
        btc.style.display = 'none';
        pp.style.display = 'none';
        cc.style.display = 'none';}

      })


const label = nameForm.parentNode.children;


submitButton.addEventListener('click', (e) => {
if (nameForm.value === '') {
    e.preventDefault();
    nameForm.value = 'Name is a required input';
    nameForm.style.color = 'red'
    nameForm.addEventListener('focus', () => {
        nameForm.value= ''
        nameForm.style.color = 'black';
      })
  }
    else {
      nameForm.addEventListener('focus', () => {
          nameForm.value= '';
          nameForm.style.color = 'black';
        })
      }
    }
  )



submitButton.addEventListener('click', (e) => {
if (emailRegEx.test(emailForm.value) === false) {
    e.preventDefault();
    emailForm.value = 'Email is a required form and must be proper format';
    emailForm.style.color = 'red'
    emailForm.addEventListener('focus', () => {
        emailForm.value= ''
        emailForm.style.color = 'black';
      })
  }
    else {
      emailForm.addEventListener('focus', () => {
          emailForm.value= '';
          emailForm.style.color = 'black';
        })
      }
    }
  )

let actAlert = document.createElement('SPAN');

submitButton.addEventListener('click', (e) => {
if ($actCntr === 0) {
    e.preventDefault();
    actAlert.textContent = 'At least 1 activity must be selected';
    actAlert.style.color = 'red';
    document.querySelector('.activities').appendChild(actAlert);
    document.querySelector('.activities').style.color = 'red';
    }
    else {actAlert.textContent = '';
            document.querySelector('.activities').style.color = 'black'
        }
  })
