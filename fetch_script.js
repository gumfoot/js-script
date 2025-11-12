//Script to fetch filtered user data.

const url = "https://jsonplaceholder.typicode.com/users"; //endpoint stored in a variable.

async function getUsers(){ //function to get users. Async(takes time)
    const response = await fetch(url); //sends GET request to the URL. Await("Pause until response arrives")
    const data = await response.json(); //converts the response into JS object/array that can be accessed.(parsing)
    //prints the whole array of users. Good practice to check raw data first.
    console.log("Users:");
    console.log(data);

    const filteredUsers = []; //creates an empty array to store filtered users.
    let i = 0;
    while (i < data.length){
        if (data[i].id <= 5){  //only users whose id is 5 or less.
            filteredUsers.push(data[i]); //add them to the empty array.
        }
        i++; //move to the next user.
    }
    console.log(filteredUsers); //prints filtered users.
}

getUsers() //calls the function.

