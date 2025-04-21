$(document).ready(function () {
  $('#fadeBtn').click(function () {
    $('#fadeText').fadeToggle(600); 
  });
});

$(document).ready(function () {
  $('#slideBtn').click(function () {
    $('#slideText').slideToggle(); 
  });
});

$(document).ready(function () {
  const suggestions = ['Apple', 'Banana', 'Blueberry', 'Cherry', 'Grapes', 'Mango', 'Orange', 'Strawberry', 'Watermelon', 'Lemon', 'Papaya', 'Dragonfruit', 'Guava', 'Acai', 'Lychee', 'Mangosteen', 'Rambutan', 'Star Fruit', 'Pineapple', 'Mango', 'Jackfruit', 'Avocado', 'Fig', 'Kiwifruit', 'Honeydew', 'Cherries', 'Aubergine', 'Apricot', 'Elderberry', 'Cherries', 'Date palm'];

  $('#searchInput').on('input', function () {
    const input = $(this).val().toLowerCase();
    const results = suggestions.filter(item => item.toLowerCase().includes(input));

    let html = '';
    results.forEach(item => {
      html += `<li>${item}</li>`;
    });

    if (input.length === 0 || results.length === 0) {
      $('#suggestions').hide();
    } else {
      $('#suggestions').html(html).show();
    }
  });

  $('#suggestions').on('click', 'li', function () {
    $('#searchInput').val($(this).text());
    $('#suggestions').hide();
  });

  $(document).on('click', function (e) {
    if (!$(e.target).closest('#searchInput, #suggestions').length) {
      $('#suggestions').hide();
    }
  });
});
