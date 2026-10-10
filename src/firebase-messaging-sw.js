importScripts("https://www.gstatic.com/firebasejs/9.22.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.22.0/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyAsUVX3SntjKtK_2sFMIRRLQBEcvJL9zHE",
  authDomain: "hrms-portal-18320.firebaseapp.com",
  projectId: "hrms-portal-18320",
  storageBucket: "hrms-portal-18320.firebasestorage.app",
  messagingSenderId: "651193856013",
  appId: "1:651193856013:web:04d2eff001c5b147f96544",
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
  });
});

