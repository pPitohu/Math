let test = document.getElementById('test'); // Берем элемент test

let p = document.createElement('p'); // создание p внутри div с классом theme__ask
p.setAttribute('class', 'theme__ask');

let div = document.createElement('div'); // создание  div с классом theme__answer left column
div.setAttribute('class', 'theme__answer left column')

// Обьявление массива quest с тестом
let quest = [{
    text: "1. Какое вещество в количественном отношении занимает первое место среди химических веществ клетки?",
    answers: ["белки",
        "минеральные вещества",
        "вода",
        "углеводы",
    ],
    correctansw: [2]
},

{
    text: "2. Содержание воды в клетке составляет:",
    answers: ["10-20%",
        "20-50%",
        "50-70%",
        "20-90%",
    ],
    correctansw: [3]
},

{
    text: "3. Роль воды в клетке определяется следующими ее свойствами:",
    answers: ["малыми размерами молекул",
        "полярностью молекул",
        "способностью молекул соединяться друг с другом водородными связями",
        "малыми размерами молекул, полярностью молекул, способностью молекул соединяться друг с другом водородными связями ",
    ],
    correctansw: [3]
},
{
    text: "4. Вода обладает способностью растворять вещества, потому что:",
    answers: ["ее молекулы полярны",
        "атомы в ее молекуле соединены ионной связью",
        "между ее молекулами образуются водородные связи",
        " атомы в ее молекуле соединены ионной связью, между ее молекулами образуются водородные связи ",
    ],
    correctansw: [0]
},
{
    text: "5. Биологическая роль воды в клетке следующая:",
    answers: ["связывает кислород и углекислый газ",
        "является универсальным растворителем ",
        "является универсальным источником энергии ",
        " связывает кислород и углекислый газ, является универсальным растворителем",
    ],
    correctansw: [1]
},
{
    text: "6. Вода является универсальным растворителем:",
    answers: ["полярных веществ",
        "неполярных веществ",
        "веществ с полярными и неполярными группами ",
        " полярных веществ, неполярных веществ, веществ с полярными и неполярными группами ",
    ],
    correctansw: [0]
},
{
    text: "7. Растворимые в воде вещества называются:",
    answers: ["гидрофильными",
        "гидрофобными",
        "амфифильными",
        " амфотерными",
    ],
    correctansw: [0]
},
{
    text: "8. Нерастворимые в воде вещества называются:",
    answers: ["гидрофильными",
        "гидрофобными",
        "амфифильными ",
        " амфотерными ",
    ],
    correctansw: [1]
},
{
    text: "9. Частично растворимые в воде вещества называются:",
    answers: ["гидрофильными",
        "гидрофобными",
        "амфифильными",
        " амфотерными",
    ],
    correctansw: [2]
},
{
    text: "10. Свойствами воды являются:",
    answers: ["высокая теплопроводность и высокая теплоемкость",
        "высокая теплота парообразования ",
        "высокое поверхностное натяжение",
        "высокая теплопроводность и высокая теплоемкость, высокая теплота парообразования, высокое поверхностное натяжение",
    ],
    correctansw: [3]
}
]


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
                counterForGreen++; // увеличиваем счетчик верных ответов
                document.querySelector('.quest' + i + ' .allback > .theme__answer > .answ' + answnum[i].answ.find(index => index == quest[i].correctansw[j]) + '> p').setAttribute('class', 'answ green');
            } else {
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