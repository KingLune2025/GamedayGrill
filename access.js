function startFont()
      {
        if (document.cookie == "") {
          document.cookie = "fontSize=x-large;path=/;";
          console.log(document.cookie);
        var root = document.documentElement;
        root.style.setProperty('--fontSize', 'x-large');
     }
        else
        {
        var root = document.documentElement;
        root.style.setProperty('--fontSize', getCookie('fontSize'));
      }
    }
    
    function getCookie(name) {
      const cDecoded = decodeURIComponent(document.cookie);
      const cArray = cDecoded.split("; ");
      cArray.forEach(element => {
        if(element.indexOf(name) == 0) {
          result = element.substring(name.length+1)
        }
      })
      return result;
    }
    
     function changeFont(size)
     {
        document.cookie = "fontSize="+size+";path=/";
      var root = document.documentElement;
        root.style.setProperty('--fontSize', size);
      }
    // When the user clicks on div, open the popup
    function myFunction() {
      var popup = document.getElementById("myPopup");
      
        popup.classList.toggle("show");
    }