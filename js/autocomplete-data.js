
  var dataDummy = [
    { value: 'game 1' },
    { value: 'game 2' },
    { value: 'game 3' },
    { value: 'HTML 1' },
    { value: 'HTML 2' },
    { value: 'HTML 3' },
    { value: 'Minggus' },
    { value: 'Wira' },
    { value: 'Nicho' },
    { value: 'Nizar' },
    { value: 'Kosa' },
    { value: 'Cyntia' },
	
  ];
  
  $('.autocomplete').autocomplete({
    lookup: dataDummy,
    onSelect: function (suggestion) {
      var thehtml = suggestion.value + ' <br> <strong>Symbol:</strong> ';
      $('#outputcontent').html(thehtml);
    }
  });
  
  $('.autocomplete2').autocomplete({
    lookup: dataDummy,
    onSelect: function (suggestion) {
      var thehtml = suggestion.value + ' <br> <strong>Symbol:</strong> ';
      $('#outputcontent').html(thehtml);
    }
  });