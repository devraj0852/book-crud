const Book = require('../model/book.model');

const addBook = async (req, res) =>{
    let newBook = new Book({
        title: req.body.title,
        author: req.body.author,
        summary: req.body.summary,
    })
    newBook.save()
    .then(resp =>{
        res.json({
            success: true,
            message: `Book Added successfully`,
            resp
        })
    }).catch (error =>{
        res.json({
            success: false,
            message:`An error occured`
        })
    })
}

const getAllBooks = async(req, res) =>{
    Book.find()
    .then(resp =>{
        res.json({
            success: true,
            message: `get all books successfully`,
            resp
        })
    }).catch (error =>{
        res.json({
            success: false,
            message:`An error occured`,
            error
        })
    })
}

const updateBook = async(req, res) =>{
    let updateData = {
        title: req.body.title,
        author: req.body.author,
        summary: req.body.summary,
    }
    Book.findOneAndUpdate({_id: req.params.id},updateData,{new: true})
    .then(resp =>{
        res.status(200).json({
            success: true,
            message: `Successfully updated`,
            resp
        })
    }).catch (error =>{
        res.status(500).json({
            success: false,
            message: `error in updating user`,
            error
        })
    })
}

const deleteBook = async(req, res) =>{
    Book.findByIdAndDelete({_id: req.params.id})
    .then(resp =>{
        res.status(200).json({
            success: true,
            message: `Successfully Deleted`,
            resp
        })
    }).catch (error =>{
        res.status(500).json({
            success: false,
            message: `error in Deleting User`,
            error
        })
    })
}

module.exports = {
    addBook,
    getAllBooks,
    updateBook,
    deleteBook
}