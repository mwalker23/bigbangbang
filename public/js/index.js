console.log('hi');

const userForm = document.getElementById('userForm')

const formSubmission = async (e) => {
    e.preventDefault();

    const userValue = document.getElementById('userNameInput').value;
    console.log(userValue);
    const emailValue = document.getElementById('emailInput').value;
    console.log(emailValue);
    const passwordValue = document.getElementById('passwordInput').value;
    console.log(passwordValue);


    const postValue = await fetch('users/sign-up', {
        method: "POST",
        body: JSON.stringify({
            username: userValue,
            password: passwordValue,
            email: emailValue
        }),
        headers: { 'Content-Type': 'application/json' },
    })

    if (postValue.ok) {
        alert("successful sign up!");
    } else {
        alert('fix your code!');
    }
}


userForm.addEventListener('submit', formSubmission);