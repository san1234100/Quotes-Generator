const generateBtn=document.getElementById('generateBtn')
const quote=document.getElementById('quote')
let quotes=[
    '"I never played for the crowd; I always played for the country." <br> - Virat Kohli',
    '"Self-belief and hard work will always earn you success." <br> - Virat Kohli',
    `"I like to be myself, and I don't pretend. For instance, I don't dress up for occasions; I am what I am." <br> - Virat Kohli`,
    `"I don't believe in taking the right decisions. I take decisions and then make them right." <br> - MS Dhoni`,
    '"The only thing I control is my performance." <br> - MS Dhoni',
    '"Your positive action combined with positive thinking results in success." <br> - MS Dhoni',

]
quote.innerHTML=quotes[0];
console.log(quote);

generateBtn.addEventListener('click',()=>{
  let random=Math.floor(Math.random() * quotes.length);
  quote.innerHTML=quotes[random];
})