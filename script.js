const input=document.getElementById("txtar")
const ch=document.getElementById('chars')
const wr=document.getElementById('words')
let ar
input.addEventListener("input",()=>{
    
    let wrd=0
        ch.innerText=input.value.length.toString();
        ar=input.value.toString().trim().split(/\s+/)
        wr.innerText=((input.value.trim()=="")?0:ar.length).toString()
        
        
    
})

