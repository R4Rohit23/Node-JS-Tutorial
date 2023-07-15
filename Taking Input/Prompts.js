// Prompts is a higher level and user friendly interface built on top of Node.js’s inbuilt Readline module. It supports different type of prompts such as text, password, autocomplete, date, etc. It is an interactive module and comes with inbuilt validation support.

// Install => npm install prompts

// Single Prompt
const prompts = require('prompts');

// (async () => {
//     const response = await prompts({
//         type: 'text',
//         name: 'name',
//         message: 'What is your name?'
//     });

//     console.log(response);
// })();

// Multiple propmts
const questions = [
    {
        type: 'text',
        name: 'username',
        message: 'What is your name: '
    },
    {
        type: 'number',
        name: 'age',
        message: 'How old are you?'
    }
];

(async () => {
    const response = await prompts(questions);
    console.log(response);
})();
