function validateInput(inputType, value) {
    const regexPatterns = {
      digitsOnly: /^[0-9]*$/,
      alphabetsOnly: /^[a-zA-Z]*$/,
      indianMobileNumber: /^[789]\d{9}$/,
      email: /\w+([-+.']\w+)*@\w+([-]\w+)*\.\w+([--]\w+)*/,
      password: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/,
      username: /^[A-Za-z0-9-]+$/
    };
  
    const pattern = regexPatterns[inputType];
  
    if (!pattern) {
      throw new Error(`Invalid input type: ${inputType}`);
    }
  
    return pattern.test(value);
  }
  
  // Usage examples
  console.log(validateInput('digitsOnly', '123yyjyj45')); // true
  console.log(validateInput('alphabetsOnly', 'Hello')); // true
  console.log(validateInput('indianMobileNumber', '91hhr23456789')); // true
  console.log(validateInput('email', 'test@example.com')); // true
  console.log(validateInput('password', 'Test123')); // true
  console.log(validateInput('username', 'testUserName')); // true