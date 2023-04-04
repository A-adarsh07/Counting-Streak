let count =0;
// change the count-el in the html to reflect the new count
let countEl= document.getElementById("count-el");
console.log(countEl);

function increment(){
        // we're changing the html element data
        count=count+1;
        countEl.innerText=count;
// as we click the increment button the count will keep on increasing
}

// increment();
// save();

let saveEl=document.getElementById("save-el");


function save(){
    let total=count+" - ";
    saveEl.textContent+=total; // we can also write textcontent in place of innertext ...but in text content the space will also take place 

        console.log(count);
        alert(`Streak reached ${count}, Good job !!!`);
        countEl.textContent=0;
        count=0;
}
