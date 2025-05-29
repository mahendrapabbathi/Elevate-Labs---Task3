const express = require("express");
const app = express();
const PORT = 4000;


app.use(express.json());

let books = [];
let nextId = 1;

// REST API
// get
app.get('/books',(req,res)=>{
    res.status(200).json(books)
})

// post
app.post('/books',(req,res)=>{
    const {title,author} = req.body;

    if(!title || !author){
        return res.status(400).json({message:"Title and Author are required"})
    }

    const newBook = {
        id:nextId++,
        title,
        author
    }

    books.push(newBook);
    res.status(201).json(newBook);

})

// put
app.put('/books/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    const book = books.find(b => b.id === id)

    if(!book){
        return res.json({message:"Book not found"});
    }

    Object.assign(book,req.body);    //update fields in req.body 
    res.status(200).json(book);
})

// delete
app.delete('/books/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    const index = books.findIndex(b => b.id === id);

    if(index === -1){
        return res.json({message:"Book not found"})
    }

    books.splice(index,1);
    res.status(200).json({message:"Book deleted successfully"})
})


app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});