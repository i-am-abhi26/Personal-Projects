let jokes = [
    "What rock group has four men that don't sing? Mount Rushmore.",
    "When I was a kid, my mother told me I could be anyone I wanted to be. Turns out, identity theft is a crime.",
    "What do sprinters eat before a race? Nothing, they fast!",
    "What concert costs just 45 cents? 50 Cent featuring Nickelback!",
    "Why couldn't the bicycle stand up by itself? It was two tired!",
    "Did you hear about the restaurant on the moon? Great food, no atmosphere!",
    "How many apples grow on a tree? All of them!",
    "Did you hear the rumor about butter? Well, I'm not going to spread it!",
    "I like telling Dad jokes. Sometimes he laughs!",
    "To whoever stole my copy of Microsoft Office, I will find you. You have my Word!",
    "Why don't scientists trust atoms? Because they make up everything!",
    "Why did the scarecrow win an award? He was outstanding in his field.",
    "Why did the math book look sad? It had too many problems.",
    "What do you call fake spaghetti? An impasta.",
    "Why don't skeletons fight each other? They don't have the guts.",
    "Why did the computer go to the doctor? It caught a virus.",
    "Why was the JavaScript developer sad? Because he didn't Node how to Express himself.",
    "Why did the programmer quit his job? Because he didn't get arrays.",
    "Why do Java developers wear glasses? Because they can't C#.",
    "How many programmers does it take to change a light bulb? None. That's a hardware problem.",
    "Why was the computer cold? It left its Windows open.",
    "Why did the bicycle fall over? Because it was two-tired.",
    "What do you call a bear with no teeth? A gummy bear.",
    "Why can't your nose be 12 inches long? Because then it would be a foot.",
    "Why did the coffee file a police report? It got mugged.",
    "What kind of music do balloons hate? Pop music.",
    "Why did the cookie go to the hospital? Because it felt crummy.",
    "What do you call cheese that isn't yours? Nacho cheese.",
    "Why was six afraid of seven? Because seven eight nine.",
    "I told my suitcase there would be no vacation this year. Now I'm dealing with emotional baggage."
];

async function randomJokeGenerator(jokes) {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let num=Math.floor(Math.random()*jokes.length);
            resolve(jokes[num]);
        },1500);
    });
}

async function jokeAdder() {
    let joke=document.querySelector(".joke");
    joke.innerText = "😂 Loading...";
    joke.innerText=await randomJokeGenerator(jokes);
}

let btn=document.querySelector("button");
btn.addEventListener("click",jokeAdder);