console.log(user);
showError2.style.display = 'none'
showError3.style.display = 'none'
                setTimeout(() => {
                    window.location.href = "../dashboard/dashboard.html"
                }, 1000)
})
.catch((error) => {
const errorCode = error.code;
console.log(errorCode);
if (errorCode === "auth/user-not-found") {
showError2.style.display = 'block'
showError2.innerHTML = `<small><i class="fas fa-exclamation-circle"></i>&nbsp;&nbsp;<span>Account does not exist!</span></small>`
}

if (errorCode === "auth/wrong-password") {
showError3.style.display = 'block'
showError3.innerHTML = `<small><i class="fas fa-exclamation-circle"></i>&nbsp;&nbsp;<span>Email or Password is incorrect!</span></small>`
}

if (errorCode === "auth/invalid-credential") {
showError3.style.display = 'block'
showError3.innerHTML = `<small><i class="fas fa-exclamation-circle"></i>&nbsp;&nbsp;<span>Email or Password is incorrect!</span></small>`
}
});
}
}

const signGoogle = () => {
signInWithPopup(auth, provider)