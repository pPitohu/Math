let test = document.getElementById('test'); // Берем элемент test

let p = document.createElement('p'); // создание p внутри div с классом theme__ask
p.setAttribute('class', 'theme__ask');

let div = document.createElement('div'); // создание  div с классом theme__answer left column
div.setAttribute('class', 'theme__answer left column')

// Обьявление массива quest с тестом
let quest = [{
    text: "1. Сумма корней уравнения $$\\tg 2x=\\ctg 3x$$, принадлежащих промежутку [$$\\frac{\\pi}{2};\\pi$$], равна:", 
    answers: [
        "1) $$\\frac{3\\pi}{2} $$",
        "2) $$\\frac{16\\pi}{5} $$",
        "3) $$\\frac{8\\pi}{5} $$",
        "4) $$\\frac{7\\pi}{10} $$",
        "5) $$\\frac{9\\pi}{10} $$"
    ],
    correctansw: [0]
},


{
    text: "2. Количество  различных  корней уравнения  $$\\sin 5x\\cos x= \\sin 4x $$ на промежутке [$$\\frac{3\\pi}{2};2\\pi$$], равно:",
    answers: [
        "1) 4",
        "2) 6",
        "3) 7",
        "4) 5",
        "5) 3"
    ],
    correctansw: [2]
},


{
    text: "3. Количество корней уравнения $$\\ctg x-\\sqrt{\\cos x}=0 $$, принадлежащих отрезку [$$-\\frac{\\pi}{2};\\frac{5\\pi}{2}$$], равно:",
    answers: [
        "1) 6",
        "2) 4",
        "3) 7",
        "4) 5",
        "5) 3"
    ],
    correctansw: [0]
},


{
    text: "4. Найти наибольшее отрицательное решение уравнения $$\\sin 3x - \\sin 7x =\\sqrt{3}\\sin 2x$$:",
    answers: [
        "1) $$-102^{\\circ} $$",
        "2) $$-60^{\\circ} $$",
        "3) $$-30^{\\circ} $$",
        "4) $$-180^{\\circ} $$",
        "5) $$-6^{\\circ} $$"
    ],
    correctansw: [1]
},


{
    text: "5. Найти наименьшее положительное решение уравнения $$\\sin 3x=\\cos 2x $$:",
    answers: [
        "1) $$18^{\\circ} $$",
        "2) $$90^{\\circ} $$",
        "3) $$9^{\\circ} $$",
        "4) $$36^{\\circ} $$",
        "5) $$108^{\\circ} $$"
    ],
    correctansw: [3]
},
{
    text: "6. Найти на интервале ($$90^{\\circ};180^{\\circ} $$) решение уравнения $$\\sin x\\cos 35^{\\circ}-\\cos x\\sin 35^{\\circ}=\\frac{\\sqrt{2}}{2} $$:",
    answers: [
        "1) $$170^{\\circ} $$",
        "2) $$100^{\\circ} $$",
        "3) $$155^{\\circ} $$",
        "4) $$175^{\\circ} $$",
        "5) $$115^{\\circ} $$"
    ],
    correctansw: [1]
},
{
    text: "7. Найти наименьшее положительное решение уравнения $$\\sin x+\\sin 3x=\\sin 2x $$:",
    answers: [
        "1) $$60^{\\circ} $$",
        "2) $$90^{\\circ} $$",
        "3) $$30^{\\circ} $$",
        "4) $$120^{\\circ} $$",
        "5) $$45^{\\circ} $$"
    ],
    correctansw: [2]
},
{
    text: "8. Найти решение уравнения $$\\cos(3x +270^{\\circ})=\\sin(x+270^{\\circ})$$ на интервале [$$40^{\\circ};90^{\\circ}$$]:",
    answers: [
        "1) $$80^{\\circ} $$",
        "2) $$60^{\\circ} $$",
        "3) $$45^{\\circ} $$",
        "4) $$75^{\\circ} $$",
        "5) $$85^{\\circ} $$"
    ],
    correctansw: [0]
},
{
    text: "9. Найти решение уравнения $$\\cos 3x=\\sin 2x $$ на интервале [$$75^{\\circ};150^{\\circ}$$]:",
    answers: [
        "1) $$80^{\\circ} $$",
        "2) $$135^{\\circ} $$",
        "3) $$120^{\\circ} $$",
        "4) $$90^{\\circ} $$",
        "5) $$140^{\\circ} $$"
    ],
    correctansw: [3]
},
{
    text: "10. Найти наибольшее отрицательное решение уравнения $$2\\cos 2x - 4\\cos x=1 $$:",
    answers: [
        "1) $$-150^{\\circ} $$",
        "2) $$-30^{\\circ} $$",
        "3) $$-60^{\\circ} $$",
        "4) $$-120^{\\circ} $$",
        "5) $$-45^{\\circ} $$"
    ],
    correctansw: [0]
}]


// Функция для создания элемента fragment
function createlist() {
    let fragment = new DocumentFragment(); // создание нового фрагмента в документе

    for (let i = 0; i <= quest.length - 1; i++) { // Добавление в fragment элементов li (p, div(label, span, input))

        let li = document.createElement('li');
        li.setAttribute('class', 'left column quest' + i);

        let p = document.createElement('p');
        p.setAttribute('class', 'theme__ask');
        p.innerHTML = quest[i].text;

        let div = document.createElement('div');
        div.setAttribute('class', 'theme__answer left column');

        let allback = document.createElement('div');
        allback.setAttribute('class', 'allback');

        for (let z = 0; z <= quest[i].answers.length - 1; z++) {
            let back = document.createElement('div');
            back.setAttribute('class', 'back');

            let label = document.createElement('label');
            label.setAttribute('class', 'answer__check left answ' + z);
            label.innerHTML = "<p class=\"answ\">" + quest[i].answers[z] + "</p>";

            let input = document.createElement('input');
            input.setAttribute('class', 'check__input');
            input.setAttribute('type', 'checkbox')

            let span = document.createElement('span');
            span.setAttribute('class', 'check__box')

            label.append(input);
            label.append(span);

            label.append(back);
            div.append(label);
        }

        allback.append(p);
        allback.append(div);
        li.append(allback);
        fragment.append(li);
    }

    return fragment; // Возвращение значения функции createlist()
}
test.append(createlist()); // Добавление в text всех созданых элементов

// Проверка правильности ответов

function checktest() {
    let butt = document.querySelector('.test__button');
    butt.disabled = true;
    butt.setAttribute('class','test__button disable');
    let answnum = [];
    for (let k = 0; k < quest.length; k++) { // Просматриваем каждый вопрос
        answnum.push({ answ: [] });

        for (let y = 0; y < quest[k].answers.length; y++) { // проверяем в каждом вопросе кол-во и номер ответов
            let questnum = document.querySelector('.quest' + k + ' .allback > .theme__answer > .answ' + y + ' > input[type=checkbox]');
            if (questnum.checked) {
                answnum[k].answ.push(y);
            }
        }
    }

    let counterForGreen = 0;
    let counterForRed = 0;

    for (let i = 0; i < quest.length; i++) { // перебор ячеек массива для каждого вопроса
        for (let j = 0; j < answnum[i].answ.length; j++) { // перебор на содержание элементов из ответа пользователя в правильном ответе
            if (quest[i].correctansw.includes(answnum[i].answ.find(index => index == quest[i].correctansw[j]))) { // если этот элемент ответа есть среди правильных, то выделется зеленым
                 // если правильно красим в зеленый
                counterForGreen++; // увеличиваем счетчик верных ответов
                document.querySelector('.quest' + i + ' .allback > .theme__answer > .answ' + answnum[i].answ.find(index => index == quest[i].correctansw[j]) + '> p').setAttribute('class', 'answ green');
            } else {
                // если не правильно красим в красный
                for (let m = 0; m < quest[i].answers.length; m++) {
                    let checkans = document.querySelector('.quest' + i + ' .allback > .theme__answer > .answ' + m + ' > input[type=checkbox]');
                    if (checkans.checked && !(quest[i].correctansw.includes(answnum[i].answ.find(index => index == quest[i].correctansw[j])))) {
                        document.querySelector('.quest' + i + ' .allback > .theme__answer > .answ' + m + '> p').setAttribute('class', 'answ red'); 
                        counterForRed++; // увеличиваем счетчик ошибок
                    }
                }

            }
        }

        for (let j = 0; j < quest[i].correctansw.length; j++) { // перебор на содержание элементов из правильного ответа в ответе пользователя
            if (!(answnum[i].answ.includes(quest[i].correctansw.find(index => index == answnum[i].answ[j])))) {
                document.querySelector('.quest' + i + ' .allback > .theme__answer > .answ' + quest[i].correctansw.find(index => index == quest[i].correctansw[j]) + ' > p').setAttribute('class', 'answ gray');
                counterForRed++; // и засчитать это как ошибку:  увеличиваем счетчик ошибок
            }
        }
        if (counterForGreen == 0) { // если вообще нет верных ответов, то выделить вопрос красным
            document.querySelector('.quest' + i + ' > .allback').setAttribute('class', 'allback allred');
        } else if (counterForRed > 0) { // если есть и верные ответы и ошибки, то выделить вопрос желтым
            document.querySelector('.quest' + i + ' > .allback').setAttribute('class', 'allback yellow');
        } else { // если все ответы верные, то выделить вопрос зеленым
            document.querySelector('.quest' + i + ' > .allback').setAttribute('class', 'allback allgreen');
        }
        counterForGreen = 0; // обнуляем счетчик верных ответов для следующего вопроса
        counterForRed = 0; // обнуляем счетчик ошибок для следующего вопроса
    }


}