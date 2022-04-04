 var firebaseConfig = {
    apiKey: "AIzaSyDygiGZx6vyw962KO_1s1u8OIAMwNJJqxY",
    authDomain: "examen-fe73a.firebaseapp.com",
    projectId: "examen-fe73a",
    storageBucket: "examen-fe73a.appspot.com",
    messagingSenderId: "456861029756",
    appId: "1:456861029756:web:6546d1d6e4dc5d5a4780f9",
    measurementId: "G-DXXKTXF5BH"
  };
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  //const u = firebase.firestore();
  


  let twitter = document.querySelector("#twitter")
  let github = document.querySelector("#github")
  let yahoo = document.querySelector("#yahoo")
  let fcebook = document.querySelector("#facebook")
  let go = document.querySelector("#google")
  let email_L = document.querySelector("#email_L")
  let pass_L = document.querySelector("#pass_L")
  let login = document.querySelector("#login")
  let email_r = document.querySelector("#email_r")
  let pass_r = document.querySelector("#pass_r")
  let registro = document.querySelector("#registro")
  
  function logg(){
    firebase.auth().signInWithEmailAndPassword(email_L.value, pass_L.value)
  .then((userCredential) => {
    // Signed in
    console.log("estas logeado")
    var user = userCredential.user;
    // ...
  })
  .catch((error) => {

    var errorCode = error.code;
    var errorMessage = error.message;
  });
  }

  function reg(){
    firebase.auth().createUserWithEmailAndPassword(email_r.value, pass_r.value)
    .then((userCredential) => {
      var user = userCredential.user;
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
    });
  }
  function google(){
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
}
function fb(){
  var provider = new firebase.auth.FacebookAuthProvider();
  firebase
  .auth()
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // The signed-in user info.
    var user = result.user;

    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    var accessToken = credential.accessToken;

    // ...
  })
  .catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;

    // ...
  });
}
function ya(){
  var provider = new firebase.auth.OAuthProvider('yahoo.com');

  firebase.auth().signInWithPopup(provider)
  .then((result) => {
    // IdP data available in result.additionalUserInfo.profile
    // ...

    /** @type {firebase.auth.OAuthCredential} */
    const credential = result.credential;

    // Yahoo OAuth access token and ID token can be retrieved by calling:
    var accessToken = credential.accessToken;
    var idToken = credential.idToken;
  })
  .catch((error) => {
    // Handle error.
  });
}
function git(){

  var provider = new firebase.auth.GithubAuthProvider();

  firebase
  .auth()
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // This gives you a GitHub Access Token. You can use it to access the GitHub API.
    var token = credential.accessToken;

    // The signed-in user info.
    var user = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
}
function tw(){

  var provider = new firebase.auth.TwitterAuthProvider();

  firebase
  .auth()
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // This gives you a the Twitter OAuth 1.0 Access Token and Secret.
    // You can use these server side with your app's credentials to access the Twitter API.
    var token = credential.accessToken;
    var secret = credential.secret;

    // The signed-in user info.
    var user = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
}

/* const documento = document.getElementById("#fdoc")

const guardar = (titulo, describsion) => 
  u.collection("task").doc().set({
    titulo,
    describsion
  });

  documento.addEventListener('submit', async (e) => {
  e.preventDefault()

  const titulo = documento["ti"];
  const describsion = documento["des"];

  await guardar (titulo.value, describsion.value )

  documento.reset();
  titulo.focus();

  console.log(titulo, describsion);
})*/
