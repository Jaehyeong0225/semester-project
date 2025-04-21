
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("customForm");
  
    function getQueryParams() {
      const params = new URLSearchParams(window.location.search);
      return {
        bgColor: params.get("bgColor"),
        textColor: params.get("textColor"),
        fontSize: params.get("fontSize"),
      };
    }
  
    function savePreferencesToCookies({ bgColor, textColor, fontSize }) {
      document.cookie = `bgColor=${bgColor}; max-age=86400`; 
      document.cookie = `textColor=${textColor}; max-age=86400`;
      document.cookie = `fontSize=${fontSize}; max-age=86400`;
    }
  
    function getCookieValue(name) {
      const match = document.cookie.match(new RegExp(`${name}=([^;]+)`));
      return match ? match[1] : null;
    }
  
    function applyStyles({ bgColor, textColor, fontSize }) {
      if (bgColor) document.body.style.backgroundColor = bgColor;
      if (textColor) document.body.style.color = textColor;
      if (fontSize) document.body.style.fontSize = fontSize + "px";
    }
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const data = {
        bgColor: form.bgColor.value,
        textColor: form.textColor.value,
        fontSize: form.fontSize.value,
      };
  
      savePreferencesToCookies(data);
  
      const query = `?bgColor=${data.bgColor}&textColor=${data.textColor}&fontSize=${data.fontSize}`;
      window.location.href = window.location.pathname + query;
    });
  
    const prefs = getQueryParams();
    const fallback = {
      bgColor: getCookieValue("bgColor"),
      textColor: getCookieValue("textColor"),
      fontSize: getCookieValue("fontSize"),
    };
  
    applyStyles({
      bgColor: prefs.bgColor || fallback.bgColor,
      textColor: prefs.textColor || fallback.textColor,
      fontSize: prefs.fontSize || fallback.fontSize,
    });
  });
  