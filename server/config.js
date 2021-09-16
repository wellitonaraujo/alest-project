const firebase = require("firebase");

const firebaseConfig = {
    apiKey: "AIzaSyCso9nhWBNcULPVw_kQia1PF-5xn11WHLs",
    authDomain: "products-well.firebaseapp.com",
    projectId: "products-well",
    storageBucket: "products-well.appspot.com",
    messagingSenderId: "764842559320",
    appId: "1:764842559320:web:81897b38ff1257ec5e472d",
    measurementId: "G-PMG9RMKVSC",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const Product = db.collection("Products");

module.exports = Product;