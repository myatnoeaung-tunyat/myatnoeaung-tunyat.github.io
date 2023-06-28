importScripts('https://www.gstatic.com/firebasejs/8.4.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.4.1/firebase-messaging.js');

/*Update with yours config*/
const firebaseConfig = {
    apiKey: "AIzaSyBw8DTHSwZQW0IujrWPugDfgGkdMb1nybM",
    authDomain: "ty-vshop.firebaseapp.com",
    projectId: "ty-vshop",
    storageBucket: "ty-vshop.appspot.com",
    messagingSenderId: "999622951536",
    appId: "1:999622951536:web:566dab27ceea46d257eab5",
    measurementId: "G-TEG039KYSV"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

/*messaging.onMessage((payload) => {
console.log('Message received. ', payload);*/
messaging.onBackgroundMessage(function (payload) {
    console.log('Received background message ', payload);

    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
    };

    self.registration.showNotification(notificationTitle,
        notificationOptions);
});