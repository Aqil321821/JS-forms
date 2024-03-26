
/*   1..Getting text data from input */
//    SIR GHOUS

/* const btn = document.querySelector("#btn");
const text = document.querySelector("#test");

btn.addEventListener('click', function () {

    const InputText = text.value;
    console.log(InputText);
    InputText = "";




});
 */

////////////////////////////////////////////////////

//   2.. dropdown box

/* const mulBtn = document.querySelector("#mul-btn");
const dropValue = document.querySelector("#multiple");

mulBtn.addEventListener('click', function () {

    const get = dropValue.value;
    console.log(get);
   
    





});
 */
///////////////////////////////////

//    3. Checkbox

const radio = document.getElementsByName('gender');



const btn = document.querySelector("#radio-submit");


btn.addEventListener('click', function () {


   for (let i = 0; i < radio.length; i++) {

          if (radio[i].checked) {
            console.log(radio[i].value);
            
          }
   
   }




// SIR BRAD TRAVERSY

// FIRST METHOD

const form = document.getElementById('item-form');

function onSubmit(e) {
  e.preventDefault();

  // Get value with .value
  const item = document.getElementById('item-input').value;
  const priority = document.getElementById('priority-input').value;

  if (item === '' || priority === '0') {
    alert('Please fill in all fields');
    return;
  }

  console.log(item, priority);
}


//////////////////////////////////////////////////////////////

// SECOND METHOD

// Using the FormData Object
function onSubmit2(e) {
  e.preventDefault();

  const formData = new FormData(form);

  // Get individual items
  const item = formData.get('item');
  const priority = formData.get('priority');

  console.log(item, priority);

  // Get al entried as an Iterator
  const entries = formData.entries();
  console.log(entries);

  // Loop through entries
  for (let entry of entries) {
    console.log(entry[1]);
  }
}

form.addEventListener('submit', onSubmit2);


















});

























