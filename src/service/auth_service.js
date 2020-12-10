import firebase from 'firebase';
import firebaseApp from './firebase';

class AuthService {
  login(providerName) {
    const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
    return firebaseApp.auth().signInWithPopup(authProvider);
  }

  onAuthChange(onUserChanged){
    firebase.auth().onAuthStateChanged((user) => {
      onUserChanged(user); // firebase의 onUserChanged라는 콜백함수(user의 로그인 상태 observer)를 user를 전달하면서 호출
    })
  }

  logout(){
    firebase.auth().signOut()
    .then(function() {
      // Sign-out successful.
    }).catch(function(error) {
      // An error happened.
    });
  }
}

export default AuthService;
