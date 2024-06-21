const question=[
    {
        'que':'which of the following is a markup language?',
        'a':'HTML',
        'b':'CSS',
        'c':'JavaScript',
        'd':'PHP',
        'correct':'a'
    },
    {
        'que':'what year was javascript launched?',
        'a':'1996',
        'b':'1995',
        'c':'1994',
        'd':'none of the above',
        'correct':'b'
    },
    {
        'que':'What does css stands for ?',
        'a':'Hypertext Markup Language',
        'b':'Cascading style sheet',
        'c':'jason Object Notetion',
        'd':'Helicopters Terminals Motorboats Lamborginis',
        'correct':'b'
    }
];

let quebox=document.getElementById('quesBox');
let qustionInput=document.querySelectorAll('.options');
let box=document.getElementById('box');

let index= 0;
let right=0;
let wrong=0;
let quelength=question.length;


function loadquestion(){
    if(index==quelength){
        alert('Quiz completed please submit...');
        // console.log(index)
        
    }
    reset();

    const data=question[index];
   

    quebox.innerText=`${index+1} ${data.que}`

    qustionInput[0].nextElementSibling.innerText=`${data.a}`
    qustionInput[1].nextElementSibling.innerText=`${data.b}`
    qustionInput[2].nextElementSibling.innerText=`${data.c}`
    qustionInput[3].nextElementSibling.innerText=`${data.d}`
}

function nextQuiz(){
    let ans=getAnwser()
    const data=question[index];
    if(ans==data.correct){
        right++;
    }
    else{
        wrong++;
    }
    index++;
    loadquestion();
   
}

function preQuiz(){
  index--;

  loadquestion();
}

function submitQuiz(){
    box.innerHTML=`<div style="text-align: center">
        <h2>Thank you </h2>
        <h3> ${right}/${quelength} are correct</h3>
    </div>`
}

function getAnwser(){
    let an;

    qustionInput.forEach((input)=>{
        if(input.checked){
            // console.log(input.value)
            an=input.value;
        }
    })
    return an;
}
    
const reset=()=>{
    qustionInput.forEach((input)=>{
        input.checked=false;
        
    })

}

// const endQuiz=()=>{
//     box.innerHTML=`<div style="text-align: center">
//         <h2>Thank you </h2>
//         <h3> ${right}/${quelength} are correct</h3>
//     </div>`
// }

loadquestion()