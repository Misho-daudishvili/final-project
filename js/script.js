document.addEventListener('DOMContentLoaded', function () {
    const sendButton = document.getElementById('send-element');

    if (sendButton) {
        sendButton.addEventListener('click', function () {
            alert('Successfully sent.');
        });
    } else {
        console.log('Button not found!');
    }


    const submitbutton = document.getElementById('submit-element');

    if (submitbutton) {
        submitbutton.addEventListener('click', function () {
            alert('Successfully sent.');
        });
    } else {
        console.log('Button not found!');
    }

    const submitclass = document.getElementById('submit-class');

    if (submitclass) {
        submitclass.addEventListener('click', function() {
            alert('Successfully sent.');      
        })

    }

    let navigationElement = document.getElementById ('navId');

    let burgerbar = document.getElementById ('burgerId')

    burgerbar.addEventListener ('click', function(){
        navigationElement.classList.toggle("newnavigation")
    })


});


