// 말 이동
	function move(currentPlayer) {
		
		let moving = currentPlayer.location
		if(currentPlayer.doubleFlag == 1 && currentPlayer.click == 3) {
			$("#"+currentPlayer.playerNo+"p").appendTo("#p11");	
			currentPlayer.location = 11;
			return;
		} else {
			
			$("#"+currentPlayer.playerNo+"p").appendTo("#p"+currentPlayer.destination);

		}
		
		$(NomalLand).each(function(index,item){
			let cost = 0;
			let point = (item.LandNo);
			//console.log(point);
			if(point == currentPlayer.destination){
				//console.log(item)
				$("#now"+currentPlayer.playerNo).text(item.LandName);
				if(item.owner == 0){
					$("#owner"+currentPlayer.playerNo).text("NO");
					$("#cost"+currentPlayer.playerNo).text("NO");
				}
				else if (item.owner == currentPlayer.playerNo){
					$("#owner"+currentPlayer.playerNo).text(item.owner);
					$("#cost"+currentPlayer.playerNo).text("NO");
				}
				else {
					$("#owner"+currentPlayer.playerNo).text(item.owner);
					cost += Number(item.LandFee)
					if(item.villabild == "1"){
						cost += Number(item.Villa);
					}
					if(item.buildingbild == "1"){
						cost += Number(item.building);
					}
					if(item.hotelbild == "1"){
						cost += Number(item.hotel);
					}
					$("#cost"+currentPlayer.playerNo).text(cost);
					currentPlayer.money -= cost
				}
				
			}
		});
		$(Tourist).each(function(index,item){
			let point = (item.LandNo);
			//console.log(point);
			if(point == currentPlayer.destination){
				console.log(item.owner)
				$("#now"+currentPlayer.playerNo).text(item.LandName);
				if(item.owner == 0){
					console.log("주인없음")
					$("#owner"+currentPlayer.playerNo).text("NO");
					$("#cost"+currentPlayer.playerNo).text("NO");
				}
				else if (item.owner == currentPlayer.playerNo){
					console.log(currentPlayer.playerNo+"내땅")
					$("#owner"+currentPlayer.playerNo).text(item.owner);
					$("#cost"+currentPlayer.playerNo).text("NO");
				}
				else {
					console.log("주인",item.owner)
					$("#owner"+currentPlayer.playerNo).text(item.owner);
					$("#cost"+currentPlayer.playerNo).text(item.LandTollFee);
				}
				
			}
		});
		
		$(SpecialLand).each(function(index, item){
			let point = (item.LandNo);
			if(point == currentPlayer.destination){
				$("#owner"+currentPlayer.playerNo).text("NO");
				$("#now"+currentPlayer.playerNo).text(item.LandName);
				$("#cost"+currentPlayer.playerNo).text("NO");
			}
		})
		$("#player"+(currentPlayer.playerNo)).val(currentPlayer.money);
		currentPlayer.location = currentPlayer.destination;
		//console.log("이동 후 location: ", currentPlayer.location);
	}