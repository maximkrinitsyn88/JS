function checkValidEmail (email, blacklistEmail) {

  let result = [];

  for (let i = 0; i < email.length; i++) {
    if (blacklistEmail.includes(email[i]) != true) {
      result.push(email[i]);
     }
   }
   return result;
 }

 export default checkValidEmail




