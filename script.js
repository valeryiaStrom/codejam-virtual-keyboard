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
  ['ArrowUp', 'ArrUp', 'ArrUp', 'ArrUp', 'ArrUp'],
  ['ShiftRight', 'Shift', 'Shift', 'Shift', 'Shift']
];

const row5 = [
  ['ControlLeft', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl'], 
  ['MetaLeft', 'Win', 'Win', 'Win', 'Win'], 
  ['AltLeft', 'Alt', 'Alt', 'Alt', 'Alt'],
  ['Space', '.', '.', '.', '.'],
  ['AltRight', 'Alt', 'Alt', 'Alt', 'Alt'],
  ['ArrowLeft', 'ArrLf', 'ArrLf', 'ArrLf', 'ArrLf'],
  ['ArrowBottom', 'ArrBt', 'ArrBt', 'ArrBt', 'ArrBt'],
  ['ArrowRight', 'ArrRt', 'ArrRt', 'ьArrRt', 'ArrRt'],
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

function insertText(text) {
  if (textarea.innerHTML === '') {
    textarea.innerHTML = text;
  } else {
    textarea.innerHTML = textarea.innerHTML + text;
  }
}

function deleteText() {
  if (textarea.innerHTML != '') {
    textarea.innerHTML = textarea.innerHTML.slice(0, -1);
  }
}

function highlightKey(key) {
 key.classList.add('key_pressed');
}

let keys = document.querySelectorAll('.key');

document.addEventListener('keydown', function(event) {
  if (event.key != 'Tab' && event.key != 'Shift' && event.key != 'Control' && event.key != 'Alt' && event.key != 'Backspace' && event.key != 'Delete' && event.key != 'CapsLock')  {
    insertText(event.key);
  }

  if (event.key === 'Backspace' || event.key === 'Delete') {
    deleteText();
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




