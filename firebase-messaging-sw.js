importScripts(
  "https://www.gstatic.com/firebasejs/12.19.0/firebase-app-compat.js"
);

importScripts(
  "https://www.gstatic.com/firebasejs/12.19.0/firebase-messaging-compat.js"
);


const firebaseConfig = {

  apiKey:
    "AIzaSyDSFvZ3JtqTB7HP85WyRa5dka9VRUJdKDU",

  authDomain:
    "baby-7eec4.firebaseapp.com",

  databaseURL:
    "https://baby-7eec4-default-rtdb.asia-southeast1.firebasedatabase.app",

  projectId:
    "baby-7eec4",

  storageBucket:
    "baby-7eec4.firebasestorage.app",

  messagingSenderId:
    "824621868036",

  appId:
    "1:824621868036:web:870a7c66e9311fb77ec151"

};


firebase.initializeApp(firebaseConfig);

const messaging =
  firebase.messaging();


messaging.onBackgroundMessage(
  function(payload) {

    console.log(
      "📩 Background message:",
      payload
    );


    const notificationTitle =
      payload.notification?.title ||
      "Sayang Space ❤️";


    const notificationOptions = {

      body:
        payload.notification?.body ||
        "Ada sesuatu untuk awak 🤍",

      icon:
        "/baby/icon-192.png"

    };


    self.registration.showNotification(
      notificationTitle,
      notificationOptions
    );

  }
);