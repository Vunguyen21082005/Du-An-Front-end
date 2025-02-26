function kiemtra() {
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("phone");
    const   
messageInput = document.querySelector("input[type='text']"); 
    let errorMessages = [];

  
    if (nameInput.value === "") {
      errorMessages.push("Vui lòng nhập họ và tên.");
    }
    if (emailInput.value === "") {
      errorMessages.push("Vui lòng nhập email.");
    } 
    if (phoneInput.value === "") {
      errorMessages.push("Vui lòng nhập số điện thoại.");
    }
    if (messageInput.value === "") {
      errorMessages.push("Vui lòng nhập nội dung.");
    }
    if (errorMessages.length > 0) {
      alert(errorMessages.join("\n"));
      return false; 
    }

    
    return true;
  }