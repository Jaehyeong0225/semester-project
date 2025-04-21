function loadWithFetch() {
    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert")
      .then(response => {
        if (!response.ok) throw new Error("Network error");
        return response.json();
      })
      .then(data => {
        const meals = data.meals;
        const randomMeal = meals[Math.floor(Math.random() * meals.length)];
  
        document.getElementById("fetchResult").innerHTML = `
          <h3>${randomMeal.strMeal}</h3>
          <img src="${randomMeal.strMealThumb}" alt="${randomMeal.strMeal}" width="300">
        `;
      })
      .catch(error => {
        console.error("Fetch Error:", error);
        document.getElementById("fetchResult").innerHTML = `<div class="error">Can not found.</div>`;
      });
  }
  
  function loadWithXHR() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert");
  
    xhr.onload = function () {
      if (xhr.status === 200) {
        const data = JSON.parse(xhr.responseText);
        const meals = data.meals;
        const randomMeal = meals[Math.floor(Math.random() * meals.length)];
  
        document.getElementById("xhrResult").innerHTML = `
          <h3>${randomMeal.strMeal}</h3>
          <img src="${randomMeal.strMealThumb}" alt="${randomMeal.strMeal}" width="300">
        `;
      } else {
        document.getElementById("xhrResult").innerHTML = `<div class="error">XHR Error: ${xhr.status}</div>`;
      }
    };
  
    xhr.onerror = function () {
      document.getElementById("xhrResult").innerHTML = `<div class="error">XHR Network Error</div>`;
    };
  
    xhr.send();
  }
  