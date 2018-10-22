'use strict';

class TestBrocoders {

	constructor (nLine, nColum, selector){
		this.nLine = nLine,
		this.nColum = nColum,
		this.container = selector,
		this.arrIdButton = ["minus_top", "minus_left", "plus_right", "plus_bottom"];
	}

	initialize (){
		
		for (let i = 0; i < 4; i++) {
			let button = document.createElement('button');
			button.className = "button";
			button.id = this.arrIdButton[i];
			button.innerHTML = this.arrIdButton[i] === this.arrIdButton[0] || this.arrIdButton[i] === this.arrIdButton[1] ? "&minus;" : "+";

			this.container.appendChild(button);
		}

		let field = document.createElement('div');
		field.id = "field";
		this.container.appendChild(field);

	    for (let i = 0; i < this.nLine; i++){
	        let fLine = document.createElement('div');

	        for (let j = 0; j < this.nColum; j++){
	            let fCell = document.createElement('div');
	            fCell.className = "cell";
	            fLine.appendChild(fCell);
	        }

	        field.appendChild(fLine);
	    }

	    return true;
	}

	
	//Скрываем кнопки минус про выходе курсора из области
	hiddenMinus() {

	    document.getElementById("minus_top").style.visibility = 'hidden';
	    document.getElementById("minus_left").style.visibility = 'hidden';
	    
	}


	visibleMinus() {

	    let container = document.getElementById('field');
	    let nLine = container.children.length;
	    let nColumn = container.children[0].children.length;

	    if (nLine > 1) {
	    	document.getElementById("minus_left").style.visibility = 'visible';
	    }

	    if (nColumn > 1){
	    	document.getElementById("minus_top").style.visibility = 'visible';
	    }

	}

	//Получаем ячейку над которой сработало событие и передаем позицию для минусов
	coordinatesMinus(event) {
	    if (event.target.className === "cell"){
	        let box = event.target.getBoundingClientRect();
	        document.getElementById("minus_top").style.left = box.left-10 + "px";
	        document.getElementById("minus_left").style.top = box.top-10 + "px";
	    }
	}

	//Добавляем столбец
	plusColumn() {
	    let container = document.getElementById('field');
	    let n = container.children.length;

	    for (let i = 0; i < n; i++) {
	        let cell = document.createElement('div');
	        cell.className = "cell";
	        container.children[i].appendChild(cell);
	    }

	    return true;
	}

	//Добавляем линию
	plusLine() {
	    let container = document.getElementById('field');

	    container.appendChild(container.children[0].cloneNode(true));

	    return true;
	}

	//Удавляем столбец
	minusColumn() {

	    let container = document.getElementById('field');
	    let elem = container.children[0].children.length;
	    let pCell = container.children[0].children[elem-1].getBoundingClientRect();
	    let pMinus = this.getBoundingClientRect();

	    if (elem < 2){
	        return false;
	    }

	    if (pMinus.left === pCell.left){
	        document.getElementById("minus_top").style.left = pMinus.left-66 + "px";
	    }

	    let n = container.children.length;

	    let pColumn = Math.round((pMinus.left - 14)/56)-1;

	    for (let i = 0; i < n; i++) {
	        let conChild = container.children;
	        conChild[i].removeChild(conChild[i].children[pColumn]);
	    }
	    
	    let nColumn = container.children[0].children.length;
	    if (nColumn < 2){
	    	document.getElementById("minus_top").style.visibility = 'hidden';
	    }

	    return true;
	}

	//Удавляем линию
	minusLine() {

	    let container = document.getElementById('field');
	    let elem = container.children.length;
	    let pCell = container.children[elem-1].children[0].getBoundingClientRect();
	    let pMinus = this.getBoundingClientRect();

	    if (elem < 2){
	        return false;
	    }

	    if (pMinus.top === pCell.top){
	        document.getElementById("minus_left").style.top = pMinus.top-66 + "px";
	    }

	    let pLine = Math.round((pMinus.top - 14)/56)-1;

	    container.removeChild(container.children[pLine]);

	    let nLine = container.children.length;
	    if (nLine < 2) {
	    	document.getElementById("minus_left").style.visibility = 'hidden';
	    }	    

	    return true;
	}

}

const testTask = new TestBrocoders(4, 4, document.getElementById('testTask'));

testTask.initialize();
document.getElementById('plus_right').addEventListener('click', testTask.plusColumn);
document.getElementById('plus_bottom').addEventListener('click', testTask.plusLine);
document.getElementById('minus_top').addEventListener('click', testTask.minusColumn);
document.getElementById('minus_left').addEventListener('click', testTask.minusLine);
document.getElementById('testTask').addEventListener('mouseleave', testTask.hiddenMinus);
document.getElementById('field').addEventListener('mouseenter', testTask.visibleMinus);
document.getElementById('field').addEventListener('mousemove', testTask.coordinatesMinus);