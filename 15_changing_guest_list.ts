let guest_list:string[] = ['ali','elict','huzaifa']
for(let i=0; i<guest_list.length; i++){


console.log ('Dear Mr. '+ guest_list[i] +',\n\nIt is our pleasure to invite you  in our party.\n\nthank you\n\n')
}
let absent_guest:string ='ali'
let new_guest : string = 'muhammad'
guest_list[0] = new_guest;
for(let i=0; i<guest_list.length;i++){
console.log('Dear MR. ' + guest_list[i] +',\n\nIt is our pleasure to invite you  in our party.\n\nthank you \n\n')
}
console.log(`Mr.${absent_guest} is not coming to the party.`)