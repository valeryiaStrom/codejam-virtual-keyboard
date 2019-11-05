let wrapper = document.createElement('div');
wrapper.className = 'wrapper';

let textarea = document.createElement('textarea');
textarea.className = 'output';

let keyboard = document.createElement('div');
keyboard.className = 'keyboard';

const row1 = [
  ['Backquote', '`', '~', 'ё', 'Ё'],
  ['Digit1', '1', '!', '1', '!'],
  ['Digit2', '2', '@', '2', '"'],
  ['Digit3', '3', '#', '3', '№'],
  ['Digit4', '4', '$', '4', ';'],
  ['Digit5', '5' ,'%' , '5' , '%'],
  ['Digit6', '6' ,'^', '6', ':'],
  ['Digit7', '7', '&', '7', '?'],
  ['Digit8', '8', '*', '8', '*'],
  ['Digit9', '9' ,'(', '9', '('],
  ['Digit0', '0', ')', '0', ')'],
  ['Minus', '-', '_', '-', '_'],
  ['Equal', '=', '+', '=', '+'],
  ['Backspace', 'Backspace', 'Backspace', 'Backspace', 'Backspace']
];

const row2 = [
  ['Tab', 'Tab', 'Tab', 'Tab', 'Tab'], 
  ['KeyQ', 'q', 'Q', 'й', 'Й'], 
  ['KeyW', 'w', 'W', 'ц', 'Ц'],
  ['KeyE', 'e', 'E', 'у', 'У'],
  ['KeyR', 'r', 'R', 'к', 'Л'],
  ['KeyT', 't', 'T', 'е', 'Е'],
  ['KeyY', 'y', 'Y', 'н', 'Н'],
  ['KeyU', 'u', 'U', 'г', 'Г'],
  ['KeyI', 'i', 'I', 'ш', 'Ш'],
  ['KeyO', 'o', 'O', 'щ', 'Щ'],
  ['KeyP', 'p', 'P', 'з', 'З'],
  ['BracketLeft', '[', '{', 'х', 'Х'],
  ['BracketRight', ']', '}', 'ъ', 'Ъ'],
  ['Backslash', '\\', '\|', '\\', '\/'],
  ['Delete', 'del', 'del', 'del', 'del']
];

const row3 = [
  ['CapsLock', 'Caps Lock', 'Caps Lock', 'Caps Lock', 'Caps Lock'], 
  ['KeyA', 'a', 'A', 'ф', 'Ф'], 
  ['KeyS', 's', 'S', 'ы', 'Ы'],
  ['KeyD', 'd', 'D', 'в', 'В'],
  ['KeyF', 'f', 'F', 'а', 'А'],
  ['KeyG', 'g', 'G', 'п', 'П'],
  ['KeyH', 'h', 'H', 'р', 'Р'],
  ['KeyJ', 'j', 'J', 'о', 'О'],
  ['KeyK', 'k', 'K', 'л', 'Л'],
  ['KeyL', 'l', 'L', 'д', 'Д'],
  ['Semicolon', ';', ':', 'ж', 'Ж'],
  ['Quote', '\'', '"', 'э', 'Э'],
  ['Enter', 'Enter', 'Enter', 'Enter', 'Enter'],
];

const row4 = [
  ['ShiftLeft', 'Shift', 'Shift', 'Shift', 'Shift'], 
  ['KeyZ', 'z', 'Z', 'я', 'Я'], 
  ['KeyX', 'x', 'X', 'ч', 'Ч'],
  ['KeyC', 'c', 'C', 'с', 'С'],
  ['KeyV', 'v', 'V', 'м', 'М'],
  ['KeyB', 'b', 'B', 'и', 'И'],
  ['KeyN', 'n', 'N', 'т', 'Т'],
  ['KeyM', 'm', 'M', 'ь', 'Ь'],
  ['Comma', ',', '<', 'б', 'Б'],
  ['Period', '.', '>', 'ю', 'Ю'],
  ['Slash', '/', '?', '.', ','],
  ['ArrowUp', '<i class="material-icons">keyboard_arrow_up</i>', '<i class="material-icons">keyboard_arrow_up</i>', '<i class="material-icons">keyboard_arrow_up</i>', '<i class="material-icons">keyboard_arrow_up</i>'],
  ['ShiftRight', 'Shift', 'Shift', 'Shift', 'Shift']
];

const row5 = [
  ['ControlLeft', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl'], 
  ['MetaLeft', 'Win', 'Win', 'Win', 'Win'], 
  ['AltLeft', 'Alt', 'Alt', 'Alt', 'Alt'],
  ['Space', '.', '.', '.', '.'],
  ['AltRight', 'Alt', 'Alt', 'Alt', 'Alt'],
  ['ArrowLeft', '<i class="material-icons">keyboard_arrow_left</i>', '<i class="material-icons">keyboard_arrow_left</i>', '<i class="material-icons">keyboard_arrow_left</i>', '<i class="material-icons">keyboard_arrow_left</i>'],
  ['ArrowBottom', '<i class="material-icons">keyboard_arrow_down</i>', '<i class="material-icons">keyboard_arrow_down</i>', '<i class="material-icons">keyboard_arrow_down</i>', '<i class="material-icons">keyboard_arrow_down</i>'],
  ['ArrowRight', '<i class="material-icons">keyboard_arrow_right</i>', '<i class="material-icons">keyboard_arrow_right</i>', '<i class="material-icons">keyboard_arrow_right</i>', '<i class="material-icons">keyboard_arrow_right</i>'],
  ['ControlRight', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl']
];

document.body.append(wrapper);
wrapper.prepend(textarea);
wrapper.append(keyboard);

for (let i = 0; i < 5; i++) {
  let row = document.createElement('div');
  row.className = 'row';
  keyboard.append(row);
}

let rows = document.querySelectorAll('.row');

for (let i = 0; i < 14; i++) {

  let key = document.createElement('div');
  key.classList = 'key';
  rows[0].append(key);

}

let firstRow = document.querySelectorAll('.row')[0];
let firstRowKeys = firstRow.getElementsByClassName('key');
firstRowKeys[firstRowKeys.length - 1].classList.add('key_backspace')


for (let i = 0; i < 15; i++) {

  let key = document.createElement('div');
  key.classList = 'key';
  rows[1].append(key);

}

let secondRow = document.querySelectorAll('.row')[1];
let secondRowKeys = secondRow.getElementsByClassName('key');
secondRowKeys[0].classList.add('key_tab');
secondRowKeys[secondRowKeys.length - 1].classList.add('key_delete');

for (let i = 0; i < 13; i++) {

  let key = document.createElement('div');
  key.classList = 'key';
  rows[2].append(key);

}

let thirdRow = document.querySelectorAll('.row')[2];
let thirdRowKeys = thirdRow.getElementsByClassName('key');
thirdRowKeys[0].classList.add('key_capslock');
thirdRowKeys[thirdRowKeys.length - 1].classList.add('key_enter');

for (let i = 0; i < 13; i++) {

  let key = document.createElement('div');
  key.classList = 'key';
  rows[3].append(key);

}

let fourthRow = document.querySelectorAll('.row')[3];
let fourthRowKeys = fourthRow.getElementsByClassName('key');
fourthRowKeys[0].classList.add('key_shift');
fourthRowKeys[fourthRowKeys.length - 2].classList.add('key_arrow');
fourthRowKeys[fourthRowKeys.length - 1].classList.add('key_shift-right');

for (let i = 0; i < 9; i++) {

  let key = document.createElement('div');
  key.classList = 'key';
  rows[4].append(key);

}

let fifthRow = document.querySelectorAll('.row')[4];
let fifthRowKeys = fifthRow.getElementsByClassName('key');
fifthRowKeys[0].classList.add('key_ctrl');
fifthRowKeys[1].classList.add('key_win');
fifthRowKeys[2].classList.add('key_alt');
fifthRowKeys[3].classList.add('key_space');
fifthRowKeys[4].classList.add('key_ctrl');

for (let i = 5; i <= 7; i++) {
  fifthRowKeys[i].classList.add('key_arrow');

}

fifthRowKeys[fifthRowKeys.length - 1].classList.add('key_ctrl');


//populate keyboard keys from row 1 with values
for (let i = 0; i < firstRowKeys.length; i++) {
  let spanEng = document.createElement('span');
  spanEng.classList.add('key_eng', row1[i][0]);
  firstRowKeys[i].prepend(spanEng);
  spanEng.insertAdjacentHTML('afterbegin', `<span class="case case_down">${row1[i][1]}</span>`);
  spanEng.insertAdjacentHTML('beforeend', `<span class="case case_up">${row1[i][2]}</span>`);

  let spanRu = document.createElement('span');
  spanRu.classList.add('key_ru', row1[i][0]);
  firstRowKeys[i].append(spanRu);
  spanRu.insertAdjacentHTML('afterbegin', `<span class="case case_down">${row1[i][3]}</span>`);
  spanRu.insertAdjacentHTML('beforeend', `<span class="case case_up">${row1[i][4]}</span>`);
}

//populate keyboard keys from row 2 with values
for (let i = 0; i < secondRowKeys.length; i++) {
  let spanEng = document.createElement('span');
  spanEng.classList.add('key_eng', row2[i][0]);
  secondRowKeys[i].prepend(spanEng);
  spanEng.insertAdjacentHTML('afterbegin', `<span class="case case_down">${row2[i][1]}</span>`);
  spanEng.insertAdjacentHTML('beforeend', `<span class="case case_up">${row2[i][2]}</span>`);

  let spanRu = document.createElement('span');
  spanRu.classList.add('key_ru', row2[i][0]);
  secondRowKeys[i].append(spanRu);
  spanRu.insertAdjacentHTML('afterbegin', `<span class="case case_down">${row2[i][3]}</span>`);
  spanRu.insertAdjacentHTML('beforeend', `<span class="case case_up">${row2[i][4]}</span>`);
}

//populate keyboard keys from row 3 with values
for (let i = 0; i < thirdRowKeys.length; i++) {
  let spanEng = document.createElement('span');
  spanEng.classList.add('key_eng', row3[i][0]);
  thirdRowKeys[i].prepend(spanEng);
  spanEng.insertAdjacentHTML('afterbegin', `<span class="case case_down">${row3[i][1]}</span>`);
  spanEng.insertAdjacentHTML('beforeend', `<span class="case case_up">${row3[i][2]}</span>`);

  let spanRu = document.createElement('span');
  spanRu.classList.add('key_ru', row3[i][0]);
  thirdRowKeys[i].append(spanRu);
  spanRu.insertAdjacentHTML('afterbegin', `<span class="case case_down">${row3[i][3]}</span>`);
  spanRu.insertAdjacentHTML('beforeend', `<span class="case case_up">${row3[i][4]}</span>`);
}

//populate keyboard keys from row 4 with values
for (let i = 0; i < fourthRowKeys.length; i++) {
  let spanEng = document.createElement('span');
  spanEng.classList.add('key_eng', row4[i][0]);
  fourthRowKeys[i].prepend(spanEng);
  spanEng.insertAdjacentHTML('afterbegin', `<span class="case case_down">${row4[i][1]}</span>`);
  spanEng.insertAdjacentHTML('beforeend', `<span class="case case_up">${row4[i][2]}</span>`);

  let spanRu = document.createElement('span');
  spanRu.classList.add('key_ru', row4[i][0]);
  fourthRowKeys[i].append(spanRu);
  spanRu.insertAdjacentHTML('afterbegin', `<span class="case case_down">${row4[i][3]}</span>`);
  spanRu.insertAdjacentHTML('beforeend', `<span class="case case_up">${row4[i][4]}</span>`);
}

//populate keyboard keys from row 5 with values
for (let i = 0; i < fifthRowKeys.length; i++) {
  let spanEng = document.createElement('span');
  spanEng.classList.add('key_eng', row5[i][0]);
  fifthRowKeys[i].prepend(spanEng);
  spanEng.insertAdjacentHTML('afterbegin', `<span class="case case_down">${row5[i][1]}</span>`);
  spanEng.insertAdjacentHTML('beforeend', `<span class="case case_up">${row5[i][2]}</span>`);

  let spanRu = document.createElement('span');
  spanRu.classList.add('key_ru', row5[i][0]);
  fifthRowKeys[i].append(spanRu);
  spanRu.insertAdjacentHTML('afterbegin', `<span class="case case_down">${row5[i][3]}</span>`);
  spanRu.insertAdjacentHTML('beforeend', `<span class="case case_up">${row5[i][4]}</span>`);
}

let keys = document.querySelectorAll('.key');
let isCapsLockPressed = false;
let isLanguageSwitched = false; 

function highlightKey(key) {
  key.classList.add('key_pressed');
 }

function deleteContent() {
  let startPosition = textarea.selectionStart;
  let endPosition = textarea.selectionEnd;
  if (startPosition === 0 && startPosition === endPosition) {
    textarea.focus();
    return;
  } else if (startPosition != 0 ) {
    if (startPosition === endPosition) {
      textarea.focus();
      let text = textarea.value;
      text = text.slice(0, startPosition-1) + text.slice(startPosition);
      textarea.value = text;
      textarea.setSelectionRange(startPosition-1, endPosition - 1);
    } else {
      textarea.focus();
      let text = textarea.value;
      text = text.slice(0, startPosition) + text.slice(endPosition);
      textarea.value = text;
      textarea.setSelectionRange(startPosition, startPosition);
    }
  }
}

function insertEnter() {
  let startPosition = textarea.selectionStart;
  let endPosition = textarea.selectionEnd;
  if (textarea.value === '') {
    textarea.focus();
    let text = textarea.value;
    text = '\n';
    textarea.value = text;
  } else {
    textarea.focus();
    let text = textarea.value;
    text = text.slice(0, startPosition) + '\n' + text.slice(endPosition);
    textarea.value = text;
    textarea.setSelectionRange(startPosition+1, startPosition+1);
  }
}

function insertSpace() {
  let startPosition = textarea.selectionStart;
  let endPosition = textarea.selectionEnd;
  if (textarea.value === '') {
    textarea.focus();
    let text = textarea.value;
    text = ' ';
    textarea.value = text;
  } else {
    textarea.focus();
    let text = textarea.value;
    text = text.slice(0, startPosition) + ' ' + text.slice(endPosition);
    textarea.value = text;
    textarea.setSelectionRange(startPosition+1, startPosition+1);
  }
}

function insertTab() {
  let startPosition = textarea.selectionStart;
  let endPosition = textarea.selectionEnd;
  if (textarea.value === '') {
    textarea.focus();
    let text = textarea.value;
    text = '  ';
    textarea.value = text;
  } else {
    textarea.focus();
    let text = textarea.value;
    text = text.slice(0, startPosition) + '  ' + text.slice(endPosition);
    textarea.value = text;
    textarea.setSelectionRange(startPosition+2, startPosition+2);
  }
}

function insertContent(content) {
  let startPosition = textarea.selectionStart;
  let endPosition = textarea.selectionEnd;
  if (textarea.value === '') {
    textarea.focus();
    let text = textarea.value;
    text = content;
    textarea.value = text;
  } else {
    textarea.focus();
    let text = textarea.value;
    text = text.slice(0, startPosition) + content + text.slice(endPosition);
    textarea.value = text;
    textarea.setSelectionRange(startPosition+1, startPosition+1);
  }
}

function moveToLeft() {
  textarea.focus();
        
  let startPosition = textarea.selectionStart;
  let endPosition = textarea.selectionEnd;

  if (endPosition === 0 && endPosition === startPosition) {
    textarea.setSelectionRange(0, 0);
  } else if (startPosition != 0 && startPosition === endPosition) {
    textarea.setSelectionRange(startPosition, endPosition - 1);
  } else {
    textarea.setSelectionRange(startPosition, startPosition);
  }
}

function moveToRight() {
  textarea.focus();

  let startPosition = textarea.selectionStart;
  let endPosition = textarea.selectionEnd;

  if (endPosition === textarea.textLength && endPosition === startPosition) {
    textarea.setSelectionRange(startPosition, endPosition);
  } else if (endPosition < textarea.textLength && endPosition === startPosition) {
    textarea.setSelectionRange(startPosition+1, endPosition+1);
  } else {
    textarea.setSelectionRange(endPosition, endPosition);
  }
}

//for real keyboard
document.addEventListener('keydown', function(event) {

  textarea.focus();
  event.preventDefault();

  if (event.code === 'Space') {
    insertSpace();
  }

  if (event.code === 'AltLeft' || event.code === 'AltRight') {
    textarea.focus();
  }

  if (event.code === 'MetaLeft') {
    textarea.focus();
  }

  if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
    if (event.ctrlKey === true) {
      if (isLanguageSwitched === false) {
        isLanguageSwitched = true; 

        if (isCapsLockPressed) {

          for (let i = 0; i < keys.length; i++) {

            keys[i].firstChild.firstChild.style.display = 'none';
            keys[i].firstChild.lastChild.style.display = 'none';
            keys[i].lastChild.firstChild.style.display = 'none';
            keys[i].lastChild.lastChild.style.display = 'inline';
          }
          
        } else {

          for (let i = 0; i < keys.length; i++) {

            keys[i].firstChild.firstChild.style.display = 'none';
            keys[i].firstChild.lastChild.style.display = 'none';
            keys[i].lastChild.lastChild.style.display = 'none';
            keys[i].lastChild.firstChild.style.display = 'inline';
          }
        }
      } else {
        isLanguageSwitched = false; 

        if (isCapsLockPressed) {
          for (let i = 0; i < keys.length; i++) {

            keys[i].lastChild.firstChild.style.display = 'none';
            keys[i].lastChild.lastChild.style.display = 'none';
            keys[i].firstChild.firstChild.style.display = 'none';
            keys[i].firstChild.lastChild.style.display = 'inline';
          }
        } else {

          for (let i = 0; i < keys.length; i++) {

            keys[i].lastChild.firstChild.style.display = 'none';
            keys[i].lastChild.lastChild.style.display = 'none';
            keys[i].firstChild.lastChild.style.display = 'none';
            keys[i].firstChild.firstChild.style.display = 'inline';
          }
        }
      }
    }
  } else if (event.code === 'ControlLeft' || event.code === 'ControlRight') {

    if (event.shiftKey === true) {
      if (isLanguageSwitched === false) {
        isLanguageSwitched = true;

        if (isCapsLockPressed) {

          for (let i = 0; i < keys.length; i++) {

            keys[i].firstChild.firstChild.style.display = 'none';
            keys[i].firstChild.lastChild.style.display = 'none';
            keys[i].lastChild.firstChild.style.display = 'none';
            keys[i].lastChild.lastChild.style.display = 'inline';
          }
          
        } else {

          for (let i = 0; i < keys.length; i++) {

            keys[i].firstChild.firstChild.style.display = 'none';
            keys[i].firstChild.lastChild.style.display = 'none';
            keys[i].lastChild.lastChild.style.display = 'none';
            keys[i].lastChild.firstChild.style.display = 'inline';
          }
        }


      } else {
        isLanguageSwitched = false;

        if (isCapsLockPressed) {
          for (let i = 0; i < keys.length; i++) {

            keys[i].lastChild.firstChild.style.display = 'none';
            keys[i].lastChild.lastChild.style.display = 'none';
            keys[i].firstChild.firstChild.style.display = 'none';
            keys[i].firstChild.lastChild.style.display = 'inline';
          }
        } else {

          for (let i = 0; i < keys.length; i++) {

            keys[i].lastChild.firstChild.style.display = 'none';
            keys[i].lastChild.lastChild.style.display = 'none';
            keys[i].firstChild.lastChild.style.display = 'none';
            keys[i].firstChild.firstChild.style.display = 'inline';
          }
        }


      }
    }
  }

  if (event.code === 'Tab') {
    insertTab();
  }

  if (event.code === 'Backspace' || event.code === 'Delete') {
    deleteContent();
  }

  if (event.code === 'Enter') {
    insertEnter();
  }

  if (event.code === 'CapsLock') {
    if (isCapsLockPressed === false) {
      
      isCapsLockPressed = true;
      
      if (isLanguageSwitched) {
      
        for (let i = 0; i < keys.length; i++) {

          keys[i].firstChild.firstChild.style.display = 'none';
          keys[i].firstChild.lastChild.style.display = 'none';
          keys[i].lastChild.firstChild.style.display = 'none';
          keys[i].lastChild.lastChild.style.display = 'inline';
        }

      } else {
        
        for (let i = 0; i < keys.length; i++) {

          keys[i].lastChild.firstChild.style.display = 'none';
          keys[i].lastChild.lastChild.style.display = 'none';
          keys[i].firstChild.firstChild.style.display = 'none';
          keys[i].firstChild.lastChild.style.display = 'inline';
        }
      }
    } else {
      
      isCapsLockPressed = false;

      if (isLanguageSwitched) {
        
        for (let i = 0; i < keys.length; i++) {

          keys[i].firstChild.firstChild.style.display = 'none';
          keys[i].firstChild.lastChild.style.display = 'none';
          keys[i].lastChild.lastChild.style.display = 'none';
          keys[i].lastChild.firstChild.style.display = 'inline';
        }
      } else {

        for (let i = 0; i < keys.length; i++) {

          keys[i].lastChild.firstChild.style.display = 'none';
          keys[i].lastChild.lastChild.style.display = 'none';
          keys[i].firstChild.lastChild.style.display = 'none';
          keys[i].firstChild.firstChild.style.display = 'inline';
        }
      }
    }
  }

  if (event.code === 'ArrowLeft') {
    moveToLeft();
  }

  if (event.code === 'ArrowRight') {
    moveToRight();
  }

  if (event.code === 'ArrowUp') {
    textarea.focus();
  }

  if (event.code === 'ArrowBottom') {
    textarea.focus();
  }

  if (event.code != 'Space' && event.code != 'ShiftLeft' && event.code != 'ShiftRight' && event.code != 'ControlLeft' && event.code != 'ControlRight' && event.code != 'Tab' && event.code != 'Backspace' && event.code != 'Delete' && event.code != 'Enter' && event.code != 'CapsLock' && event.code != 'ArrowLeft' && event.code != 'ArrowRight' && event.code != 'ArrowUp' && event.code != 'ArrowBottom' && event.code != 'AltLeft' && event.code != 'AltRight') {

    let input;

    if (isLanguageSwitched === false) {

      if (isCapsLockPressed === true) {
          
        for (let i = 0; i < keys.length; i++) {

          if (keys[i].innerHTML.includes(event.code)) {
            input = keys[i].firstChild.lastChild.textContent;  
          }
        }
      } else {

        for (let i = 0; i < keys.length; i++) {

          if (keys[i].innerHTML.includes(event.code)) {
            input = keys[i].firstChild.firstChild.textContent;             
          }
        }
      }

    } else {
        if (isCapsLockPressed === true) {

          for (let i = 0; i < keys.length; i++) {

            if (keys[i].innerHTML.includes(event.code)) {
              input = keys[i].lastChild.lastChild.textContent;         
            }
          }
        } else {

          for (let i = 0; i < keys.length; i++) {

            if (keys[i].innerHTML.includes(event.code)) {
              input = keys[i].lastChild.firstChild.textContent;           
            }
          }
        }
    }
 
    insertContent(input);

  }

  for (let i = 0; i < keys.length; i++) {

    if (keys[i].innerHTML.includes(event.code)) {
      highlightKey(keys[i]);
      document.addEventListener('keyup', function(event) {
        keys[i].classList.remove('key_pressed');
      })
    }
  }
})

//for virtual keyboard
for (let i = 0; i < keys.length; i++) {
  keys[i].addEventListener('click', function(event) {
    if (keys[i].classList.contains('key_space')) {
      insertSpace();
    } else if (keys[i].classList.contains('key_tab')) {
        insertTab();
    } else if (keys[i].classList.contains('key_alt')) {
        textarea.focus();
    } else if (keys[i].classList.contains('key_win')) {

      if (isLanguageSwitched) {

        isLanguageSwitched = false;

        if (isCapsLockPressed) {
          
          for (let j = 0; j < keys.length; j++) {

            keys[j].lastChild.firstChild.style.display = 'none';
            keys[j].lastChild.lastChild.style.display = 'none';
            keys[j].firstChild.firstChild.style.display = 'none';
            keys[j].firstChild.lastChild.style.display = 'inline';

          }
        } else {
          
          for (let j = 0; j < keys.length; j++) {
              
            keys[j].lastChild.firstChild.style.display = 'none';
            keys[j].lastChild.lastChild.style.display = 'none';
            keys[j].firstChild.lastChild.style.display = 'none';
            keys[j].firstChild.firstChild.style.display = 'inline';

          }
        }

      } else {
        
        isLanguageSwitched = true;
        
        if (isCapsLockPressed) {
          
          for (let j = 0; j < keys.length; j++) {

            keys[j].firstChild.firstChild.style.display = 'none';
            keys[j].firstChild.lastChild.style.display = 'none';
            keys[j].lastChild.firstChild.style.display = 'none';
            keys[j].lastChild.lastChild.style.display = 'inline';
          }

        } else {
          
          for (let j = 0; j < keys.length; j++) {
 
            keys[j].firstChild.firstChild.style.display = 'none';
            keys[j].firstChild.lastChild.style.display = 'none';
            keys[j].lastChild.lastChild.style.display = 'none';
            keys[j].lastChild.firstChild.style.display = 'inline';

          }
        }
      }

    } else if (keys[i].classList.contains('key_shift') || keys[i].classList.contains('key_shift-right')) {

      if (event.ctrlKey === true) {
        if (isLanguageSwitched === false) {

          isLanguageSwitched = true;

          if (isCapsLockPressed) {

            for (let j = 0; j < keys.length; j++) {

              keys[j].firstChild.firstChild.style.display = 'none';
              keys[j].firstChild.lastChild.style.display = 'none';
              keys[j].lastChild.firstChild.style.display = 'none';
              keys[j].lastChild.lastChild.style.display = 'inline';
            }

          } else {

            for (let j = 0; j < keys.length; j++) {
 
              keys[j].firstChild.firstChild.style.display = 'none';
              keys[j].firstChild.lastChild.style.display = 'none';
              keys[j].lastChild.lastChild.style.display = 'none';
              keys[j].lastChild.firstChild.style.display = 'inline';

            }
          }
        } else {

          isLanguageSwitched = false;

          if (isCapsLockPressed) {

            for (let j = 0; j < keys.length; j++) {

              keys[j].lastChild.firstChild.style.display = 'none';
              keys[j].lastChild.lastChild.style.display = 'none';
              keys[j].firstChild.firstChild.style.display = 'none';
              keys[j].firstChild.lastChild.style.display = 'inline';

            }

          } else {

            for (let j = 0; j < keys.length; j++) {
              
              keys[j].lastChild.firstChild.style.display = 'none';
              keys[j].lastChild.lastChild.style.display = 'none';
              keys[j].firstChild.lastChild.style.display = 'none';
              keys[j].firstChild.firstChild.style.display = 'inline';

            }
          }
        }
      }

    } else if (keys[i].classList.contains('key_ctrl')) {

      if (event.shiftKey === true) {
        if (isLanguageSwitched === false) {
          isLanguageSwitched = true;

          if (isCapsLockPressed) {
            for (let j = 0; j < keys.length; j++) {
              
              keys[j].firstChild.firstChild.style.display = 'none';
              keys[j].firstChild.lastChild.style.display = 'none';
              keys[j].lastChild.firstChild.style.display = 'none';
              keys[j].lastChild.lastChild.style.display = 'inline';

            }

          } else {

            for (let j = 0; j < keys.length; j++) {

              keys[j].firstChild.firstChild.style.display = 'none';
              keys[j].firstChild.lastChild.style.display = 'none';
              keys[j].lastChild.lastChild.style.display = 'none';
              keys[j].lastChild.firstChild.style.display = 'inline';

            }

          }

        } else {
          isLanguageSwitched = false;

          if (isCapsLockPressed) {

            for (let j = 0; j < keys.length; j++) {

              
              keys[j].lastChild.firstChild.style.display = 'none';
              keys[j].lastChild.lastChild.style.display = 'none';
              keys[j].firstChild.firstChild.style.display = 'none';
              keys[j].firstChild.lastChild.style.display = 'inline';

            }

          } else {

            for (let j = 0; j < keys.length; j++) {

              keys[j].lastChild.firstChild.style.display = 'none';
              keys[j].lastChild.lastChild.style.display = 'none';
              keys[j].firstChild.lastChild.style.display = 'none';
              keys[j].firstChild.firstChild.style.display = 'inline';

            }
          }
        }
      }

    } else if (keys[i].classList.contains('key_backspace') || keys[i].classList.contains('key_delete')) {
      deleteContent();
    } else if (keys[i].classList.contains('key_enter')) {
      insertEnter();
    } else if (keys[i].classList.contains('key_capslock')) {
        if (isCapsLockPressed === false) {
          isCapsLockPressed = true;

          if (isLanguageSwitched) {

            for (let j = 0; j < keys.length; j++) {
              
              keys[j].firstChild.firstChild.style.display = 'none';
              keys[j].firstChild.lastChild.style.display = 'none';
              keys[j].lastChild.firstChild.style.display = 'none';
              keys[j].lastChild.lastChild.style.display = 'inline';

            }

          } else {

            for (let j = 0; j < keys.length; j++) {

              keys[j].lastChild.firstChild.style.display = 'none';
              keys[j].lastChild.lastChild.style.display = 'none';
              keys[j].firstChild.firstChild.style.display = 'none';
              keys[j].firstChild.lastChild.style.display = 'inline';

            }
          }
        } else {
          isCapsLockPressed = false;

          if (isLanguageSwitched) {

            for (let j = 0; j < keys.length; j++) {

              keys[j].firstChild.firstChild.style.display = 'none';
              keys[j].firstChild.lastChild.style.display = 'none';
              keys[j].lastChild.lastChild.style.display = 'none';
              keys[j].lastChild.firstChild.style.display = 'inline';

            }

          } else {

            for (let j = 0; j < keys.length; j++) {

              keys[j].lastChild.firstChild.style.display = 'none';
              keys[j].lastChild.lastChild.style.display = 'none';
              keys[j].firstChild.lastChild.style.display = 'none';
              keys[j].firstChild.firstChild.style.display = 'inline';

            }
          }
        }
    } else if (keys[i].classList.contains('key_arrow')) {
        if (keys[i].firstChild.classList.contains('ArrowLeft')) {
          moveToLeft()
        } else if (keys[i].firstChild.classList.contains('ArrowRight')) {
          moveToRight();
        } else if (keys[i].firstChild.classList.contains('ArrowUp')) {
          textarea.focus();
        } else if (keys[i].firstChild.classList.contains('ArrowBottom')) {
          textarea.focus();
        }    
  
    } else {
      let input;

      if (isLanguageSwitched === false) {

        if (isCapsLockPressed === true) {
          input = keys[i].firstChild.lastChild.textContent;
        } else {
          input = keys[i].firstChild.firstChild.textContent;
        }

      } else {
        if (isCapsLockPressed === true) {
          input = keys[i].lastChild.lastChild.textContent;
        } else {
          input = keys[i].lastChild.firstChild.textContent;
        }
      }     
      insertContent(input);
    }   
  });
}






