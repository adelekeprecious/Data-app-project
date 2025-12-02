let allUsers = []

if (localStorage.project){
  const fetched = JSON.parse(localStorage.getItems('project'))
    allUsers = fetched
}else{
  allUsers = []
}
    
    const signup = () =>{
    if(fullName.value.trim() === "" || userName.value.trim() === ""|| email.value.trim() ===""|| password.value.trim()===""){
           showError.style.display ="block"
     } else{
            showError.style.display="none"
            const userDetails={
                fullName:fullName.value,
                userName:userName.value,
                email:email.value,
                password:password.value,
            }
     let regexString =/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
      const confirmEmail = regexString.test(userDetails.mail)
       if(confirmEmail){
            const found = allUsers.find(user=> user.mail === userDetails.mail)
             if(found) {
                alert('account already exists')
            } else {
                allUsers.push(userDetails)
                localStorage.setItem('facebuukUsers', JSON.stringify(allUsers))
                window.location.href = "../signin/signin.html"
            }
        } else {
            showError2.style.display = 'block'
        }


        fullName.value = '' 
        email.value = ''
        password.value = ''
    }

    }