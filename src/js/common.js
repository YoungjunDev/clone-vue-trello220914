   // add a card event
   
   var Array = document.getElementsByClassName('add-card-btn btn');
   var Reset = document.getElementsByClassName('btn-close');
   var Title = document.getElementsByClassName('list-title');


    export const cardAdd = function() {
          for(var i=0; i< Array.length; i++){
            Array[i].addEventListener("click", handleClick(i));
            console.log(Array[i]);
            document.getElementsByClassName("add-card-btn")[0].style.display = "none";
            document.getElementsByClassName("add-card-hide-box")[0].style.display = "block";
        }  
    }

    const handleClick = function(i) {
        console.log(i);
        document.getElementsByClassName("add-card-btn btn")[i].style.display = "none";
        document.getElementsByClassName("toggle-box")[i].style.display = "block";
    }

    export const cardReset = function() {
        for(var j=0; j< Reset.length; j++){
            Reset[j].addEventListener("click", handleClick2(j));
        }  
    }

    const handleClick2 = function(j) {
        console.log(j);
        document.getElementsByClassName("add-card-btn btn")[j].style.display = "block";
        document.getElementsByClassName("toggle-box")[j].style.display = "none";
    }

    export const Rewrite = function() {
        for(var k=0; k< Title.length; k++){
            Title[k].addEventListener("click", handleClick3(k));
        } 
    }

    const handleClick3 = function(k) {
        console.log(k);
        document.getElementsByClassName("list-title-input")[k].style.display = "block";
        document.getElementsByClassName("list-title")[k].style.display = "none";
    }

    export const listAdd = function() {
        var newDiv = document.createElement('div');
        var newH3 = document.createElement('h3');
        var newInput = document.createElement("input");
        var newButton = document.createElement("button")

        newDiv.setAttribute("class", "title-menu");
        newH3.setAttribute("class", "list-title");
        newInput.setAttribute("class", "list-title-input");
        newButton.setAttribute("class", "action-menu");
    }
    
