var arr=[];

function register() {      				
	var food = document.getElementById('food').value;
	var calorie = document.getElementById('calorie').value;
				
	var val = [food, calorie];
	arr.push(val);
				
	printList();
}

function drop(no) {
	arr.splice(no, 1);
					
	printList();
}

var num;
function edit(no) {
	alert(no);
	num = no;
				
	var text = "";
	text += "Food : <input type='text' id='food' value=" + arr[no][0] + "><br>";
	text += "Calorie : <input type='text' id='calorie' value=" + arr[no][1] + "><br>";
	text += "<input type='button' value='register' onclick=register() />"
	text += "<input type='button' value='edit' onclick=change() />"
	text += "</table>";
									
	document.getElementById('value').innerHTML = text;
}
			
function change() {
	var food = document.getElementById('food').value;
	var calorie = document.getElementById('calorie').value;
				
	var val=[food, calorie];
	arr[num] = val;
				
	printList();
}

function printList() {
	var text = "";
				
	text += "<table>";
	text += "<th>Food</th>";
	text += "<th>Calorie</th>";
							
	for (var i = 0; i < arr.length; i++) {
		text += "<tr><td><li>" + arr[i][0] + "</td>";
		text += "<td>" + arr[i][1] + "kcal</td>";
		text += "<td><input type='button' onclick=edit(" + i + ") value='edit'></td>";
		text += "<td><input type='button' onclick=drop(" + i + ") value='delete'></li></td></tr>";
	}	
	text += "</table>";
										
	document.getElementById('list').innerHTML = text;
}
