var map; //declare global map variable
function initMap() {
	var companyAddress = new google.maps.LatLng(43.0974111, 131.8649289);
	var mapCenter = new google.maps.LatLng(43.097497, 131.869143);
  var mapOptions = {
		center: mapCenter,
		"zoom": 17,
		"disableDefaultUI": true,
		"mapTypeId": google.maps.MapTypeId.ROADMAP,
		"scrollwheel":false
	};
	
  var contentString = '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h3 id="firstHeading" class="firstHeading">VTMT Group</h3>'+
    '<div id="bodyContent">'+
    '690065, Владивосток,<br> ' +
    'ул. Стрельникова, дом 7<br> '+
    'офис 804<br>'+
    'Телефон: 8 (800) 234-12-55'+
    '<h4>Режим работы:</h4> '+
    'Пн-пт, с 9 до 18<br> '+
    'без перерывов '+
    '</div>'+
    '</div>';

  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });
	
	map = new google.maps.Map(document.getElementById("map"), mapOptions);	
	
	var marker = new google.maps.Marker({
		position: companyAddress,
		map: map,
		title: 'OOO «Инженерные системы»'
	});
	google.maps.event.addListener(marker, 'click', function() {
	infowindow.open(map,marker);
	});		
} //initMap