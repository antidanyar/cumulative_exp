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
        mode: "self-paced reading"
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
    // Six practice items for self-paced reading (all in the SPR mode, 3/6 with an acceptability Judgment task).
    //
                
    ["practice", "DashedSentence", {s: "Это тренировочные предложения, которые позволят вам привыкнуть к такому способу чтения и оценке предложений."}],
    ["practice", "DashedSentence", {s: "Все испытуемые лингвистов любят проходить забавные эксперименты со смешными стимулами."},
                 "Question", {hasCorrect: false, randomOrder: false,
                              q: "Вы — испытуемый лингвистов. Вы любите проходить эксперименты?",
                              as: ["Да", "Очень!"]}],
    ["practice", "DashedSentence", {s: "Каждому следующему предложению нужно будет поставить оценку по шкале от 1 до 7."}],
    ["practice", "DashedAcceptabilityJudgment", {s: "Этому прекрасному предложению нужно поставить высокую оценку, в нём всё хорошо."}],
    ["practice", "DashedAcceptabilityJudgment", {s: "Предложение это ужасное, ставить единица нужно, тут всё очень плохо."}],
    ["practice", "DashedAcceptabilityJudgment", {s: "Это последнее тренировочное предложение, после которого начнётся эксперимент."}],
    ["practice", "FlashSentence", {s: "Мы начинаем!"}],
    
    //16 предложений с наличием/отсутствием D-элемента
    
    [["has_D", 1], "DashedAcceptabilityJudgment", {s: "woah kenny-has-D-1"}],
    [["no_D", 1], "DashedAcceptabilityJudgment", {s: "woah kenny-no-D-1"}],
    [["has_D", 2], "DashedAcceptabilityJudgment", {s: "woah kenny-has-D-2"}],
    [["no_D", 2], "DashedAcceptabilityJudgment", {s: "woah kenny-no-D-2"}], 
    [["has_D", 3], "DashedAcceptabilityJudgment", {s: "woah kenny-has-D-3"}],
    [["no_D", 3], "DashedAcceptabilityJudgment", {s: "woah kenny-no-D-3"}],
    [["has_D", 4], "DashedAcceptabilityJudgment", {s: "woah kenny-has-D-4"}],
    [["no_D", 4], "DashedAcceptabilityJudgment", {s: "woah kenny-no-D-4"}], 
    [["has_D", 5], "DashedAcceptabilityJudgment", {s: "woah kenny-has-D-5"}],
    [["no_D", 5], "DashedAcceptabilityJudgment", {s: "woah kenny-no-D-5"}],
    [["has_D", 6], "DashedAcceptabilityJudgment", {s: "woah kenny-has-D-6"}],
    [["no_D", 6], "DashedAcceptabilityJudgment", {s: "woah kenny-no-D-6"}], 
    [["has_D", 7], "DashedAcceptabilityJudgment", {s: "woah kenny-has-D-7"}],
    [["no_D", 7], "DashedAcceptabilityJudgment", {s: "woah kenny-no-D-7"}],
    [["has_D", 8], "DashedAcceptabilityJudgment", {s: "woah kenny-has-D-8"}],
    [["no_D", 8], "DashedAcceptabilityJudgment", {s: "woah kenny-no-D-8"}], 


    //16 филлеров (TODO: разделить филлеры на совсем плохие и совсем хорошие)

    ["filler-GOOD", "DashedAcceptabilityJudgment", {s: "woah kenny-filler-good"}],
    ["filler-GOOD", "DashedAcceptabilityJudgment", {s: "woah kenny-filler-good"}],
    ["filler-GOOD", "DashedAcceptabilityJudgment", {s: "woah kenny-filler-good"}],
    ["filler-GOOD", "DashedAcceptabilityJudgment", {s: "woah kenny-filler-good"}],
    ["filler-GOOD", "DashedAcceptabilityJudgment", {s: "woah kenny-filler-good"}],
    ["filler-GOOD", "DashedAcceptabilityJudgment", {s: "woah kenny-filler-good"}],
    ["filler-GOOD", "DashedAcceptabilityJudgment", {s: "woah kenny-filler-good"}],
    ["filler-GOOD", "DashedAcceptabilityJudgment", {s: "woah kenny-filler-good"}],


    ["filler-BAD", "DashedAcceptabilityJudgment", {s: "woah kenny-fller-bad"}],
    ["filler-BAD", "DashedAcceptabilityJudgment", {s: "woah kenny-filler-bad"}],
    ["filler-BAD", "DashedAcceptabilityJudgment", {s: "woah kenny-fller-bad"}],
    ["filler-BAD", "DashedAcceptabilityJudgment", {s: "woah kenny-fller-bad"}],
    ["filler-BAD", "DashedAcceptabilityJudgment", {s: "woah kenny-fller-bad"}],
    ["filler-BAD", "DashedAcceptabilityJudgment", {s: "woah kenny-fller-bad"}],
    ["filler-BAD", "DashedAcceptabilityJudgment", {s: "woah kenny-fller-bad"}],
    ["filler-BAD", "DashedAcceptabilityJudgment", {s: "woah kenny-fller-bad"}]
];