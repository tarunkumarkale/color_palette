const generateBtn=document.getElementById('generatebtn')


const singleHexColorGenrator=()=>{
    const hex=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]

    let hexColor="#";

    for(let i=0;i<6;i++){
        let random=Math.floor(Math.random()*hex.length)
        hexColor+=hex[random]
console.log(hexColor)
        console.log({random})  // it print in the form of object
//         // {random: 0.6128453115250181}
// Index.js:12 {random: 0.016653327890429948}
// Index.js:12 {random: 0.37020609080643063}
// Index.js:12 {random: 0.7835925305828333}
// Index.js:12 {random: 0.5019041402862825}
// Index.js:12 {random: 0.07404975316882134}



    }
    return hexColor  // means here it return hexColor to sinlehexcolorgenrator  loop ke bhar value ese bhi pass kr sakte hai  and eske function ko store ko call kiya call kiya see below 
}


//now four color generate platebelow

const colorPlattegenerator=()=>{
    const colorPlatte=[]
    for(i=0;i<4;i++){
        colorPlatte.push(singleHexColorGenrator())
    }
    return colorPlatte;
}



generateBtn.addEventListener('click',()=>{

    const colorsContainer=document.querySelector('.colors_container')
    colorsContainer.innerHTML='';

// const hex=singleHexColorGenrator()  1st esko

let colorPlatte=colorPlattegenerator()   //2 nd esko
colorPlatte.forEach((color,i)=>{
   const colorDiv=document.createElement("div")
    colorDiv.id=`color${i+1}`  // it start one 
    colorDiv.className='colorBox'

    colorDiv.style.background=color;

    colorsContainer.appendChild(colorDiv)
    console.log(colorsContainer)

    // tag
    const colorTag=document.createElement('p')
    colorTag.id=`color${i+1}Tag`
    colorTag.className='colorTag';
    colorTag.innerHTML=color;
    colorDiv.appendChild(colorTag)
    colorsContainer.appendChild(colorDiv)

})

const copyclipboard=(id)=>{
   
    const el=document.getElementById(id)

    // special line
    navigator.clipboard.writeText(el.innerText)
    .then(() => {
        alert(`Do you want to copy this ${id}`);
    })
    .catch((err) => {
        alert('Could not copy');
    });
}

// console.log({colorPlatte})// call kiya
// // console.log({hex})
// console.log('btn')

const colorTags=document.querySelectorAll('.colorTag');
colorTags.forEach((Element,i)=>{
    Element.addEventListener('click',()=>copyclipboard(`color${i+1}Tag`))
})



})