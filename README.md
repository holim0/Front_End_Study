# 🍓Front-End Study



### Var, let의 차이

### ⭐var과 function의 hoisting → 어디에 선언 했는지 상관 없이 선언을 위로 끌어 올려주는 것을 말한다.

### 그래서 let 을 사용해야 한다.

### Client ↔ Server

## <JSON>

1. Object to JSON
- 함수는 변환되지 않는다.

```jsx
//1. obeject to json

const rabbit ={

    name: 'tori',
    color: 'white',
    size : null,
    birth : new Date(),

};

json = JSON.stringify(rabbit, (key, value) =>
{
    console.log(`key : ${key}, value : ${value}`);
    return value;
});

console.log(json);
```

 2. JSON to Object

함수를 사용하면 세부적으로 조정 할 수 있다. 

```jsx
//2. json to object

console.clear();

json = JSON.stringify(rabbit);

const obj = JSON.parse(json, (key, value) =>{
    return key=== 'birth' ? new Date(value) : value;
});

console.log(obj.birth);
```

## <동기와 비동기>

1. Synchronous callback
- 순차적으로 콜백 해준다.

2. Asyhchronous callback

- 언제 실행될 지 예측할 수 없는 콜백.
- 순서대로 콜백이 되지 않는다.

🔥CallBack 지옥

```jsx
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
```

→ 가독성이 떨어진다. 에러 발생 시 문제점을 찾기가 힘들다. 

## <Promise>

- JS 에 내장된 객체이고 비동기 수행을 위해 callback 대신 쓰인다.
- 시간이 오래걸리는 것을 처리하는데 유용하다 ex) network, readfiles
- 새로운 promise 가 생성될때는 executor 가 자동으로 실행된다. (유의해야한다) → why? 불필요한 작업을 수행 할 수 있기 때문임.
- 

1. state : pending ( 수행 중) - > fullfilled or rejected
2. Producer vs consumer

### 1. Producer

```jsx
//1. Producer

const promise = new Promise((resolve, reject)=>{
    //doing some heavy work (networ)

    console.log('dong');
    setTimeout(()=>{
        resolve('holim0');
    }, 2000);

});
```

### 2. Consumers : then, catch, finally

- then : resolve 일 때 실행
- catch : rejected 일 때 실행
- finally : resolve , rejected 상관없이 마지막에 실행

```jsx
//2. Consumer : then, catch, finally

promise
    .then((value)=>{
    console.log(value);
    })
    .catch(error=>{
        console.log(error);
    })
    .finally(()=>{
        console.log('finally');
    });
```

### 3. Promise chaining

```jsx
const fetchNumber = new Promise((resolve, reject)=>{
    setTimeout(()=> resolve(1), 1000);

});

fetchNumber
    .then(num=> num*2)
    .then(num => num*3)
    .then(num=>{
        return new Promise((resolve, reject)=>{
            setTimeout(()=> resolve(num-1), 1000);
        });
    })
    .then(num=> console.log(num));
```

## Callback to Promise

```jsx
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
```
