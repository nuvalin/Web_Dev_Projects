const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        require: [true, 'Please enter product name'],
        trim: true,
        maxLength: [100, 'Product name cannot exceed 100 characters']
    },
    price: {
        type: Number,
        require: [true, 'Please enter product price'],
        maxLength: [5, 'Product name cannot exceed 5 characters'],
        default: 0.0
    },
    description: {
        type: String,
        require: [true, 'Please enter product description'],
       
    },
    ratings: {
        type: Number,
        default: 0
    },
    images: [
        {
            public_id: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            },


        }
    ],
    category: {
        type: String,
        required: [true,]
    }


})

module.exports = mongoose.model('Product', productSchema);