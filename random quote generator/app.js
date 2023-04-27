let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [
    {
    quote: 'The way to get started is to quit talking and begin doing.',
    person: 'Walt Disney'
    },
    {
        quote:'Your time is limited, so dont waste it living someone elses life. Dont be trapped by dogma – which is living with the results of other peoples thinking.',
        person:  'Steve Jobs'
    },
    {
        quote:'If you look at what you have in life, youll always have more. If you look at what you dont have in life, youll never have enough.' ,
        person: 'Oprah Winfrey'
    },
    {
        quote:' Life is what happens when youre busy making other plans ' , 
        person: 'John Lennon'
    },
    { 
        quote:'Tell me and I forget. Teach me and I remember. Involve me and I learn.' ,
        person: 'Benjamin Franklin'
    },
    {

        quote:'The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.' ,
        person: 'Helen Keller'
    },
    {
        quote: 'It is during our darkest moments that we must focus to see the light.' ,
        person: 'Aristotle'
    },
    {
        quote: 'Whoever is happy will make others happy too.' ,
        person: 'Anne Frank'
    },
    {
        quote:'Do not go where the path may lead, go instead where there is no path and leave a trail.' ,
        person: 'Ralph Waldo Emerson'
    },
];

btn.addEventListener('click', function(){
    let random = Math.floor(Math.random() * quotes.length);
    quote.textContent = quotes[random].quote;
    person.textContent = quotes[random].person;
})