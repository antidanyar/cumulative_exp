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
        mode: "self-paced reading",
        timeout: 20000
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
                    as: ["коврики", "шубы", "шторы"]}],
    [["no_D", 1],   "DashedAcceptabilityJudgment", {s: "Такие коврики ткут даже из полиэтилена - одна бабушка насобирала пакетов в реке!"},
                    "Question", {hasCorrect: true, randomOrder: true,
                    q: "Что ткут из полиэтилена?",
                    as: ["коврики", "шубы", "шторы"]}],

    [["has_D", 2],  "DashedAcceptabilityJudgment", {s: "Я решила попробовать их приготовить, и насобирала этих ярких грибов."},
                    "Question", {hasCorrect: true, randomOrder: true,
                    q: "Какие грибы были собраны?",
                    as: ["яркие", "белые", "вкусные"]}],
    [["no_D", 2],   "DashedAcceptabilityJudgment", {s: "Я решила попробовать их приготовить, и насобирала для этого ярких грибов."},
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
                    q: "Что понравилось по описанию?",
                    as: ["травы", "грибы", "сладости"]}],

    [["has_D", 8],  "DashedAcceptabilityJudgment", {s: "Навезли нас сюда со всей страны, а потом бросили."},
                    "Question", {hasCorrect: true, randomOrder: true,
                    q: "Куда навезли?",
                    as: ["сюда", "в Сибирь", "туда"]}],
    [["no_D", 8],   "DashedAcceptabilityJudgment", {s: "Навезли людей сюда со всей страны, а потом бросили."},
                    "Question", {hasCorrect: true, randomOrder: true,
                    q: "Куда навезли?",
                    as: ["сюда", "в Сибирь", "туда"]}],  


    //16 пар филлеров 
                        
    [["filler-GOOD", 1], "DashedAcceptabilityJudgment", {s: "Этот красивый мальчик хорошо рисует, прям как да Винчи"},
                    "Question", {hasCorrect: true, randomOrder: true,
                    q: "С кем идёт сравнение?",
                    as: ["с да Винчи", "в Айвазовским", "с Поллоком"]}],
    [["filler-BAD", 1], "DashedAcceptabilityJudgment", {s: "Этот красивый девочка хорошо рисует, прям как да Винчи"},
                    "Question", {hasCorrect: true, randomOrder: true,
                    q: "С кем идёт сравнение?",
                    as: ["с да Винчи", "в Айвазовским", "с Поллоком"]}],

    [["filler-GOOD", 2], "DashedAcceptabilityJudgment", {s: "На улице дрянная погода. Моросит."},
                    "Question", {hasCorrect: true, randomOrder: true,
                    q: "Какая на улице погода?",
                    as: ["дрянная", "так себе", "хорошая"]}],
    [["filler-BAD", 2], "DashedAcceptabilityJudgment", {s: "На улице дрянная погода. Оно моросит."},
                    "Question", {hasCorrect: true, randomOrder: true,
                    q: "Какая на улице погода?",
                    as: ["дрянная", "так себе", "хорошая"]}],

    [["filler-GOOD", 3], "DashedAcceptabilityJudgment", {s: "Кого лектор наругал, а семинарист похвалил?"},
                    "Question", {hasCorrect: true, randomOrder: true,
                    q: "Кто наругал?",
                    as: ["лектор", "семинарист", "декан"]}],
    [["filler-BAD", 3], "DashedAcceptabilityJudgment", {s: "Кого лектор наругал, а семинарист поставил 5?"},
                    "Question", {hasCorrect: true, randomOrder: true,
                    q: "Кто наругал?",
                    as: ["лектор", "семинарист", "декан"]}],

    [["filler-GOOD", 4], "DashedAcceptabilityJudgment", {s: "Мне кажется, мы нашли что-то невероятное, на этом можно заработать миллионы!"},
                    "Question", {hasCorrect: true, randomOrder: true,
                    q: "Сколько можно заработать на находке?",
                    as: ["миллионы", "горы золота", "десятки тысяч"]}],
    [["filler-BAD", 4], "DashedAcceptabilityJudgment", {s: "Мне кажется, мы нашли что-либо невероятное, на этом можно заработать миллионы!"},
                    "Question", {hasCorrect: true, randomOrder: true,
                    q: "Сколько можно заработать на находке?",
                    as: ["миллионы", "горы золота", "десятки тысяч"]}],

    [["filler-GOOD", 5], "DashedAcceptabilityJudgment", {s: "Эти дураки всё сломали ещё вчера, машину уже не починить"},
                    "Question", {hasCorrect: true, randomOrder: true,
                    q: "Что сломалось?",
                    as: ["машина", "велосипед", "мотоцикл"]}],
    [["filler-BAD", 5], "DashedAcceptabilityJudgment", {s: "Эти дураки всё сломают ещё вчера, машину уже не починить"},
                    "Question", {hasCorrect: true, randomOrder: true,
                    q: "Что сломалось?",
                    as: ["машина", "велосипед", "мотоцикл"]}],

    [["filler-GOOD", 6], "DashedAcceptabilityJudgment", {s: "Тот факт, что Иван не пришёл, ни на что не влияет, мы все равно его побъём"},
                    "Question", {hasCorrect: true, randomOrder: true,
                    q: "Что сделают с Иваном?",
                    as: ["побьют", "утопят", "застрелят"]}],
    [["filler-BAD", 6], "DashedAcceptabilityJudgment", {s: "Тот факт, что Иван не пришёл, ни на что влияет, мы все равно его побъём"},
                    "Question", {hasCorrect: true, randomOrder: true,
                    q: "Что сделают с Иваном?",
                    as: ["побьют", "утопят", "застрелят"]}],

    [["filler-GOOD", 7], "DashedAcceptabilityJudgment", {s: "Что Коля съел, выпив лимонад?"},
                    "Question", {hasCorrect: true, randomOrder: true,
                    q: "Что Коля выпил?",
                    as: ["лимонад", "кофе", "сок"]}],
    [["filler-BAD", 7], "DashedAcceptabilityJudgment", {s: "Что Коля съел и выпил лимонад?"},
                    "Question", {hasCorrect: true, randomOrder: true,
                    q: "Что Коля выпил?",
                    as: ["лимонад", "кофе", "сок"]}], 

    [["filler-GOOD", 8], "DashedAcceptabilityJudgment", {s: "На улице стемнело, и ребята достали фейерверки"},
                    "Question", {hasCorrect: true, randomOrder: true,
                    q: "Что достали ребята?",
                    as: ["фейерверки", "лопаты", "фонарики"]}],
    [["filler-BAD", 8], "DashedAcceptabilityJudgment", {s: "Улица стемнела, и ребята достали фейерверки"},
                    "Question", {hasCorrect: true, randomOrder: true,
                    q: "Что достали ребята?",
                    as: ["фейерверки", "лопаты", "фонарики"]}],

    [["filler-GOOD", 9], "DashedAcceptabilityJudgment", {s: "Этот новый дом купила какая-то богатенькая дама"},
                    "Question", {hasCorrect: true, randomOrder: true,
                    q: "Кто купил дом?",
                    as: ["богатая дама", "богатый бизнесмен", "семейная пара"]}],
    [["filler-BAD", 9], "DashedAcceptabilityJudgment", {s: "Этот новое дом купила какая-то богатенькая дама"},
                    "Question", {hasCorrect: true, randomOrder: true,
                    q: "Кто купил дом?",
                    as: ["богатая дама", "богатый бизнесмен", "семейная пара"]}],

    [["filler-GOOD", 10], "DashedAcceptabilityJudgment", {s: "Завтра я поеду к бабушке, она мне испечет пирожков с капустой"},
                    "Question", {hasCorrect: true, randomOrder: true,
                    q: "Какие пирожки испечет бабушка?",
                    as: ["с капустой", "в мясом", "с брусникой"]}],
    [["filler-BAD", 10], "DashedAcceptabilityJudgment", {s: "Завтра я поехал к бабушке, она мне испечет пирожков с капустой"},
                    "Question", {hasCorrect: true, randomOrder: true,
                    q: "Какие пирожки испечет бабушка?",
                    as: ["с капустой", "в мясом", "с брусникой"]}],

    [["filler-GOOD", 11], "DashedAcceptabilityJudgment", {s: "Таня купила такие красивые сережки, причем не кому-то, а самой себе!"},
                    "Question", {hasCorrect: true, randomOrder: true,
                    q: "Какие сережки купила Таня?",
                    as: ["красивые", "золотые", "дорогие"]}],
    [["filler-BAD", 11], "DashedAcceptabilityJudgment", {s: "Таня купила такие красивые сережки, причем не кому-то, а самому себе!"},
                    "Question", {hasCorrect: true, randomOrder: true,
                    q: "Какие сережки купила Таня?",
                    as: ["красивые", "золотые", "дорогие"]}],

    [["filler-GOOD", 12], "DashedAcceptabilityJudgment", {s: "Никто не знает, где работает его мама."},
                    "Question", {hasCorrect: true, randomOrder: true,
                    q: "Что никто не знает о его маме?",
                    as: ["где она работает", "сколько она задолжала", "какие пироги она любит"]}],
    [["filler-BAD", 12], "DashedAcceptabilityJudgment", {s: "Никто не знает, работает его мама где."},
                    "Question", {hasCorrect: true, randomOrder: true,
                    q: "Что никто не знает о его маме?",
                    as: ["где она работает", "сколько она задолжала", "какие пироги она любит"]}],

    [["filler-GOOD", 13], "DashedAcceptabilityJudgment", {s: "Иван прочитал \"Евгения Онегина\" за пять дней"},
                    "Question", {hasCorrect: true, randomOrder: true,
                    q: "Что читал Иван?",
                    as: ["\"Евгения Онегина\"", "\"Мертвые души\"", "\"Преступление и наказание\""]}],
    [["filler-BAD", 13], "DashedAcceptabilityJudgment", {s: "Иван читал \"Евгения Онегина\" за пять дней"},
                    "Question", {hasCorrect: true, randomOrder: true,
                    q: "Что читал Иван?",
                    as: ["\"Евгения Онегина\"", "\"Мертвые души\"", "\"Преступление и наказание\""]}],

    [["filler-GOOD", 14], "DashedAcceptabilityJudgment", {s: "Женя посоветовал ему самому с этим разобраться"},
                    "Question", {hasCorrect: true, randomOrder: true,
                    q: "Кто дал ему совет?",
                    as: ["Женя", "Вася", "Коля"]}],
    [["filler-BAD", 14], "DashedAcceptabilityJudgment", {s: "Женя посоветовал ему сам с этим разобраться"},
                    "Question", {hasCorrect: true, randomOrder: true,
                    q: "Кто дал ему совет?",
                    as: ["Женя", "Вася", "Коля"]}],

    [["filler-GOOD", 15], "DashedAcceptabilityJudgment", {s: "Лёша пробежал 100 метров за 10 секунд"},
                    "Question", {hasCorrect: true, randomOrder: true,
                    q: "Какую дистанцию бежал Лёша?",
                    as: ["100 метров", "50 метров", "20 метров"]}],
    [["filler-BAD", 15], "DashedAcceptabilityJudgment", {s: "Лёша бежал 100 метров за 10 секунд"},
                    "Question", {hasCorrect: true, randomOrder: true,
                    q: "Какую дистанцию бежал Лёша?",
                    as: ["100 метров", "50 метров", "20 метров"]}],

    [["filler-GOOD", 16], "DashedAcceptabilityJudgment", {s: "Следователь спросил у него, что он делал в ночь с 15 на 16"},
                    "Question", {hasCorrect: true, randomOrder: true,
                    q: "Какой ночью интересовался следователь?",
                    as: ["с 15 на 16", "с 16 на 17", "с 10 на 11"]}],
    [["filler-BAD", 16], "DashedAcceptabilityJudgment", {s: "Следователь спросил у него, он делал что в ночь с 15 на 16"},
                    "Question", {hasCorrect: true, randomOrder: true,
                    q: "Какой ночью интересовался следователь?",
                    as: ["с 15 на 16", "с 16 на 17", "с 10 на 11"]}]

];