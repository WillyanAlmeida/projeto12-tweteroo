import express from 'express';
import cors from "cors"



const app = express();
app.use(cors());
app.use(express.json())
app.listen(5000, ()=> console.log("server on"));
 const user = [
// 	{
// 	username: 'luffy', 
// 	avatar: "https://epipoca.com.br/wp-content/uploads/2021/11/luffy-12112021.jpg" 
// },
// {
// 	username: 'ace', 
// 	avatar: "https://aniyuki.com/wp-content/uploads/2021/12/aniyuki-portgas.d.ace-42.jpg" 
// },
// {
// 	username: 'sabo', 
// 	avatar: "https://www.comboinfinito.com.br/principal/wp-content/uploads/2019/09/One-Piece-3.jpg" 
// },
// {
// 	username: 'zoro', 
// 	avatar: "https://static.wikia.nocookie.net/onepiece/images/6/64/Roronoa_Zoro_Anime_Pre_Timeskip_Infobox.png/revision/latest?cb=20181209230036&path-prefix=pt" 
// },
// {
// 	username: 'sanji', 
// 	avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThJ5T6D_9bhZ53qfNzrg-5JxNP2xH4q1VX5w" 
// },
// {
// 	username: 'nami', 
// 	avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqaru7z-aQg-LhF9-ftq8MSh919vxSSLv11A" 
// },
// {
// 	username: 'robin', 
// 	avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkchi3a-zyswQnx_89NjMMoG9uiEMo8mBNzw" 
// }
];

const tweets = [
	//  {
	//  	username: "luffy",
	//  	tweet: "Eu serei o rei dos piratas!"
	//  },
    //  {
	//  	username: "luffy",
	//  	tweet: "quero caaarne!"
	//  },
    //  {
	//  	username: "luffy",
	//  	tweet: "gumo gumo no pistol!"
	//  }
]



app.get ('/tweets', (req, res)=>{
    

    let aux = tweets.slice(-10);
	let lasttweets=[]
	aux.forEach((x) => {		
		 let y = user.find((users)=> users.username === x.username)		 
		 lasttweets.push({username: x.username, tweet: x.tweet, avatar: y.avatar})
		 })		
        res.send(lasttweets)
})

app.get ('/tweets/:USERNAME', (req, res)=>{
    let {nameuser}= req.params

	let arrayuser = tweets.filter((users)=> users.username === nameuser)	

    let aux = arrayuser.slice(-10);
	let lasttweets=[]
	aux.forEach((x) => {		
		 let y = user.find((users)=> users.username === x.username)		 
		 lasttweets.push({username: x.username, tweet: x.tweet, avatar: y.avatar})
		 })		
        res.send(lasttweets)
})

app.post ('/sign-up', (req, res)=>{
	let {username, avatar} = req.body

	if(!typeof(username)===string || !typeof(avatar)===string ){
		res.status(400).send('Todos os campos são obrigatórios!')
		return
	}

	if(!username || !avatar){
		res.status(400).send('Todos os campos são obrigatórios!')
		return
	}
    let newuser = {username, avatar}
    user.push(newuser)
	res.status(201).send("OK")
})

app.post ('/tweets', (req, res)=>{

	let {username, tweet} = req.body;

	if(!username || !tweet){
		res.status(400).send('Todos os campos são obrigatórios!')
		return
	}

	if(!user.find((users)=> users.username === username)){
		res.status(401).send('UNAUTHORIZED')
		return		
	}
	let newtweet = {username, tweet}
	tweets.push(newtweet)
		res.status(201).send("OK")

 
 })





