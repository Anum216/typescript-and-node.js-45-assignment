const userNames: string[] = ['Admin', 'Bugs bunny', 'Daffy duck','Sylvester', 'Tweety'];
for(let i=0; i<userNames.length; i ++){
  if(userNames[i] === 'Admin')
  {
    console.log('Hello Admin,would you like to see a status report?');
  } 
  else{
  console.log(`Hello ${userNames[i]},thanks you for logging in again.`)
}
}
