//Treehouse FS JS Project #3, interactive form.

//some basic global variables
const nameForm = document.getElementById('name');
const emailForm = document.getElementById('mail');
let userTitle;
const otherTitleText = document.getElementById('other_title');

//focus on name input
nameForm.focus();

//hide 'other title' text input
otherTitleText.style.display = 'none';

//upon selecting 'other', unhide text input, on click label hides, out focus appears
document.getElementById("title").addEventListener('change', () => {
  otherTitleText.style.display = 'none'
  let x = document.getElementById("title").selectedIndex;
  userTitle = document.getElementsByTagName("option")[x].value;
    if (userTitle === 'other')
      { otherTitleText.style.display = 'block';
      otherTitleText.addEventListener('focus', ()=> {otherTitleText.value=''
      })
    }
  })

//depending on theme, hide/show theme-specific colors by manipulating/selecting by index of options.
//color option drop down will be locked to a default value of 'please chose theme' until a theme is selected
//respective colors will appear depending on chose theme.

let shirtDesign = document.getElementById('design').children;
let shirtColor = document.getElementById('color').children;
let shirtColorSelect = document.getElementById('color');
let option = document.createElement("option");
option.text = "Please select a theme";
option.value = "blank";
shirtColorSelect.add(option, shirtColorSelect[6]);
shirtColor[6].setAttribute('selected', true);
for (i=0; i<6; i++){
  shirtColor[i].hidden = true}


document.getElementById('design').addEventListener('change', (e) => {
  if (e.target.selectedIndex === 1) {
    shirtColorSelect.value = 'cornflowerblue';
    shirtColor[0].hidden = false;
    shirtColor[1].hidden = false;
    shirtColor[2].hidden = false;
    shirtColor[3].hidden = true;
    shirtColor[4].hidden = true;
    shirtColor[5].hidden = true;
    shirtColor[6].hidden = true
  }
  else if (e.target.selectedIndex === 2) {
    shirtColorSelect.value = 'tomato';
    shirtColor[3].hidden = false;
    shirtColor[4].hidden = false;
    shirtColor[5].hidden = false;
    shirtColor[0].hidden = true;
    shirtColor[1].hidden = true;
    shirtColor[2].hidden = true;
    shirtColor[6].hidden = true
  }
  else {
    shirtColorSelect.value = 'blank';
    for (i=0; i<6; i++){
      shirtColor[i].hidden = true}
        shirtColor[6].hidden = false
  }

})


//global variables used to select/maniuplate activites are declared
//JQuery used here to select sctivity checkboxes
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

//upon a 'change' to each activity, check if checkbox is checked
//if checked, add cost & count # of Activities, if unchecked, erase cost and count of Activities
//this is done for all available activities include 'all'/main conference
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

//global variables used to select and manipulate payment option details are declared here

const payDetails =  document.querySelector('#payment')
const pp = document.getElementsByTagName('p')[1]
const btc = document.getElementsByTagName('p')[2]
const cc = document.getElementById('credit-card')
const all = document.getElementById('credit-card').parentNode.children
const submitButton = document.getElementsByTagName('button')[0];

//hies bitcoin and paypal messages & select CC as default
btc.style.display = 'none';
pp.style.display = 'none';
payDetails[1].selected = 'selected';

//depending on chose payment option (identified by selected index), show/hide instructions

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

//global variables to select & manipulate credit card text inputs are declared here
const ccnum = document.querySelector('#cc-num')
const cczip = document.querySelector('#zip');
const cccvv = document.querySelector('#cvv')
//RegEx's for each CC form field
const emailRegEx = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
const ccnumRegEx = /[0-9]{13,16}/;
const cczipRegEx = /[0-9]{5}/;
const cccvvRegEx = /[0-9]{2}/;

/*if CC is method of payment, check if each CC field is completed AND in proper format.
if no CC # provided, error messsage says so; if CC # is provided, but not in proper format,
a separate error message will alert user.
The form will not submit unless CC#, Zip, or CVV are present & proper format*/

submitButton.addEventListener('click', (e) => {
  if (payDetails.selectedIndex === 1) {

    if (ccnumRegEx.test(ccnum.value) === false) {
          e.preventDefault();
          if (ccnum.value === '' || ccnum.value === "CC Number is required") {
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
          if (cczip.value === '' || cczip.value === "ZIP is required") {
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
          if (cccvv.value === '' || cccvv.value === "CVV is required") {
              cccvv.value = 'CVV is required';
              cccvv.style.color = 'red';
              cccvv.addEventListener('focus', () => {
                cccvv.value= '';
              })
            }
          else {cccvv.value = 'CVV 3 digits';
              cccvv.style.color = 'red';
              cccvv.addEventListener('focus', () => {
                  cccvv.value= '';
                })
            }
        }
      }
    }
  )



//global variable for name/email verification declared
const label = nameForm.parentNode.children;

/*upon click of submit button, checks to see if name field is blank. If blank
prompts error messages and will not submit form. If name field completed, allows form
to be submitted*/
submitButton.addEventListener('click', (e) => {
if (nameForm.value === '' || nameForm.value === 'Name is a required input') {
    e.preventDefault();
    nameForm.value = 'Name is a required input';
    nameForm.style.color = 'red'
    nameForm.addEventListener('focus', () => {
        nameForm.value= ''
        nameForm.style.color = 'black';
      })
  }
    else {nameForm.addEventListener('focus', () => {
          nameForm.style.color = 'black';
        })
      }
    }
  )

  /*upon click of submit button, checks to see if 1) email field is blank, or 2) email is
  not properly formatted. If blank or improper format, prompts error messages and will
  not submit form. If name field completed & formatted, allows form to be submitted*/

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
          emailForm.style.color = 'black';
        })
      }
    }
  )

//global variable to create span element
let actAlert = document.createElement('SPAN');

/*upon click of submit button, checks to see at least 1 activity chosen. If not, console.error
message prompted and form does not submit;*/

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
