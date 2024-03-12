let guest_list:string[] = ['ali','elict','huzaifa']
// for(let i=0;i<guest_list.length; i++){
// console.log ('Dear Mr'+ guest_list[i] +',\n\nit is our pleasure ti invite you  in our party.\n\nthankyou\n\n')
// }
 let absent_guest:string ='ali'
let new_guest : string = 'muhammad'
guest_list[0] = new_guest;
//  for(let i=0; i<guest_list.length;i++){
// console.log('Dear MR' + guest_list[i] +',\n\nit is our pleasure ti invite you  in our party.\n\nthankyou \n\n')
// }
// console.log(`Mr.${absent_guest} is not coming to the party`)
// console.log('good news!we fing bid table so we are invite 3 for guests')
guest_list.unshift('sir zia khan');
guest_list.splice(2, 0,'maryum nawaz');
guest_list.push('bilawar');
// for(let i=0; i<guest_list.length;i++){
    // console.log('Dear MR' + guest_list[i] +',\n\nit is our pleasure ti invite you  in our party.\n\nthankyou \n\n')
    // }
    // console.log('\nsorry we can not arrange big table,only two people will be invited');
    while(guest_list.length > 2){
        let remove_guest = guest_list.pop();
        // console.log(`sorry mr. ${remove_guest}, you are not invited for dinner`)
    }
    // for(let i=0; i<guest_list.length;i++){
    // console.log('Dear MR' + guest_list[i] +',\n\nyou are still invited.\n\nthankyou \n\n')
    // }
    guest_list.splice(0,2);
    console.log(guest_list);
    console.log(`total number of guest are: ${guest_list.length}`);
