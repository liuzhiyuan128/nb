var getNowLocation = function (callback) {
			var optionEmg = null;
			plus.geolocation.getCurrentPosition(
				function(p){
			
				optionEmg = {
					lat : p.coords.latitude,
				    lng : p.coords.longitude,
				    street : p.address.street,
				    addresses : p.addresses,
				    city:p.address.city
				}
				
				callback(optionEmg)

				},
				function(err){
					
					optionEmg = null;
					callback(optionEmg)
				},
				{
		         provider: 'baidu',
		         coordsType: 'bd09ll'
		    	}
			)
			
		}
