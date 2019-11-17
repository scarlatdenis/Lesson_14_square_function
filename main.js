function prog() {
	var a = document.getElementById('a').value;
	var b = document.getElementById('b').value;
	var c = document.getElementById('c').value;
	var result = quad(a, b, c);
	document.getElementById('result').textContent = result;
	document.getElementById('otvet').style.display = 'block';
}

function quad(a, b, c) {
	if (a == 0) return "Error, а=0.";
	var D = b * b - 4 * a * c; //Discriminant
	var x1, x2;
	if (D > 0) {
		x1 = (-b + Math.sqrt(D)) / (2 * a);
		x2 = (-b - Math.sqrt(D)) / (2 * a);
		return "a="+a+", b="+b+", c="+c+"\nSquare equation: X1=" + x1 + ", X2=" + x2 + "\nDiscriminant(D)=" + D;
	} else if (D == 0) {
		x1 = -b / (2 * a);
		return " a="+a+", b="+b+", c="+c+"\nSquare equation: X=" + x1 + "\nDiscriminant(D)=" + D;
	} else if (D < 0) return "a="+a+", b="+b+", c="+c+"\nDon`t have!\nDiscriminant(D)=" + D;
}