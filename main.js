
//console.log(fetch('https://official-joke-api.appspot.com/jokes/random'))

//======== API fetch ========

fetch('https://official-joke-api.appspot.com/jokes/random')


//========= json() ============

.then((res)=>res.json())

//=========== value ============
.then((msg)=>{
	console.log(msg.setup)
})