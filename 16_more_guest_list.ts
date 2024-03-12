let guest_list:string[] = ['ali','elict','huzaifa']
// for(let i=0;i<guest_list.length; i++){
// console.log ('Dear Mr. '+ guest_list[i] +',\n\nit is our pleasure to invite you  in our party.\n\nthankyou\n\n')
// }
 let absent_guest:string ='ali'
let new_guest : string = 'muhammad'
guest_list[0] = new_guest;
 for(let i=0; i<guest_list.length;i++){
console.log('Dear MR. ' + guest_list[i] +',\n\nit is our pleasure to invite you  in our party.\n\nthankyou \n\n')
}

console.log(`Mr. ${absent_guest} is not coming to the party.`)

console.log('good news!we find big table so we are invite 3 more guests.')

guest_list.unshift('sir zia khan');
guest_list.splice(2, 0,'maryum nawaz');
guest_list.push('bilawar');

for(let i=0; i<guest_list.length;i++){
    console.log('Dear MR. ' + guest_list[i] +',\n\nit is our pleasure to invite you  in our party.\n\nthankyou \n\n')
    }