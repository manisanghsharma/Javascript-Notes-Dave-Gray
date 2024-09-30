//Using fetch without async await

const users = fetch("https://jsonplaceholder.typicode.com/users")

//Json is required to read the data, we need to wait
.then(response => {
    return response.json();
})

.then(data => {
    data.forEach(user => {
        console.log(user);
    })
});

//Using fetch with async await
const myUsers = {
    userList: []
}


//await - wait till data is fetched
const myCoolFunction = async () => {
    const response2 = await fetch("https://jsonplaceholder.typicode.com/users")
    const jsonUserData = await response2.json();
    return jsonUserData;
}

console.log(myCoolFunction());

const anotherFunc = async () => {
    const data = await myCoolFunction();
    myUsers.userList = data;
    console.log(myUsers.userList);
}


//we still get an empty array - because await will say I will do my work, you go ahead - so it goes ahead and executes console log first and hence there is no element inside - so we need to put it inside the function

anotherFunc();
// console.log(myUsers.userList);