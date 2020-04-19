/*Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]*/




Test.assertEquals(
  JSON.stringify(moveZeros([1,2,0,1,0,1,0,3,0,1])),
  JSON.stringify([ 1, 2, 1, 1, 3, 1, 0, 0, 0, 0 ])
);



let moveZeros = function(a) {
	if(a.length <= 1) {return false};
	let zi = a.indexOf(0);
	if(zi === -1 || zi === a.length - 1) {return false}
	for(let i = zi + 1; i < a.length;i++) {
		if(a[i] !== 0) {
			a[zi++] = a[i];
			a[i] = 0;
		}
	}
	return a;
}		