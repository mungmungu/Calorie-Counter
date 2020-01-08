function register() {      				
	var food = document.getElementById('food').value;
	var calorie = document.getElementById('calorie').value;
				
	var val = [food, calorie];
	arr.push(val);

	var text = "";
				
	text += "<table>";
	text += "<th>Food</th>";
	text += "<th>Calorie</th>";
	for (var i = 0; i < arr.length; i++) {
		text += "<tr><td><li>" + arr[i][0] + "</td>";
		text += "<td>" + arr[i][1] + "kcal</td>";
		text += "<td><input type='button' onclick=update() value='edit'</td>";
		text += "<td><input type='button' onclick=delete() value='delete'</li></td></tr>";
	}
	text += "</table>";
				
	document.getElementById('test').innerHTML = text;
}