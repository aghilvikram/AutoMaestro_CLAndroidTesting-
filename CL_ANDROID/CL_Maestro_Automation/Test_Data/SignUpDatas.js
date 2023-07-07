
  
  function email() {
    const date = new Date().getTime().toString();
    return `test-user-${date}@test.com`;
  }
  
  function password() {
    const date = new Date().getTime().toString();
    return `TestVikram777@password-${date}`;
  }
  function confirmPassword(){
    const date = new Date().getTime().toString();
    return `TestVikram777@password-${date}`;
  }

  //const firstName= 'vikram';


  
  

  
  output.credentials = {
    email: email(),
    password: password(),
    confirmPassword: confirmPassword()
  };



  