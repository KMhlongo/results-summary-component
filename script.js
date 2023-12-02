const data = [
    {
      "category": "Reaction",
      "score": 80,
      "icon": "./assets/images/icon-reaction.svg"
    },
    {
      "category": "Memory",
      "score": 92,
      "icon": "./assets/images/icon-memory.svg"
    },
    {
      "category": "Verbal",
      "score": 61,
      "icon": "./assets/images/icon-verbal.svg"
    },
    {
      "category": "Visual",
      "score": 72,
      "icon": "./assets/images/icon-visual.svg"
    }
  ]

const colorsMap = new Map([
    ["Reaction",{background: "hsla(0, 100%, 67%, 0.1)",
                  color: "hsl(0, 100%, 67%)"}],
    ["Memory",{background: "hsla(39, 100%, 56%, 0.1)",
                color: "hsl(39, 100%, 56%)"}],
    ["Verbal",{background: "hsla(166, 100%, 37%, 0.1)",
                color: "hsl(166, 100%, 37%)"}],
    ["Visual",{background: "hsla(234, 85%, 45%, 0.1)",
                color: "hsl(234, 85%, 45%)"}],
])

const scores = document.querySelector('.scores');

data.forEach(result => {
    var divElement = document.createElement('div');
    divElement.classList.add('score-element')
    divElement.style.background = colorsMap.get(result.category).background;
    
    var icon = document.createElement('img');
    icon.src = result.icon;

    var text = document.createElement('span');
    text.textContent = result.category;
    text.style.color = colorsMap.get(result.category).color

    var scoreValue = document.createElement('span')
    scoreValue.textContent = result.score
    scoreValue.style.marginLeft = "auto";
    scoreValue.style.marginRight = "3px";
    var scoreText = document.createElement('p');
    scoreText.innerHTML = "/ 100";

    divElement.appendChild(icon);
    divElement.appendChild(text);
    divElement.appendChild(scoreValue);
    divElement.appendChild(scoreText);

    scores.appendChild(divElement)
})