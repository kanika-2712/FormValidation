function checkform(input) {
    var value = input.value.trim();
    var label = input.closest('.input-field').querySelector('label').textContent.trim();
    var errorMessage = '';

    if (value === '') {
        errorMessage = label+ ' is required.';
    } else {
     
        switch (input.getAttribute('placeholder')) {
            case 'Enter your name':
                if (!/^[a-zA-Z ]+$/.test(value)) {
                    errorMessage = 'Name should not contain symbols or numbers.';
                }
                break;
           
            case 'Enter your email':
                if (!validateEmail(value)) {
                    errorMessage = 'Enter a valid email address.';
                }
                break;
            case 'Enter mobile number':
                if (!validateMobileNumber(value)) {
                    errorMessage = 'Mobile number should contain 10 digits.';
                }
                break;
            
        }
    }


    var errorSpan = input.nextElementSibling;
    if (errorMessage !== '') {
        errorSpan.textContent = errorMessage;
        input.classList.add('error');
    } else {
        errorSpan.textContent = '';
        input.classList.remove('error');
    }
}

function validateEmail(email) {
 
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validateMobileNumber(number) {

    var mobileRegex = /^[0-9]{10}$/;
    return mobileRegex.test(number);
}


function checkFile(input) {
    var fileInput = input.files[0];
    var allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    var errorSpan = document.getElementById('fileError');
    var fileLabel = input.nextElementSibling;

    if (fileInput) {
        if (allowedTypes.includes(fileInput.type)) {
            errorSpan.textContent = '';
            fileLabel.textContent = fileInput.name; 
        } else {
            errorSpan.textContent = 'Supported formats are PDF and DOCX only.';
            fileLabel.textContent = 'Upload Resume';
        }
    }
}