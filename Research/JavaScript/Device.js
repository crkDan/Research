var db = null;

var countID;
var idCount;
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAFjCQPCQh7D9dZXch1bn-tZfod1-IoQYw",
    authDomain: "face-recognition-c59dc.firebaseapp.com",
    databaseURL: "https://face-recognition-c59dc.firebaseio.com",
    projectId: "face-recognition-c59dc",
    storageBucket: "face-recognition-c59dc.appspot.com",
    messagingSenderId: "356367979541",
    appId: "1:356367979541:web:eb78e2d442bb5aae946a1c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function Write() {
    if (db == null)
        db = firebase.database();

    var CompanyDeviceText = document.getElementById("CompanyDeviceText").value;
    var NameDeviceText = document.getElementById("NameDeviceText").value;
    var MacAddressDeviceText = document.getElementById("MacAddressDeviceText").value;
    var IPAdressDeviceText = document.getElementById("IPAdressDeviceText").value;
    var PortDeviceText = document.getElementById("PortDeviceText").value;


    db.ref('count').once('value', function (snapshot) {
        countID = (snapshot.val());
        countID++;

        db.ref('/Device/ID:' + countID).set({
            Company: CompanyDeviceText,
            Name: NameDeviceText,
            MAC: MacAddressDeviceText,
            IP: IPAdressDeviceText,
            Port:PortDeviceText

        });

        db.ref('/').update({count: countID});

    });
    //
    // const fileUploader = document.querySelector('#ImageFile');
    //
    // fileUploader.addEventListener('change', (e) => {
    //     const curFiles = e.target.files[0]; // get file object
    //     const objectURL = URL.createObjectURL(curFiles);
    //     console.log('objectURL', objectURL);
    // });
}
function Get() {
    if(db==null)
        db = firebase.database();

        db.ref("count").on('value', function (snapshot) {
        idCount = snapshot.val();
        });
        for(var i=1;i<idCount;i++){
            db.ref("Device/ID:"+i+"/Name").on('value', function (snapshot) {
                var data = snapshot.val();
                console.log("1:"+i);
                document.getElementById("ImageRecordText_0"+i).innerHTML = data;
            });
            db.ref("Device/ID:"+i+"/MAC").on('value', function (snapshot) {
                var data = snapshot.val();
                console.log("2:"+i);
                document.getElementById("NameRecordText_0"+i).innerHTML = data;
            });
            db.ref("Device/ID:"+i+"/IP").on('value', function (snapshot) {
                var data = snapshot.val();
                console.log("3:"+i);
                document.getElementById("CapturesTimeRecordText_0"+i).innerHTML = data;
            });
        }
}



