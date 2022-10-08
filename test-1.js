
const section = document.querySelector('section');
let para1 = document.createElement('p');
let para2 = document.createElement('p');


let motherInfo = 'The mother cats are called ';
let kittenInfo;


const requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/tasks/json/sample.json';

fetch(requestURL)
  .then(response => response.text())
  .then(text => displayCatInfo(text))



function displayCatInfo(catString) {
  let total = 0;
  let male = 0;
  let female = 0;


// Add your code here
let cats = JSON.parse(catString)
let catMotherName = []


for (let mother of cats) {
catMotherName += `- ${mother.name}`

for (let kitten of mother.kittens) {

  kitten.gender === 'm' ? male += kitten.gender.length : female += kitten.gender.length
  
  total = male + female
  kittenInfo = `Hello welcome to Everyday Cats !, our mother cats have a total of ${total} kittens combined, ${male} males and ${female} females. We hope you fall in love with us` 
}

}

catMotherName = catMotherName.split('-').slice(1)

for(let i =0; i < catMotherName.length-1; i++) {
  
  if(i = catMotherName[catMotherName.length-1]){
  motherInfo += `${catMotherName.splice(catMotherName[length-1],2)} and ${i}.`

} else {
  motherInfo += ` ${catMotherName},`
} 
}


// Don't edit the code below here!

  para1.textContent = motherInfo;
  para2.textContent = kittenInfo;
}

section.appendChild(para1);
section.append(para2);
    