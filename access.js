function startFont()
      {
        if (document.cookie == "") {
          document.cookie = "fontSize=x-large;path=/;";
        var root = document.documentElement;
        root.style.setProperty('--fontSize', 'x-large');
     }
        else
        {
        var root = document.documentElement;
        root.style.setProperty('--fontSize', getCookie('fontSize'));
      }
    }
    function startContrast()
      {
        if (document.cookie == "") {
          document.cookie = "contrast-block;path=/;";
        var root = document.documentElement;
        root.style.setProperty('--contrast', 'block');
        root.style.setProperty('--color','white');
     }
        else
        {
        var root = document.documentElement;
        root.style.setProperty('--contrast', getCookie('contrast'));
        if(getCookie('contrast') == 'block')
        {
        root.style.setProperty('--color','white');
        }
        else
        {
          root.style.setProperty('--color','black');
        }
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

      function changeContrast(contrast)
      {
        document.cookie = "contrast="+contrast+";path=/";
      var root = document.documentElement;
        root.style.setProperty('--contrast', contrast);
        if(getCookie('contrast') == 'block')
        {
        root.style.setProperty('--color','white');
        }
        else
        {
          root.style.setProperty('--color','black');
        }
      }
    // When the user clicks on div, open the popup
    function myFunction() {
      var popup = document.getElementById("myPopup");
      
        popup.classList.toggle("show");
    }