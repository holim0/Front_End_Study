class UserStorage{

    loginUser(id, password){

        return new Promise((resolve, reject)=>{
            setTimeout(()=>{

                if((id==='holim0' && password==='jj1226') || (id==='holim4' && password==='1234')){
                    resolve(id)
                }else{
                    reject(new Error('not found'));
                }
    
            }, 2000);
        });
    }
    
    getRoles(user){

        return new Promise((resolve, reject)=>{
            setTimeout(()=>{

                if(user==='holim0'){
                    resolve({name: 'holim0', role: 'admin'});
                }else{
                    reject(new Error('no access'));
                }
    
            }, 1000);
            
        });
        
    }
}


const userStorage =new UserStorage();
const id=prompt('enter your id');
const password = prompt('enter your password');

userStorage
    .loginUser(id, password)
    .then(userStorage.getRoles)
    .then(user => alert(`hello ${user.name},  you have a ${user.role}`))
    .catch(console.log);



