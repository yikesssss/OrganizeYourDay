
function createTimetable() {
    var a = 8;
    var days = ['', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    var newTable = document.createElement('table')
    var header = document.createElement('tr');
    header.setAttribute('id', 0)

    for (var i = 0; i < 8; i++) { //creates and adds all the days of the week to the first row
        var newCell = document.createElement('td');
        newCell.innerHTML = days[i];
        header.appendChild(newCell);
    }
    newTable.appendChild(header);

    for (var i = 8; i < 23.5; i += 0.5) { //incrementing by 1/2 so that it will be easier to display the time
        var newRow = document.createElement('tr'); //creates a new row
        newRow.setAttribute('id', i)
        for (var j = 0; j < 8; j++) { //goes through each day and creates a new cell
            var newCell = document.createElement('td');
            newCell.setAttribute('id', i + ' ' + j)
            if (j == 0) { //if it is the first cell it will add the time to it
                newCell.innerHTML = i + ':00'

                if (i % 1 == 0.5) { //if it is a decimal number then the time is a 30 miniute interval
                    newCell.innerHTML = i - 0.5 + ':30'
                }
            }

            newRow.appendChild(newCell)
        }
        newTable.appendChild(newRow)
    }

    var b = document.getElementById('schedule')
    b.appendChild(newTable);

    var tabEl = document.querySelector('table');
    tabEl.addEventListener('click', selectSlot);

    //function addText() {} coming soon...

}



function selectSlot(e){
    var t = e.target; //gets the element that the mouse clicked on
    var ident = t.id.split(' ') //divides the id into its row and column
    
    if(ident[1] != 0 && t.parentNode.id != 0) {
        t.style.backgroundColor = 'red' //sets the cliked element whitin the table to set
        // t.setAttribute('class', 'selected')
    }

}





window.addEventListener('load', (event)=> {
    createTimetable(); //initalises table

    var reset = document.querySelector('button');
    reset.addEventListener('click', () => {
        document.querySelector('table').remove(); //removes previous table
        createTimetable(); //replaces it with a new one
    })
    
})



