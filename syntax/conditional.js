var agrs = process.argv; 
console.log(agrs[2]); // ['node 의 위치','현재 파일의 위치','그 다음에 입력한 값이 노출'] 배열로 나옴
if(agrs[2] === '1'){
	console.log('c1')
}else{
	console.log('c2')
}
console.log('D');