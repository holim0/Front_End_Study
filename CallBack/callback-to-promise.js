class UserStorage{

    loginUser(id, password, onSucess, onError){
        setTimeout(()=>{

            if((id==='holim0' && password==='jj1226') || (id==='holim4' && password==='1234')){
                onSucess(id);
            }else{
                onError(new Error('not found'));
            }

        }, 2000);

    }
    
    getRoles(user, onSucess, onError){
        if(user==='holim0'){
            onSucess({name: 'holim0', role: 'admin'});
        }else{
            onError(new Error('no access'));
        }
    }
}


const userStorage =new UserStorage();
const id=prompt('enter your id');
const password = prompt('enter your password');

userStorage.loginUser(
    id, 
    password, 
    user=>{
        userStorage.getRoles(
            user, 
            userWithRole=>{
                alert(`hello ${userWithRole.name}, you have ${userWithRole.role}`);
            }, 
            error=>{
                console.log(error);
            })
    }, 
    (error) => {console.log(error)}
    
);

