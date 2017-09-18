const baseWords = [
  'copper',
  'explain',
  'ill-fated',
  'truck',
  'neat',
  'unite',
  'branch',
  'educated',
  'tenuous',
  'hum',
  'decisive',
  'notice'
]

//

const stringToUnderscore = string => string.split('').map(letter => '_')
const randomWord = baseWords[Math.floor(Math.random() * baseWords.length)]

//

const answerString = document.getElementById('answer')
const submitBtn = document.getElementById('submitBtn')
const cancelBtn = document.getElementById('cancelBtn')
const gameTitle = document.getElementById('gameTitle')
const questWordOutput = document.getElementById('questWord')
let questWordArr = stringToUnderscore(randomWord)

console.log(randomWord)

questWordOutput.innerHTML = questWordArr

submitBtn.addEventListener('click', () => {
  if (
    typeof answerString.value === 'string' &&
    answerString.value.length === 1
  ) {
    randomWord.split('').forEach((element, index) => {
      if (element == answerString.value) {
        questWordArr[index] = answerString.value
      }
      questWordOutput.innerHTML = questWordArr.join('')
    })
  }
  if (randomWord == questWordArr.join('')) {
    gameTitle.innerHTML = 'Yah! You are winner! for repeat - refresh this page'
  } else {
    gameTitle.innerHTML = 'Insert  only ONE another letter!'
  }
})

cancelBtn.addEventListener('click', () => {
  gameTitle.innerHTML = 'Game is over, bye or refresh this page!'
})
