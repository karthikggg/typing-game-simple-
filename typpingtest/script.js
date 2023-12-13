const RANDOM_QUOTE_API_URL = 'http://api.quotable.io/random'
const random = document.getElementById("qoutes")
const input  = document.getElementById("typehere")
const count =  document.getElementById("count")
const charcount = document.getElementById("charcount")
const errcount = document.getElementById("errcount")
const accuracy = document.getElementById("word")

let error = 0;


function getRandomQuote() {
    return fetch(RANDOM_QUOTE_API_URL)
      .then(response => response.json())
      .then(data => data.content)
}
//fond error and corrct based on greean and red css class lish
let word = 1;
input.addEventListener( 'input' , () => {
    
    let char=0;
    let err = 0;
    
    onetime()
    const quoteschar = random.querySelectorAll('span')
    const entered = input.value.split('')

    quoteschar.forEach((characte, index) => {
        const cheker = entered[index]
        
        if(cheker == null){
            characte.classList.remove('correct')
            characte.classList.remove('incorrect')
            nextquote = false
                     
        }
        
        else if(characte.innerHTML == cheker){
            characte.classList.add('correct')
            characte.classList.remove('incorrect')
            //char count
            char++
            nextquote = true
        }
        else{
            characte.classList.remove('correct')
            characte.classList.add('incorrect')
            //error count
            err++
            nextquote = false
        }
        
        
    })
    let acc = 100;
    acc = Math.floor(((char - err)/char)*100);
    console.log(acc)

    
   
    charcount.innerHTML = char
    errcount.innerHTML = err
    accuracy.innerHTML = acc;
    if(nextquote){
        
         quotes() 
        
    }
})


//generating new quotes everythine when reload
async function quotes(){
    var i = 1;
    const quote = await getRandomQuote();
    random.innerHTML = '';
    quote.split('').forEach((char) => {
        i+=1;
        let newspan = document.createElement("span")
        newspan.innerHTML = char
        random.appendChild(newspan)
    })
    console.log(i)
   
    
    input.value=""
}
quotes();
//display countdouwb fuctions
var nowtime;
const timer = function () {
    nowtime = new Date()
    count.innerHTML = "0 "
    setInterval(() => {
        
        countdown();
        count.innerHTML = countdown()
       
        
    },1000)
}

function countdown() {
    return Math.floor((new Date() - nowtime)/1000);
}
load = true
function onetime(){
    
    console.log("kk")
    if(load){
        timer()
         load =false
    }
    
        
};




//   function timer() {
//     var i=0;
//     setInterval(() => {
//         i+=1;
//         count.innerHTML = 0;
        
//        count.innerHTML = i;
//        console.log(i)
     

      
//     }, 1000);
    

  
  
  

