/*ACTUAL TIME SETTINGS*/
function time() {
    var a = document.getElementById('time');
    var b = '';
    if (new Date().getHours() < 10) {
        b += '0' + new Date().getHours() + ' : ';
    } else {
        b += +new Date().getHours() + ' : ';
    }
    if (new Date().getMinutes() < 10) {
        b += '0' + new Date().getMinutes() + ' : ';
    } else {
        b += new Date().getMinutes() + ' : ';
    }
    if (new Date().getSeconds() < 10) {
        b += '0' + new Date().getSeconds();
    } else {
        b += new Date().getSeconds();
    }
    a.value = b;
}
/*SOUND PLAYING*/
setInterval(time, 1000);
var z = document.getElementById('repulsor1');
var x = document.getElementById('repulsor2');
var y = document.getElementById('repulsor3');
var k = document.getElementById('repulsor4');
z.onmouseover = function () {
    document.getElementById('sound1').play();
};
x.onmouseover = function () {
    document.getElementById('sound2').play();
};
y.onmouseover = function () {
    document.getElementById('sound3').play();
};
k.onmouseover = function () {
    document.getElementById('sound4').play();
};
/*EXPLORER CHECKING AND ICON SETTINGS*/
var icon = document.getElementById('icon');
// Opera 8.0+
var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;

// Firefox 1.0+
var isFirefox = typeof InstallTrigger !== 'undefined';

// Safari 3.0+ "[object HTMLElementConstructor]" 
var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) {
    return p.toString() === "[object SafariRemoteNotification]";
})(!window['safari'] || safari.pushNotification);

// Internet Explorer 6-11
var isIE = /*@cc_on!@*/false || !!document.documentMode;

// Edge 20+
var isEdge = !isIE && !!window.StyleMedia;

// Chrome 1+
var isChrome = !!window.chrome && !!window.chrome.webstore;

// Blink engine detection
var isBlink = (isChrome || isOpera) && !!window.CSS;

if (isOpera === true) {
    icon.className = 'fab fa-opera';
} else if (isFirefox === true) {
    icon.className = 'fab fa-firefox';
} else if (isSafari === true) {
    icon.className = 'fab fa-safari';
} else if (isIE) {
    icon.className = 'fab fa-internet-explorer';
} else if (isEdge) {
    icon.className = 'fab fa-edge';
} else if (isChrome) {
    icon.className = 'fab fa-chrome';
} else {
    icon.className = 'fas fa-anchor';
}
/*FORM VALIDATION*/
function nameCheck(nameInput) {
    var reg = /[A-Z]{4,50}/i;
    if (reg.test(nameInput.value)) {
        nameInput.setAttribute("class", "form-control valid-input");
        return true;
    } else {
        nameInput.setAttribute("class", "form-control invalid-input");
        return false;
    }
}
function emailCheck(emailInput) {
    var reg = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if (reg.test(emailInput.value)) {
        emailInput.setAttribute("class", "form-control valid-input");
        return true;
    } else {
        emailInput.setAttribute("class", "form-control invalid-input");
        return false;
    }
}
function validateForm(){
    var firstName = document.getElementsByName('firstname')[0];
    var lastName = document.getElementsByName('lastname')[0];
    var email = document.getElementsByName('email')[0];
    var topic = document.getElementsByName('topic')[0];
    if(nameCheck(firstName) && nameCheck(lastName) && emailCheck(email)){
        alert('groot');
        return true;
    }else{
        alert('false');
        return false;
    }
}
