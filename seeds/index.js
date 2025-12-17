if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const mongoose = require('mongoose');
const Campground = require('../models/campground');
const cities = require('./cities');
const { places, descriptors } = require('./seedHelpers');

mongoose.connect(process.env.DB_URL);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Database connected')
});

const sample = array => array[Math.floor(Math.random() * array.length)];


const seedDB = async () => {
    await Campground.deleteMany({});
    for (let i = 0; i < 300; i++) {
        const random1000 = Math.floor(Math.random() * 1000);
        const price = Math.floor(Math.random() * 20) + 30;
        const camp = new Campground({
            author: '693b75efdce6e0e8994234f0',
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            geometry: {
                type: "Point",
                coordinates: [
                    cities[random1000].longitude,
                    cities[random1000].latitude,
                ]
            },
            title: `${sample(descriptors)} ${sample(places)}`,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem in dolor culpa rem nobis minus placeat accusantium molestias laborum. Aperiam fuga odit, nemo quisquam ad doloremque molestias nihil eaque dicta.',
            price,
            images: [
                {
                    url: 'https://res.cloudinary.com/dgzphy9bu/image/upload/v1765423056/YelpCamp/i50fa7paflttpqik3guh.jpg',
                    filename: 'YelpCamp/i50fa7paflttpqik3guh'
                },
                {
                    url: 'https://res.cloudinary.com/dgzphy9bu/image/upload/v1765423056/YelpCamp/avedpjnlnhv3whmxenzj.jpg',
                    filename: 'YelpCamp/avedpjnlnhv3whmxenzj'
                },
                {
                    url: 'https://res.cloudinary.com/dgzphy9bu/image/upload/v1765506978/YelpCamp/qhno6sxebvojskgql6ww.jpg',
                    filename: 'YelpCamp/qhno6sxebvojskgql6ww'
                },          
                {           
                    url: 'https://res.cloudinary.com/dgzphy9bu/image/upload/v1765427423/YelpCamp/avhm4di2xx94cekckiw6.jpg',
                    filename: 'YelpCamp/avhm4di2xx94cekckiw6'
                }
            ]
        });
await camp.save();
    }
}

seedDB().then(() => {
    mongoose.connection.close();
})