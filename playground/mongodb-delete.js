const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db)=>{
	if(err){
		return console.log('Unable to connect to the Mongodb server');
	}
	console.log('Connected to Mongodb server');

	// db.collection('Todos').deleteMany({text:'In my feelings'}).then((result)=>{
	// 	console.log(result);
	// });

	// db.collection('Todos').deleteOne({text:'Passionfruit'}).then((result)=>{
	// 	console.log(result);
	// });

	// db.collection('Todos').findOneAndDelete({text:'Passionfruit'}).then((result)=>{
	// 	console.log(result);
	// })

	// db.collection('Users').deleteMany({name:'Himanshu Dua'}).then((result)=>{
	// 	console.log(result);
	// })

	db.collection('Users').findOneAndDelete({_id: new ObjectID('5b5236c92bb9d203e8467239')}).then((results)=>{
		console.log(JSON.stringify(results,undefined,2));
	});

	// db.close();
});