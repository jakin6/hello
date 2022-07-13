exports.view = (req,res)=>{
        res.render('book/book')
}


//add book
exports.addBook = ((req,res)=>{
        res.render('book/add-book')
});
//edit book
exports.edit = ((req,res)=>{
res.render('book/edit-book')
})


