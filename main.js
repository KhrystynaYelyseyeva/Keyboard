/*  Проект. Дан input .i-11. Используя знания html и css нарисуйте клавиатуру (можно схематически). Изображение должно содержать числа, символьные клавиши, пробел, enter, caps lock, shift, tab, alt. При вводе текста в input в момент нажатия клавиши - затемняйте ее, в момент отпускания - возвращайте к первоначальному состоянию. Аналогично при нажатии enter, space, alt, shift, ctrl. Затемнение реализуйте через добавление класса CSS. Для удобства рекомендую каждой клавише добавить атрибут data с символом. Если нажата клавиша caps lock - то присвоить ей затемнение, которое работает до последующего отжатия клавиши. */


function t11() {
    let key = document.querySelector(`.${event.code}`);
    key.classList.add('active-div');
}

function t12() {
    let key = document.querySelector(`.${event.code}`);
    key.classList.remove('active-div');
}

document.querySelector(".i-11").onkeydown = t11;
document.querySelector(".i-11").onkeyup = t12;


