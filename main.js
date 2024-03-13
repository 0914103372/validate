let tendangnhap= document.getElementById('vl1')
let email= document.getElementById('vl2')
let matkhau=document.getElementById('vl3')
const checkemail= /^\w+@+gmail\.com/
const formsubmit = document.querySelector('.form-submit')
formsubmit.addEventListener('click',()=>{
    let checkdata= (checkemail.test(email.value) && !(tendangnhap.value.length <= 6) && !(matkhau.value.length <= 6))

    if(checkdata)
    {
        alert('Đăng Ký Thành Công')
    }
    else{
        tendangnhap.classList.add('error')
        email.classList.add('error')
        matkhau.classList.add('error')
    }
})
 email.addEventListener('click',()=>{

        email.classList.remove('error')

})
 tendangnhap.addEventListener('click',()=>{

        tendangnhap.classList.remove('error')

})
matkhau.addEventListener('click',()=>{

        matkhau.classList.remove('error')

})
email.addEventListener('blur',()=>{

    if(!checkemail.test(email.value))
    
    {
        email.classList.add('error')
    }

})
tendangnhap.addEventListener('blur',()=>{

    if(tendangnhap.value.length <= 6)
    {
        tendangnhap.classList.add('error')

    }

})
matkhau.addEventListener('blur',()=>{

    if(matkhau.value.length<= 6)
    {
        matkhau.classList.add('error')
    }

})