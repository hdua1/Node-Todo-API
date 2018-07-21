const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '5b5392923728d30b8d0a3a4211';

if(!ObjectID.isValid(id)){
	console.log('Invalid ID');
}
Todo.find({
	_id: id
}).then((todos)=>{
	console.log('Todos',todos);
});

Todo.findOne({
	_id:id
}).then((todo)=>{
	console.log('Todo',todo);
});

Todo.findById(id).then((todo)=>{
	if(!todo){
		return console.log('ID not found');
	}
	console.log('Todo By ID',todo);
}).catch((e)=>console.log(e));

// User.findById('5b539f111d1959856cbe886b').then((user)=>{
// 	if(!user){
// 		return console.log('Unable to find user');
// 	}
// 	console.log(JSON.stringify(user,undefined,2));
// },(e)=>{
// 	console.log(e);
// });