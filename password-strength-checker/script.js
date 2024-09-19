const inputfd = document.querySelector('#password')
const outputfd = document.querySelector('#output')

inputfd.addEventListener('input', function() {
    console.log(inputfd.value)

    let password = inputfd.value
    if(password.length < 8){
        outputfd.innerText = 'Minimum 8 characters in length'
        outputfd.style.color = '#00FF00'
    }else {
        // outputfd.innerText = 'Strong password'
        // outputfd.style.color = '#6B43FB'
         // a-z
        // A-Z
        // 0-9
        // special characters !@#$%^&*()_+{}:"<>?|[]\;',.
        console.log("is loercase",password.search(/[a-z]/));
        if(password.search(/[a-z]/) == -1 ){
            outputfd.innerText = 'Password is missing a lowercase letter (a-z)'
            outputfd.style.color = '#00FF00'
        }else if(password.search(/[A-Z]/) == -1 ){
            outputfd.innerText = 'Password is missing an uppercase letter (A-Z)'
            outputfd.style.color = '#00FF00'
        }else if(password.search(/[0-9]/) == -1 ){
            outputfd.innerText = 'Password is missing a number (0-9)'
            outputfd.style.color = '#00FF00'
        }else if(password.search(/[!\@\#\$\%\^\&\*\(\)\_\+\{\}\:\"\<\>\?\|\[\]\\\;\'\,\.]/) == -1 ){
            outputfd.innerText = 'Password is missing a special'
        } else{
            outputfd.innerText = 'Strong password'
            outputfd.style.color = '#6B43FB'
        }    
    }
});
