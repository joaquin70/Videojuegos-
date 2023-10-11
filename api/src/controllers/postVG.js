const {Videogame, Genre} = require("../db");

const postVG = async(req, res)=>{
   try {
    const imagen =  "https://www.latercera.com/resizer/DQq-BF-ulL7eY2IK1V9CdfW4SJI=/arc-anglerfish-arc2-prod-copesa/public/JRVRFF65PNAJ5PU4JCRHYFJRP4.jpeg"

    const {name, image, platforms, released, rating, genres, description} = req.body

    const [newVG, created] = await Videogame.findOrCreate({
        where: {name},
        defaults: {
            name: name,
            image: image? image : imagen,
            platforms: platforms,
            released: released,
            description: description,
            rating: rating
        }
    })

    if(created === true){
        for(let i = 0; i<genres.length; i++){
            const genreId = (await Genre.findOne({
                where:{
                    name:genres[i]
                }
            })).id
            await newVG.addGenre(genreId)
        }
    
        const finalNewVG = await Videogame.findOne({
            where:{id: newVG.id},
            include:[
                {model: Genre,
                attributes: ["name"],
                through: {attributes:[]}}
            ]
        })
        res.status(200).json(finalNewVG)
      
        }else{
            res.status(404).json({error:"The videogame already exists"})
        }
    
   } catch (error) {
    res.status(400).send({error: error.message})
   }
};

module.exports = {postVG};