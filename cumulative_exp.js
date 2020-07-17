var shuffleSequence = seq("setcounter", "intro", "instructions", sepWith("sep", seq("practice", rshuffle(rshuffle("filler-GOOD", "filler-BAD"), rshuffle("has_D", "no_D")))));
var practiceItemTypes = ["practice"];
var practiceItemMessage = "Тренировочные предложения";
var completionMessage = "Эксперимент завершён, результаты сохранены на сервере. Спасибо за участие!";

var defaults = [
    "Separator", {
        transfer: 1000,
        ignoreFailure: true,
        normalMessage: "Загрузка следующего предложения...",
    },
    "DashedSentence", {
        mode: "self-paced reading"
    },
    "DashedAcceptabilityJudgment", {
        q: "Оцените только что прочитанное предложение по шкале от 1 «ужасно, так не говорят» до 7 «отлично, так можно сказать».",
        as: ["1", "2", "3", "4", "5", "6", "7"],
        presentAsScale: true,
        leftComment: "плохо",
        rightComment: "хорошо",
        mode: "speeded acceptability",
        wordTime: 2000
    },
    "Message", {
        hideProgressBar: true
    },
    "Form", {
        hideProgressBar: true,
        continueOnReturn: true,
        saveReactionTime: true
    }
];

var items = [
    ["sep", "Separator", { }],
    ["setcounter", "__SetCounter__", { }],
    ["intro", "Form", {
        html: { include: "intro.html" },
        validators: {
            age: function (s) { if (s.match(/^\d+$/)) return true; else return "Неправильное значение возраста: \u2018age\u2019"; }
        }
    } ],
    ["instructions", "Message", {html: { include: "instructions.html" }} ],

    //
    // Шесть тестовых предложений
    //
                
    ["practice", "DashedSentence", {s: "Это тренировочные предложения, которые позволят вам привыкнуть к такому способу чтения и оценке предложений."}],
    ["practice", "DashedSentence", {s: "Все испытуемые лингвистов любят проходить забавные эксперименты со смешными стимулами."},
                 "Question", {hasCorrect: false, randomOrder: false,
                              q: "Вы — испытуемый лингвистов. Вы любите проходить эксперименты?",
                              as: ["Да", "Очень!"]}],
    ["practice", "DashedSentence", {s: "Каждому следующему предложению нужно будет поставить оценку по шкале от 1 до 7."}],
    ["practice", "DashedAcceptabilityJudgment", {s: "Этому предложению нужно поставить высокую оценку, в нём всё хорошо."}],
    ["practice", "DashedAcceptabilityJudgment", {s: "Предложение это ужасный, ставить единица нужно, тут всё крайне плохо."}],
    ["practice", "DashedAcceptabilityJudgment", {s: "Это последнее тренировочное предложение, после которого начнётся эксперимент."}],
    ["practice", "FlashSentence", {s: "Мы начинаем!"}],
    
    //16 предложений с наличием/отсутствием D-элемента
    
    [["has_D", 1],  "DashedAcceptabilityJudgment", {s: "Такие коврики ткут даже из полиэтиленовых пакетов – одна бабушка насобирала их в реке!"},
                    "Question", {hasCorrect: true, randomOrder: true,
                    q: "Что ткут из полиэтилена?",
                    as: ["коврики", "шубы", "шторы"]}]
    [["no_D", 1],   "DashedAcceptabilityJudgment", {s: "Такие коврики ткут даже из полиэтилена - одна бабушка насобирала пакетов в реке!"},
                    "Question", {hasCorrect: true, randomOrder: true,
                    q: "Что ткут из полиэтилена?",
                    as: ["коврики", "шубы", "шторы"]}],

    [["has_D", 2],  "DashedAcceptabilityJudgment", {s: "Я решила попробовать их приготовить, и насобирала этих ярких грибов."},
                    "Question", {hasCorrect: true, randomOrder: true,
                    q: "Какие грибы были собраны?",
                    as: ["яркие", "белые", "вкусные"]}],
    [["no_D", 2],   "DashedAcceptabilityJudgment", {s: "Я решила попробоавть их приготовить, и насобирала для этого ярких грибов."},
                    "Question", {hasCorrect: true, randomOrder: true,
                    q: "Какие грибы были собраны?",
                    as: ["яркие", "белые", "вкусные"]}],

    [["has_D", 3],  "DashedAcceptabilityJudgment", {s: "Кажется, будто герой другой пьесы, пытаясь изобрести вечный двигатель, напридумывал этих милых безделиц."},
                    "Question", {hasCorrect: true, randomOrder: true,
                    q: "Герой чего пытался изобрести вечный двигатель??",
                    as: ["другой пьесы", "другой постановки", "другого фильма"]}],
    [["no_D", 3],   "DashedAcceptabilityJudgment", {s: "Кажется, будто герой другой пьесы, пытаясь изобрести вечный двигатель, напридумывал милых безделиц."},
                    "Question", {hasCorrect: true, randomOrder: true,
                    q: "Герой чего пытался изобрести вечный двигатель??",
                    as: ["другой пьесы", "другой постановки", "другого фильма"]}],

    [["has_D", 4],  "DashedAcceptabilityJudgment", {s: "Мне кажется, что он просто напридумывал этих слов прямо сейчас."},
                    "Question", {hasCorrect: true, randomOrder: true,
                    q: "Чего он напридумывал?",
                    as: ["слов", "небылиц", "россказней"]}],
    [["no_D", 4],   "DashedAcceptabilityJudgment", {s: "Мне кажется, что он просто напридумывал слов прямо сейчас, чтобы нас обмануть."},
                    "Question", {hasCorrect: true, randomOrder: true,
                    q: "Чего он напридумывал?",
                    as: ["слов", "небылиц", "россказней"]}],

    [["has_D", 5],  "DashedAcceptabilityJudgment", {s: "Дочка освоила планшет и скорее всего наприглашала вас куда ни попадя."},
                    "Question", {hasCorrect: true, randomOrder: true,
                    q: "Что освоила дочка?",
                    as: ["планшет", "смартфон", "компьютер"]}],
    [["no_D", 5],   "DashedAcceptabilityJudgment", {s: "Дочка освоила планшет и скорее всего наприглашала друзей куда ни попадя."},
                    "Question", {hasCorrect: true, randomOrder: true,
                    q: "Что освоила дочка?",
                    as: ["планшет", "смартфон", "компьютер"]}],

    [["has_D", 6],  "DashedAcceptabilityJudgment", {s: "На эпизодические роли Люк Бессон наприглашал своих друзей-режиссёров."},
                    "Question", {hasCorrect: true, randomOrder: true,
                    q: "На какие роли Люк Бессон приглашал своих друзей?",
                    as: ["эпизодические", "второстепенные", "второго плана"]}],
    [["no_D", 6],   "DashedAcceptabilityJudgment", {s: "На эпизодические роли Люк Бессон наприглашал друзей-режиссёров."},
                    "Question", {hasCorrect: true, randomOrder: true,
                    q: "На какие роли Люк Бессон приглашал своих друзей?",
                    as: ["эпизодические", "второстепенные", "второго плана"]}], 

    [["has_D", 7],  "DashedAcceptabilityJudgment", {s: "Я по твоей ссылке и с широтой русской души назаказывала тех трав, что по описанию мне понравились."},
                    "Question", {hasCorrect: true, randomOrder: true,
                    q: "Что понравилось по описанию?",
                    as: ["травы", "грибы", "сладости"]}],
    [["no_D", 7],   "DashedAcceptabilityJudgment", {s: "Я по твоей ссылке и с широтой русской души назаказывала трав, которые по описанию мне понравились"},
                    "Question", {hasCorrect: true, randomOrder: true,
                    q: "Что ткут из полиэтилена?",
                    as: ["коврики", "шубы", "шторы"]}],

    [["has_D", 8],  "DashedAcceptabilityJudgment", {s: "Навезли нас сюда со всей страны, а потом бросили."},
                    "Question", {hasCorrect: true, randomOrder: true,
                    q: "Что ткут из полиэтилена?",
                    as: ["коврики", "шубы", "шторы"]}],
    [["no_D", 8],   "DashedAcceptabilityJudgment", {s: "Навезли людей сюда со всей страны, а потом бросили."},
                    "Question", {hasCorrect: true, randomOrder: true,
                    q: "Что ткут из полиэтилена?",
                    as: ["коврики", "шубы", "шторы"]}],


    //16 пар филлеров 

    ["filler-GOOD", "DashedAcceptabilityJudgment", {s: "Этот красивый мальчик хорошо рисует, прям как да Винчи"}],
    ["filler-BAD", "DashedAcceptabilityJudgment", {s: "Этот красивый девочка хорошо рисует, прям как да Винчи"}],

    ["filler-GOOD", "DashedAcceptabilityJudgment", {s: "На улице дрянная погода. Моросит."}],
    ["filler-BAD", "DashedAcceptabilityJudgment", {s: "На улице дрянная погода. Оно моросит."}],

    ["filler-GOOD", "DashedAcceptabilityJudgment", {s: "Кого лектор наругал, а семинарист похвалил?"}],
    ["filler-BAD", "DashedAcceptabilityJudgment", {s: "Кого лектор наругал, а семинарист поставил 5?"}],

    ["filler-GOOD", "DashedAcceptabilityJudgment", {s: "Мне кажется, мы нашли что-то невероятное, на этом можно заработать миллионы!"}],
    ["filler-BAD", "DashedAcceptabilityJudgment", {s: "Мне кажется, мы нашли что-либо невероятное, на этом можно заработать миллионы!"}],

    ["filler-GOOD", "DashedAcceptabilityJudgment", {s: "Эти дураки всё сломали ещё вчера, машину уже не починить"}],
    ["filler-BAD", "DashedAcceptabilityJudgment", {s: "Эти дураки всё сломают ещё вчера, машину уже не починить"}],

    ["filler-GOOD", "DashedAcceptabilityJudgment", {s: "Тот факт, что Иван не пришёл, ни на что не влияет, мы все равно его побъём"}],
    ["filler-BAD", "DashedAcceptabilityJudgment", {s: "Тот факт, что Иван не пришёл, ни на что влияет, мы все равно его побъём"}],

    ["filler-GOOD", "DashedAcceptabilityJudgment", {s: "Что Коля съел, выпив лимонад?"}],
    ["filler-BAD", "DashedAcceptabilityJudgment", {s: "Что Коля съел и выпил лимонад?"}],

    ["filler-GOOD", "DashedAcceptabilityJudgment", {s: "На улице стемнело, и ребята достали фейерверки"}],
    ["filler-BAD", "DashedAcceptabilityJudgment", {s: "Улица стемнела, и ребята достали фейерверки"}],

    ["filler-GOOD", "DashedAcceptabilityJudgment", {s: "Этот новый дом купила какая-то богатенькая дама"}],
    ["filler-BAD", "DashedAcceptabilityJudgment", {s: "Новый этот дом купила какая-то богатенькая дама"}],

    ["filler-GOOD", "DashedAcceptabilityJudgment", {s: "Завтра я поеду к бабушке, она мне испечет пирожков с капустой?"}],
    ["filler-BAD", "DashedAcceptabilityJudgment", {s: "Завтра я поехал к бабушке, она мне испечет пирожков с капустой?"}],

    ["filler-GOOD", "DashedAcceptabilityJudgment", {s: "Таня купила такие красивые сережки, причем не кому-то, а самой себе!"}],
    ["filler-BAD", "DashedAcceptabilityJudgment", {s: "Таня купила такие красивые сережки, причем не кому-то, а самому себе!"}],

    ["filler-GOOD", "DashedAcceptabilityJudgment", {s: "Никто не знает, где работает его мама."}],
    ["filler-BAD", "DashedAcceptabilityJudgment", {s: "Никто не знает, работает его мама где."}],

    ["filler-GOOD", "DashedAcceptabilityJudgment", {s: "Иван читал \"Евгения Онегина\" за пять дней"}],
    ["filler-BAD", "DashedAcceptabilityJudgment", {s: "Иван прочитал \"Евгения Онегина\" за пять дней"}],

    ["filler-GOOD", "DashedAcceptabilityJudgment", {s: "Женя посоветовал ему самому с этим разобраться"}],
    ["filler-BAD", "DashedAcceptabilityJudgment", {s: "Женя посоветовал ему сам с этим разобраться"}],

    ["filler-GOOD", "DashedAcceptabilityJudgment", {s: "Лёша пробежал 100 метров за 10 секунд"}],
    ["filler-BAD", "DashedAcceptabilityJudgment", {s: "Лёша бежал 100 метров за 10 секунд"}],

    ["filler-GOOD", "DashedAcceptabilityJudgment", {s: "Следователь спросил у него, что он делал в ночь с 15 на 16"}],
    ["filler-BAD", "DashedAcceptabilityJudgment", {s: "Следователь спросил у него, он делал что в ночь с 15 на 16"}],

];