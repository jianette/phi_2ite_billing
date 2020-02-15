function billingFunction() { 

    billName = document.getElementById("billingName");
    billZip = document.getElementById("billingZip");

    if (document.getElementById('same').checked) 
    { 
      billName.value = document.getElementById('shippingName').value; 

      billZip.value = document.getElementById('shippingZip').value 
    } 
        
    else
    { 
      billName.value = ""; 
      
      billZip.value = ""; 
    }

  } 

function display() {
    alert("Verified successfully!");
}