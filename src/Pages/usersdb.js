export var users =[
    {
        "username":"Farah",
        "email":"farah@gmail.com",
        "password":"Farah.1234"
    },
    {
        "username":"Alex",
        "email":"alex@gmail.com",
        "password":"Alex.1234"
    },  
    {
        "username":"Rami",
        "email":"rami@gmail.com",
        "password":"Rami.1234"
    },  
    {
        "username":"Lina",
        "email":"lina@gmail.com",
        "password":"Lina.1234"
    },
    {
        "username":"Ola",
        "email":"ola@gmail.com",
        "password":"Ola.1234"
    }   
]

export function addUser(newUser){
    newUser = {...newUser,email:newUser.email.toLowerCase()}
    if(validateUser(newUser)) return {status:406, msg:"error:"+validateUser(newUser)} //406 not accespted
    //console.log(checkifExists(newUser), "fun result")
    if(checkifExists(newUser)) return {status:302, msg:"User already exists"} //302 found
    console.log("passed return")
    users.push(newUser)
    return {status:201, msg:"New User created succesfully"}// 201 created
}
export function editUser(User){
    if(validateUser(User)) return {status:406, msg:"error:"+validateUser(User)} //406 not accepted
    //console.log(checkifExists(newUser), "fun result")
    if(checkifExists(User)){
        console.log("user email",User.email,User.username,User.password)
        users[users.indexOf(checkifExists(User))] = User
        return {status:202, msg:"User edited succesfully"}// 202 accepted
    }
    return {status:404, msg:"Error in fining user"}// 404 not found
}
export function deletUser(User){
    if(checkifExists(User)){
        console.log("user email",User.email,User.username,User.password)
        users = users.filter((value,index) => value.email!==User.email)
        return {status:202, msg:"User deleted succesfully"}// 202 accepted
    }
    return {status:404, msg:"Error in finding user"}// 404 not found
}
function checkifExists(User){
    return users.find(user =>user.email === User.email)
}
function validateUser(User){
    let errorMassage =""
    errorMassage+=name_validator(User.username)
    errorMassage+=email_validator(User.email)
    errorMassage+=password_validator(User.password)
    return errorMassage
}

export function confirmPassword_validator(pasword,confirmPassword){
    //console.log("pw:", pasword,"cPP:", confirmPassword, confirmPassword===pasword)
    if(confirmPassword===pasword)return ""
    return "Passwords don't match "
 }

export function name_validator(fName){
    var error = ""
    if(!fName)
        error="**fill this fild**\n"
    else if(!fName.match(/^[A-Za-z]+$/)){
        error= error+"**Name must contain only Letters**"
    }
    return error 
 }

export function email_validator(email){
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var error = ""
    if(!email) error="**fill this fild**\n"
    else if(!email.match(mailformat)){
        error = error+ "Email address is invalid!\n"
    }
    return error
 }

export function password_validator(password){
   
    var error = ""
    //check empty password field  
    if(!password){
        error="**fill this fild**\n"
       // return false
    }else{ if(password.length<8){
       error = error +"**Password must be atleast 8 characters**\n"
       // return false
    } if(password.length>16){
        error = error +"**Password must not be more then 15 characters**\n"
       // return false
    } if(/\s/g.test(password)){
        error = error +"**Password can not have empty space**\n"
        // return false
    } if(!/[A-Z]/.test(password)){
        error = error +"**Password must have atleast 1 capital letter**\n"
       // return false
    } if(!/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(password)){
        error = error +"**Password must have atleast 1 special character**\n"
        //return false
    }}
    return error
 }