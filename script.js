//STRING

// const str1 = 'I\'m OK'
// const str2 = "Саша сказал:\"Привет\""
// const str3 = `I'm say ${str1}`

// console.log(str1, typeof(str1))
// console.log(str2)
// console.log(str3)

//NUMBER
//
// const num1 = 75+15
// const num2 = 79*9
// //alert(num2)
// const inf = 17/0
//num -(2**53-1) до (2**53-1)


//BIGINT
//const bigint = 103123123n

//boolean
//true / false

//const bool = "a">"AAAA"
//console.log(bool)


//NULL
// let empty = null
// console.log(typeof empty)

//UNDEFINED
// let box = undefined
// console.log(box, typeof box)

//SYMBOL
// const uniq = Symbol('id')
// const uniq2 = Symbol('id')
// console.log(uniq == uniq2)

//OBJECT
//
// const obj = {
//     name: 'Sasha',
//     age: 19,
//     isHappy: true,
// }
// // console.log(obj.name)
// // console.log(obj['name'])

// obj.job = "Google"
// const array = ["Аня", 18, false]
// array[3] = "Facebook"
// console.log(array)
// console.log(array[0])


//console.log(obj)

// const variant = "option1"

// console.log(5=="5") //сравнивают значения
// console.log(5==="5") //сравнивает и значение и тип (лучше всего всегда использовать ===)
// //console.log("abc" > 15)

// const userName = prompt("Who you are","anonim")
// if (userName === "admin") {
//     alert("Hello boss")
// } else if (userName === "anonim" || !userName) {
//     alert("i don't know you..")
// }  else {
//     alert(`Hi ${userName}`)
// }

 //const counts = prompt("До скольки считать?", 20)
// let i =0
// while (i<=counts){
//     console.log(i++)
//    // i = i+1
// }

// do {

// } while

// const arr =[]

// for (let i=1; i<=50; i++) {
//     arr.push(i)
// }
// //console.log(arr)

// const newArr = []

// for (item of arr) {
//     const marker = item % 3
//     if(!marker){
//         newArr.push(item)
//     }
// }
// console.log(newArr)

// const obj = {
//     name: "Sasha",
//     age: "25",
//     city: "Voronej"
// }
// for (key in obj)
// {
//     console.log(key)
//     console.log(obj[key])
// }

//FUNCTION

// declaration
//console.log(scream(15,10))
function scream(a,b){
    // const result = a*b
    // return result
    return a*b
}
//console.log(scream(15,10))

// expression
//wowScream()
const wowScream = function() {
    alert("Wow")
}
//wowScream()
//arrow
const arrow = () => {
    alert("arrow is in the sky")
}
//arrow()


// ИГРА
// Нажав на кнопку начать игра запускается, генерируется задача, пользователь может ввести ответ
// должна появитьяс кнопка проверить

// нажав кнопку проверить мы сравниваем ввод пользователя с ответом,
// Вывести результат и правильное значение, сменить кнопку на начать заново
//

const getRandomNumInRange = (min,max) => {
    const randomNum = (Math.random()*(max-min)+min).toFixed(0)
    return randomNum
}

const gameState = {
    taskInProcess: false,
    rightAnswer: null,
}

const getTask = () =>{
    // const randomNum1 = getRandomNumInRange(0,100)
    // const randomNum2 = getRandomNumInRange(0,100)
    
    // let symbol 
    // if(Math.random()>0.5) {
    //     symbol = "+"
    // } else {
    //     symbol = "-"
    // }
    const symbol = Math.random()>0.5 ? "+" : "-"
    const task =`${getRandomNumInRange(0,100)} ${symbol} ${getRandomNumInRange(0,100)}`
    gameState.rightAnswer = eval(task)
    return task
}

const toggleGameState = () => {
    gameState.taskInProcess = !gameState.taskInProcess
}

const gameElements = document.getElementById("my_game").children
const title = gameElements[0]
const userTask = gameElements[1]
const userAnswer = gameElements[2]
const btnGame = gameElements[3]



const startGame = () => {
    if(!gameState.taskInProcess){
        title.innerText = "Игра началась!"
        userAnswer.value = null
        userTask.innerText = getTask()
        userAnswer.hidden=false
        btnGame.innerText = "Проверить!"
        toggleGameState()
    } else {
        const isRight = gameState.rightAnswer == userAnswer.value
        userTask.innerText= userTask.innerText + " = " + gameState.rightAnswer
        title.innerText = (isRight)? "Вы победили!": "Вы проиграли!"
        btnGame.innerText = "Начать заново"
        toggleGameState()
    }
}
btnGame.addEventListener("click",startGame)

userAnswer.addEventListener("keydown", (e)=>{
    if(e.key==="Enter") {
        startGame()
    }
})

const choosedEl = document.querySelectorAll(".choosed_block-container >div")
const countEl = document.querySelector(".choosed_block span")

const choosedState = {
    countElements: 0,
}

const changeCount = (value)=>{
    choosedState.countElements+=value
    countEl.innerText = choosedState.countElements
}

const eventFunc = (e) => {
    if(e.target.className===""){
        e.target.className="choosed_element"
        changeCount(1)
    } else {
        e.target.className=""
        changeCount(-1)
    }
}

for(let i=0; i<choosedEl.length;i++) {
    choosedEl[i].addEventListener("click", eventFunc)
}



