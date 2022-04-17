const calcButton = document.getElementsByClassName("calcButton");

const add = function(a,b) {
return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const multiply = (a,b) => {
    return a*b;
}


const divide = (a,b) => {
    return a/b;
}

const operate = (op, a, b) => {
    return op(a,b);
}

function genDivs(v){
    const e = document.querySelector('.calculator'); 
    var display = document.createElement('div');
    display.className = "display";
    display.style.width = "100%";
    display.style.height = "100px";
    display.textContent = "5318008";
    e.appendChild(display)
    for(var i = 0; i < v; i++){ 
    var row = document.createElement("div"); 
    row.className = "row"; 
    for(var x = 1; x <= v; x++){ 
        var cell = document.createElement("div"); 
        cell.className = "calcButton";
        cell.style.width = "100%";
        let height = 700 / parseInt(v);
        cell.style.height = `${height}px`
        row.appendChild(cell); 
    } 
    e.appendChild(row); 
    }
    for (let i = 0; i < calcButton.length; i++) {
        calcButton[i].addEventListener("click", () => {
        calcButton[i].className += " squareBlack";
 
        });
        calcButton[i].id = i;
    }
    numOrder = ["7", "8", "9", "+", "4","5","6","-","1","2","3","*","0",".","=","/"]
    for (let i = 15; i >= 0; i--){
        calcButton[i].textContent = numOrder[i]    
    }
    const clearBtnDiv = document.createElement('div');
    e.appendChild(clearBtnDiv)
    clearBtnDiv.className = "clearButtonDiv"
    const clearBtn = document.createElement('button');
    clearBtn.textContent='Clear';
    clearBtnDiv.appendChild(clearBtn);
    clearBtn.className = "clearButton"

}
