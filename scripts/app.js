
const firebaseConfig = {
  apiKey: "AIzaSyDGuIqRzbYFHvglv--PnZZbFyKmad_B5lg",
  authDomain: "colegio-f65ee.firebaseapp.com",
  projectId: "colegio-f65ee",
  storageBucket: "colegio-f65ee.appspot.com",
  messagingSenderId: "901245399761",
  appId: "1:901245399761:web:870c80f1f9de20acc4cbf0"
};  

firebase.initializeApp(firebaseConfig)
firebase.firestore().settings({
        experimentalForceLongPolling: false,
        merge: true,
      });
const db = firebase.firestore()

db.collection("turmaA").get() // o get é uma promisse que ira pegar e retonar um o
                        .then((snapshot)=>{
                            snapshot.forEach((doc)=>{
                                let aluno = doc.data() ;
                                console.log(aluno.nome)

                          
                            });
                        }
                        )


