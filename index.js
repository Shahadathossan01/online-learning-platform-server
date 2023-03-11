const express=require('express');
const cors=require('cors')
const app=express()
const courses=require('./courses.json')
const documents=require('./documents.json')
const port=5000;
app.use(cors());
app.use(express.json())

app.get('/',(req,res)=>{
    res.send('Hello Express')
})

app.get('/courses',(req,res)=>{
    res.send(courses)
})

app.get('/courses/:id',(req,res)=>{
    const id=(req.params.id)
    const course=courses.find(ch=>ch.id===id)
    res.send(course)
})

app.get('/documents',(req,res)=>{
    res.send(documents)
})
 
app.get('/documents/:id',(req,res)=>{
    const id=((req.params.id))
    console.log(typeof id)
    const document=documents.find(ch=>ch.document_id===id)
    res.send(document)
   
})


app.listen(port,()=>{
    console.log('server is running')
})
