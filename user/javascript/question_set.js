  var Question_data = [
    {
        qid: 1,
        qtype: 'radio',
        question: 'Inside which HTML element do we put the JavaScript?',
        options:[
            '<script>',
            '<scripting>',
            '<js>',
            '<javascript>',
        ],
        correctAnswer: '<script>',
        flag: 0,
          
    },
    {
        qid: 2,
        qtype: 'radio',
        question: `What is the correct JavaScript syntax to change the content of the HTML element below? 
        <p id="demo">This is a demonstration.</p>`,
        options:[
            '#demo.innerHTML = "Hello World!";',
            'document.getElementByName("p").innerHTML = "Hello World!";',
            'document.getElement("p").innerHTML = "Hello World!";',
            'document.getElementById("demo").innerHTML = "Hello World!";',
        ],
        correctAnswer: 'document.getElementById("demo").innerHTML = "Hello World!"; ',
        flag: 0,
           
    },
    {
        qid: 3,
        qtype: 'radio',
        question: 'Where is the correct place to insert a JavaScript?',
        options:[
            'The <head> section',
            'The <body> section',
            'Both the <head> section and the <body> section are correct  ',
        ],
        correctAnswer: 'Both the <head> section and the <body> section are correct  ',
        flag: 0,
           
    },
    {
        qid: 4,
        qtype: 'radio',
        question: 'What is the correct syntax for referring to an external script called "demo.js"?',
        options:[
            '<script src="demo.js">  ',
            '<script href="demo.js">',
            '<script name="demo.js">',
            '<link rel="script" href="demo.js">',
        ],
        correctAnswer: '<script src="demo.js">',
        flag: 0,
           
    },
    {
        qid: 5,
        qtype: 'bool',
        question: 'The external JavaScript file must contain the <script> tag.',
        options:[
            'False',
            'True',
        ],
        correctAnswer: 'False',
        flag: 0,
           
    },
    {
        qid: 6,
        qtype: 'radio',
        question: 'How do you create a function in JavaScript?',
        options:[
            'function myFunction(){}',
            'function:myFunction(){}',
            'function = myFunction(){}',
        ],
        correctAnswer: 'function myFunction(){}',
        flag: 0,
           
    },
    {
        qid: 7,
        qtype: 'radio',
        question: 'How to write an IF statement in JavaScript?',
        options:[
            'if (i == 5)',
            'if i = 5 then',
            'if i == 5 then',
            'if i = 5',
        ],
        correctAnswer: 'if (i == 5)',
        flag: 0,
           
    },
    {
        qid: 8,
        qtype: 'radio',
        question: 'How can you add a comment in a JavaScript?',
        options:[
            '<!--This is a comment-->',
            '//This is a comment',
            '/* This is a comment */',
        ],
        correctAnswer: '//This is a comment',
        flag: 0,
           
    },
    {
        qid: 9,
        qtype: 'radio',
        question: 'How to insert a multi-line comment?',
        options:[
            `<!--This comment has
            more than one line-->`,
            `//This comment has
            more than one line//`,
         `/*This comment has
         more than one line*/`,
        ],
        correctAnswer: `/*This comment has
        more than one line*/`,
        flag: 0,
           
    },
    {
        qid: 10,
        qtype: 'radio',
        question: 'What is the correct way to write a JavaScript array?',
        options:[
            'var colors = (1:"red", 2:"green", 3:"blue")',
            'var colors = ["red", "green", "blue"]',
            'var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")',
            'var colors = "red", "green", "blue"',
        ],
        correctAnswer: 'var colors = ["red", "green", "blue"]',
        flag: 0,
           
    },
    {
        qid: 11,
        qtype: 'radio',
        question: 'How do you find the number with the highest value of x and y?',
        options:[
            'Math.max(x, y)',
            'ceil(x, y)',
            'Math.ceil(x, y)',
            'top(x, y)',
        ],
        correctAnswer: 'Math.max(x, y)',
        flag: 0,
           
    },
    {
        qid: 12,
        qtype: 'bool',
        question: 'Is JavaScript case-sensitive?',
        options:[
            'Yes',
            'No',
        ],
        correctAnswer: 'Yes',
        flag: 0,
           
    },
    {
        qid: 13,
        qtype: 'radio',
        question: 'Which event occurs when the user clicks on an HTML element?',
        options:[
            'onclick',
            'onchange',
            'onmouseclick',
            'onmouseover',
        ],
        correctAnswer: 'onclick',
        flag: 0,
           
    },
    {
        qid: 14,
        qtype: 'radio',
        question: `How can you detect the client's browser name?`,
        options:[
            'client.navName',
            'navigator.appName',
            'browser.name',
        ],
        correctAnswer: 'navigator.appName',
        flag: 0,
           
    },
    {
        qid: 15,
        qtype: 'radio',
        question: 'What is the correct JavaScript syntax for opening a new window called "w2" ?',
        options:[
            'w2 = window.new("http://www.w3schools.com");',
            'w2 = window.open("http://www.w3schools.com");',
        ],
        correctAnswer: 'w2 = window.open("http://www.w3schools.com");',
        flag: 0,
           
    },

]