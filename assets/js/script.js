const generateBtn=document.getElementById('generateBtn')
const quote=document.getElementById('quote')
let quotes=[
    '"I never played for the crowd; I always played for the country." <br> - Virat Kohli',
    '"Self-belief and hard work will always earn you success." <br> - Virat Kohli',
    `"I like to be myself, and I don't pretend. For instance, I don't dress up for occasions; I am what I am." <br> - Virat Kohli`,
    `"I don't believe in taking the right decisions. I take decisions and then make them right." <br> - MS Dhoni`,
    '"The only thing I control is my performance." <br> - MS Dhoni',
    `"It's important to learn and not repeat the same mistakes. What's done is done." <br> - MS Dhoni`,
    `"Success and failure are both part of life. Both are not permanent." <br> - Actor Vijay`,
    `"Be simple, be a kind-hearted person. That is the best thing." <br> - Actor Vijay`,
    `"Your positive action combined with positive thinking results in success." <br> - Actor Vijay`,
    `"Your brand is what other people say about you when you're not in the room." <br> - Jeff Bezos`,
    `"I knew that if I failed I wouldn't regret that, but I knew the one thing I might regret is not trying." <br> - Jeff Bezos`,
    `"If you double the number of experiments you do per year, you're going to double your inventiveness." <br> - Jeff Bezos`,
    `"Your most unhappy customers are your greatest source of learning." <br> - Bill Gates`,
    `"It's fine to celebrate success, but it is more important to heed the lessons of failure." <br> - Bill Gates`,
    `"Don't compare yourself with anyone in this world. If you do so, you are insulting yourself." <br> - Bill Gates`,

]
quote.innerHTML=quotes[0];
console.log(quote);

generateBtn.addEventListener('click',()=>{
  let random=Math.floor(Math.random() * quotes.length);
  quote.innerHTML=quotes[random];
})