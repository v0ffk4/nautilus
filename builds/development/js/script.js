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

  //start configuring style
  var styles = [
  {
      "featureType": "landscape",
      "stylers": [
      {
          "saturation": -100
      },
      {
          "lightness": 65
      },
      {
          "visibility": "on"
      }
      ]
  },
  {
      "featureType": "poi",
      "stylers": [
      {
          "saturation": -100
      },
      {
          "lightness": 51
      },
      {
          "visibility": "simplified"
      }
      ]
  },
  {
      "featureType": "road.highway",
      "stylers": [
      {
          "saturation": -100
      },
      {
          "visibility": "simplified"
      }
      ]
  },
  {
      "featureType": "road.arterial",
      "stylers": [
      {
          "saturation": -100
      },
      {
          "lightness": 30
      },
      {
          "visibility": "on"
      }
      ]
  },
  {
      "featureType": "road.local",
      "stylers": [
      {
          "saturation": -100
      },
      {
          "lightness": 40
      },
      {
          "visibility": "on"
      }
      ]
  },
  {
      "featureType": "transit",
      "stylers": [
      {
          "saturation": -100
      },
      {
          "visibility": "simplified"
      }
      ]
  },
  {
      "featureType": "administrative.province",
      "stylers": [
      {
          "visibility": "off"
      }
      ]
  },
  {
      "featureType": "water",
      "elementType": "labels",
      "stylers": [
      {
          "visibility": "on"
      },
      {
          "lightness": -25
      },
      {
          "saturation": -100
      }
      ]
  },
  {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [
      {
          "hue": "#ffff00"
      },
      {
          "lightness": -25
      },
      {
          "saturation": -97
      }
      ]
  }
]
  map.setOptions({styles: styles});
  // end configuring style

} //initMap


document.getElementById("shop-selector").onclick = function(){

  alert("this");
  initMap();

}



