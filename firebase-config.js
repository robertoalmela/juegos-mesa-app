// 🔥 Firebase Configurado
// Proyecto: juegos-mesa-8a6ed
// Database URL: https://juegos-mesa-8a6ed-default-rtdb.firebaseio.com

const firebaseConfig = {
  apiKey: "AIzaSyAGLShVWObtRXuFDpi6szhg0PJ7eRbJPq0",
  authDomain: "juegos-mesa-8a6ed.firebaseapp.com",
  databaseURL: "https://juegos-mesa-8a6ed-default-rtdb.firebaseio.com",
  projectId: "juegos-mesa-8a6ed",
  storageBucket: "juegos-mesa-8a6ed.firebasestorage.app",
  messagingSenderId: "1048459062662",
  appId: "1:1048459062662:web:308a37f5a193e4d3cd1007"
};

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();
