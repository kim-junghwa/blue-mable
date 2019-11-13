function touristBuy(currentPlayer, landId){
		let land = currentPlayer.destination
		$(Tourist).each(function(index, item){
			if(land == item.LandNo){
				//console.log("owner",item.owner)
				if(item.owner == "0"){
					//console.log("주인없는",item.LandName)
					item.owner = currentPlayer.playerNo
					currentPlayer.money -= Number(item.LandPrice)
					return false;
				}
				else if(item.owner == currentPlayer.playerNo){
					console.log("내땅");	
				}
				else {
					console.log("내땅아님")
					currentPlayer.money -= Number(item.LandTollFee);
				}
			}
		})
	}	