let current_users: string[] =['TaHa','Daniyal','SalMan','HamZah','John']
let new_user: string[] = ['Bilal','TaHa','Dawood','Jameel','HamZah']
 new_user.forEach( newUsername => {
    let lowerCase:string = newUsername.toLowerCase();
    if(current_users.map(c_user => c_user.toLowerCase().includes(lowerCase))){
        console.log(`The username ${newUsername} is not avaible.please  write a different username`);
    }
    else{
        console.log(`the username ${newUsername} is avaiable`);
    }
    
});