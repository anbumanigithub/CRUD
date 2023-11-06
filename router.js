const express=require ("express")
const router=express.Router()
const infoRouter=require("./infoSchema")

//create
router.post("/",(req,res)=>{
    // console.log(req.body);
var data=new infoRouter({
    Name:req.body.Name,
    Age:req.body.Age,
    City:req.body.City
})

 data.save();
res.json(data)

});


//get   all data
 
router.get("/",async (req,res)=>
    {
        var finData= await infoRouter.find()
        res.json(finData)
    })


    
//update
// router.put("/update", async (req,res)=>{
// var update = await infoRouter.update ({_id:req.body._id},{$set:{
//     Name:req.body.Name,
//     Age:req.body.Age,
//     City:req.body.City
// }})
// res.json(update)
// })
                  //(or)
//update method

router.put("/update", async (req, res) => {
  try {
    const filter = { _id: req.body._id };
    const update = {
      Name: req.body.Name,
      Age: req.body.Age,
      City: req.body.City
    };

    const updatedDocument = await infoRouter.findOneAndUpdate(filter, update, { new: true });

    if (updatedDocument) {
      res.json({ message: 'Document updated successfully', updatedDocument });
    } else {
      res.status(404).json({ message: 'Document not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});


//delete method

// router.delete("del/:id",async(req,res)=>{
//     var delData= await infoRouter.findByIdAndRemove(req.params.id)
// .then(e=>{
//     res.json({message:"deleted successfully"})
// })
// })
               // (or)

//delete method


router.delete("/del/:id", async (req, res) => {
  try {
    const delData = await infoRouter.findByIdAndDelete(req.params.id);

    if (delData) {
      res.json({ message: "Deleted successfully" });
    } else {
      res.status(404).json({ message: "Document not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
  }
});



router.get("/",(req,res)=>{

    res.json(" i am a router file")
})

module.exports=router;