var arr = [
  "A pair of cows were talking in the field. One says, “Have you heard about the mad cow disease that’s going around? “Yeah,” the other cow says. “Makes me glad I’m a penguin.”",
  "Once, my father came home and found me in front of a roaring fire. That made my father very mad, as we didn’t have a fireplace.",
  "“Your mother has been with us for 20 years,” said John. “Isn’t it time she got a place of her own?”<br>“My mother?” replied Helen. “I thought she was your mother.”",
  "One of the oddities of Wall Street is that it is the dealer and not the customer who is called broker.",
  "Two Hollywood stars ran into each other at the door of their psychiatrist’s office.<br> “Hello, there,” said one. “Are you coming or going?” <br>“If I knew that,” said the other, “I wouldn’t be here.”",
  "At a party, a young wife admonished her husband, “That’s the fourth time you’ve gone back for ice cream and cake. Doesn’t it embarrass you?”<br>“Why should it?” answered her spouse. “I keep telling them it’s for you.”<br>—Selma Glasser, Good Housekeeping",
  "A grasshopper walks into a bar. The bartender looks at him and says, “Hey, they named a drink after you!”<br>“Really?” replies the grasshopper. “There’s a drink named Stan?”",
  "Why did the tomato turn red? Because it saw the salad dressing!",
  "Why did the scarecrow win an award?<br> Because he was outstanding in his field!",
  "Why did the bicycle fall over?<br> Because it was two-tired!",
  "Why was the math book sad? <br>Because it had too many problems!",
  "Why did the chicken cross the playground? <br>To get to the other slide!",
  "Why do seagulls fly over the sea? <br> Because if they flew over the bay, they'd be bagels!",
  "Why don't scientists trust atoms? <br>Because they make up everything!",
  "Why don't skeletons fight each other? <br>They don't have the guts!",
  "Why did the computer go to the doctor? <br>Because it had a virus!",
  "Why don't eggs tell jokes? <br>Because they'd crack each other up!",
  "What can you hold in your left hand but not in your right hand? Your right elbow.",
  "What spends all the time on the floor but never gets dirty? Your shadow.",
  "What kind of band never plays music? A rubber band.",
  "You can play me and eat me. What am I? Squash",
  "What is visible during the day but not at night? Sunlight.",
  "What tastes better than it smells? A Tongue.",
  "The more of this there is, the less you see. What is it? Darkness",
  "You can see me in the water, but I’m not wet. What am I? A reflection",
  "I give milk and I have a horn, but I’m not a cow. What am I? A milk truck.",
  "If an electric train is travelling south, which way is the smoke going? There is no smoke. It’s an electric train.",
  "What has a face and two hands but no arms or legs? A clock.",
  "What can you keep after giving to someone? Your word.",
  "What five-letter word has one left when two are removed? Stone.",
  "I have a neck and I wear a cap but I have no head. What am I? A bottle.",
  "I am tall when I’m young, and I am short when I’m old. What am I? A candle.",
  "Mr. Blue lives in a blue one-story house, and everything inside the blue house is blue too. What color is the staircase? There are no stairs. It’s a single-story house.",
  "What word begins and ends with an E but only has one letter? Envelope.",
  "What has one eye, but can’t see? A needle.",
  "What goes up and down but never moves? The stairs.",
  "What english word becomes shorter when you add two letters to it? Short.",
  "What do 194 different countries have in common? People.",
  "What can’t talk but will reply when spoken to? An echo.",
  "What grows when it eats, but dies when it drinks? Fire.",
  "What ancient invention lets you look right through a wall? A window.",
  "What runs around your whole garden without ever moving? Your fence.",
  "What has many keys but can’t open a single lock? A piano.",
  "What is always in front of you but can’t be seen? The future.",
  "What goes through cities and fields, but never moves? A road.",
  "What is full of holes but still holds water? A sponge.",
  "What two things can you never eat for breakfast? Lunch and dinner.",
  "What do you carry everywhere, but it never gets heavy? Your name.",
  "What gets wetter the more it dries? A towel.",
  "I have no life but I can die. What am I? A battery.",
  "What kind of coat is always wet when you put it on? A coat of paint.",
  "You find me in December, but not in any other month. What am I? The letter D.",
  "Kate’s mom has 3 kids – Snap, crackle and…? Kate.",
  "What month of the year has 28 days? All of the months of the year.",
  "What kind of cheese is made backwards? Edam.",
  "How does a football player keep nice and cool during a game? By standing close to the fans.",
  "What has lots of eyes, but can’t see? A potato.",
  "How much dirt is in a 5×5-foot hole? None, it’s a hole.",
  "In the English language, what starts with a T, ends with a T and is full of T? A teapot.",
  "What weighs a lot even though it seems light? A cloud.",
  "What do you find in the middle of Paris? The letter ‘r’.",
  "How far can a bear walk into the woods? Halfway.",
  "What has four wheels and flies? A garbage truck.",
  "Where does today come before yesterday? The dictionary.",
  "Which word in the dictionary is spelled incorrectly? Incorrectly.",
  "I have branches, but no fruit, trunk or leaves. What am I? A bank.",
  "What can you break, even if you never pick it up or touch it? A promise.",
  "The more you take of me, the more I leave behind. What am I? Footsteps",
  "What sometimes freezes after it has been heated up? A computer.",
  "What is able to travel around the globe, but stays in a corner the whole time? A stamp.",
  "What two words, added together, contain the most letters? Post office.",
  "If you drop me, I’m sure to crack, but give me a smile and I’ll always smile back. What am I? A mirror.",
  "What runs but never walks? A tap.",
  "What can you catch, but not throw? A cold.",
  "What has 13 hearts, but no other organs? A deck of playing cards.",
  "What gets bigger when more is taken away? A hole.",
  "What goes up and never comes down? Your age.",
  "What is easy to get into, but hard to get out of? Trouble.",
  "If you have one and you show it to someone, it’ll be gone. What am I? A secret.",
  "I come in many different colors. I am used in many sports, and I have four holes. What am I? A jersey",
  "What is black when it’s clean and white when it’s dirty? A chalkboard.",
  "What has to be broken before you can use it? An egg.",
  "I’m much shorter than the rest, but happy people raise me like I’m the best. What am I? A thumb.",
  "Before Mount Everest was discovered, what was the highest mountain on Earth? Mt Everest. It doesn’t matter if it wasn’t discovered yet.",
  "Which rock group has 4 famous men members but none of them sing? Mount Rushmore",
  "What comes once in a minute, twice in a moment but never in a hundred years? The letter M.",
  "The man walked in the rain without anything covering his head, but he didn’t get rain on a single hair. How? He was bald.",
  "What’s in the middle of March and April but nowhere else in those months? The letter R.",
  "I am an odd number. Take one away, and I become even. What am I? Seven.",
  "I shave every day, but my beard stays the same. What am I? A barber.",
  "You have to pick the safest room. One is full of raging fires; the second is full of laser beams. The third room has lions that haven’t eaten for years. Which room should you pick? The third. If the lions haven’t eaten for years, they’ll be dead. ",
  "This can fill an entire large room but never takes up space. What is it? Air.",
];
function joke() {
  var randomNum = Math.floor(Math.random() * arr.length);
  console.log(randomNum);
  var jokess = document.getElementById("awesomejokes");
  jokess.innerHTML = arr[randomNum];
}
// let jokes=[" What do you call a dinosaur with a wide vocabulary?
// A thesaurus"," What do you call a fake noodle?
// An impasta","Why did the teddy bear so no to dessert?
// Because she was stuffed","How do you stop an astronaut’s baby from crying?
// You rocket","How do you get a tissue to dance?
// You put a little boogie into it","How does the ocean say hello?
// It waves","What is a snake’s favorite subject?
// Hiss-tory","What are the strongest days of the week?
// Saturday and Sunday. The rest are weak days.","Why can’t you give Elsa a balloon?
// She will let it go","How do you make the number 7 even?
// Remove the S","What do you give a sick lemon?
// Lemon aid","What is in Squidward’s underpants?
// Squidmarks","If you are English in the kitchen and English in the living room, what are you in the bathroom?
// European","If a butcher wears an XL shirt and size 13 shoes, what does he weigh?
// Meat","What falls in winter, but never gets hurt?
// Snow","What can you catch, but never throw?
// A cold","I wrote a song about a tortilla. Well actually, it is more of a wrap.","I was going to tell a pizza joke, but it was too cheesy.","Why was 6 afraid of 7?
// Because 7, 8, 9", "Knock Knock / Who’s there? / Boo / Boo, who? / Don’t cry it’s just me"];

// let randomNumber = Math.floor(Math.random() * jokes.length);
// console.log(randomNumber);
// let awesomejokes=document.getElementById("awesomejokes");
// awesomejokes.innerHTML=jokes[randomNumber];
