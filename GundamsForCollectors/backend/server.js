import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import userRouter from './routers/userRouter.js';
// import data from './data.js'
import productRouter from './routers/productRouter.js';
import orderRouter from './routers/orderRouter.js';
import uploadRouter from './routers/uploadRouter.js';
    
dotenv.config();

 const app = express();
 app.use(express.json());
 app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/GundamsForCollectors', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});
// below line api reads the id of the products when selected for redirect to the product screen page.
// app.get('/api/products/:id', (req, res) => {
 //   const product = data.products.find((x) => x._id === req.params.id);
 //   if(product) {
 //       res.send(product);
  //  } else {
 //     res.status(404).send({ message: 'Product Not Found' });
//    }
    
//});
// the below api reads the static data of the index.html from backend data.js of the products.
// app.get('/api/products', (req, res) => {
//    res.send(data.products);
//});
app.use('/api/uploads', uploadRouter);
app.use('/api/users', userRouter);
app.use('/api/products', productRouter);
app.use('/api/orders', orderRouter);
app.get('/api/config/paypal', (req, res) => {        // this line is code for paypal api.
    res.send(process.env.PAYPAL_CLIENT_ID || 'sb');  // this line paypal code for api.
});

const __dirname = path.resolve();
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));
app.get('/', (req, res) => {
   res.send('Server is ready');
});

app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server at http://localhost:${port}`);
});

