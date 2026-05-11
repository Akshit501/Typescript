import express,{Request,Response} from 'express';

const app=express();

const PORT:number=3000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.get("/",(req:Request,res:Response)=>{
  res.send("Hello from typescript+express")

});

app.get("/user",(req:Request,res:Response)=>{
  type User={
    id:number
    name:string,
    isActive:boolean
  }

  const userUser:User={
    id:1,
    name:"John Doe",
    isActive:true
  };

  res.json({userUser})

});

app.put("/update",(req:Request,res:Response)=>{
  type UpdateData={
    id:number,
    name:string
  }

  

  const updateData:UpdateData=req.body;

  // Logic to update user would go here
  res.json({updateData})

});

app.delete("/delete/:id",(req:Request,res:Response)=>{
  const userId:number=parseInt(req.params.id as string,10);
  // Logic to delete user would go here
  if(isNaN(userId)){
    res.json({message:`User with id ${userId} not found`})
  }

  res.json({userId})
})

app.post("/create",(req:Request,res:Response)=>{
  type CreateUser={
    name:string,
    isActive:boolean
  }


  const createUser:CreateUser=req.body;

  // Logic to create user would go here
  res.json({createUser
  })
})


app.listen(PORT,()=>{ 
  console.log(`Server is running on port ${PORT}`);
});