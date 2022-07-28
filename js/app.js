// // localStorage.clear("");



// var name = 'name';
// var email = 'email';
// var subject = 'subject';
// var message = 'message';


// function sent1(){
//     var inp = document.getElementById('inp');
//     var inp1 = document.getElementById('inp1');
//     var inp2 = document.getElementById('inp2');
//     var inp3 = document.getElementById('inp3');

    
//     name +=0;
//     email +=0;
//     subject +=0;
//     message +=0;

//     localStorage.setItem(name, inp.value);
//     localStorage.setItem(email, inp1.value);
//     localStorage.setItem(subject, inp2.value);
//     localStorage.setItem(message, inp3.value);


// }

// function writeTable(){
//     var tbody = document.getElementById('tbody');
//     var main1 = document.getElementById('main1');
//     var table1 = document.getElementById('table1');
//     var div44 = document.getElementById('div44');
//     var body = document.body;
    

//     var tr = document.createElement('tr');
//     var td = document.createElement('td');
//     var td2 = document.createElement('td');
//     var td3 = document.createElement('td');
//     var td4 = document.createElement('td');
//     var td5 = document.createElement('td');

//     td2.innerText = "1";

//     td2.innerText = localStorage.getItem('name000');
//     td3.innerText = localStorage.getItem('email000');
//     td4.innerText = localStorage.getItem('subject000');
//     td5.innerText = localStorage.getItem('meessage000');

    

//     tr.appendChild(td);
//     tr.appendChild(td2);
//     tr.appendChild(td3);
//     tr.appendChild(td4);
//     tr.appendChild(td5);
//     tbody.appendChild(tr);
//     table1.appendChild(tbody);
//     div44.appendChild(table1);
//     main1.appendChild(div44);
//     body.appendChild(main1);


    
// }


// localStorage.clear("");


function writeTable(){
    var tbody = document.getElementById('tbody');
    var main1 = document.getElementById('main1');
    var table1 = document.getElementById('table1');
    var div44 = document.getElementById('div44');
    var body = document.body;
    

    var tr = document.createElement('tr');
    var td = document.createElement('td');
    var td2 = document.createElement('td');
    var td3 = document.createElement('td');
    var td4 = document.createElement('td');
    var td5 = document.createElement('td');

    td2.innerText = "1";





    td2.innerText = localStorage.getItem('name');
    td3.innerText = localStorage.getItem('email');
    td4.innerText = localStorage.getItem('subject');
    td5.innerText = localStorage.getItem('message');


    

    tr.appendChild(td);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    tbody.appendChild(tr);
    table1.appendChild(tbody);
    div44.appendChild(table1);
    main1.appendChild(div44);
    body.appendChild(main1);


    
}




var name = 'name';
var email = 'email';
var subject = 'subject';
var message = 'message';
var ff = Infinity;

function sent1(){
    var inp = document.getElementById('inp');
    var inp1 = document.getElementById('inp1');
    var inp2 = document.getElementById('inp2');
    var inp3 = document.getElementById('inp3');

    // for(let i = 0; i < ff; i++){
    //     name +=i;
    //     email +=i;
    //     subject +=i;
    //     message +=i;
    // }

    
    // name +=0;
    // email +=0;
    // subject +=0;
    // message +=0;

    localStorage.setItem(name, inp.value);
    localStorage.setItem(email, inp1.value);
    localStorage.setItem(subject, inp2.value);
    localStorage.setItem(message, inp3.value);


}
