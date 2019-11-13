function nomalLandBuy(currentPlayer, landId){
		if(currentPlayer.count != 0){
			//console.log("player"+currentPlayer.playerNo+"무인도");
			return false;
		}
		console.log(currentPlayer.destination)
		let land = currentPlayer.destination
		if(currentPlayer.turn == 1){
			$(NomalLand).each(function(index,item){
				if(land == item.LandNo){
					if(item.owner == "0"){
						if(landId == ("land"+currentPlayer.playerNo)){
							if(currentPlayer.money < Number(item.LandFee)){
								//console.log("돈부족");
								function nomoney(currnetPlayer){
									
								}
								return false;
							}
							console.log("1턴 땅구입");
							$("#bp"+currentPlayer.location).append("<span id='"+currentPlayer.location+"land'>🚩</span>");
							item.owner = String(currentPlayer.playerNo);
							currentPlayer.money -= Number(item.LandFee);
							//console.log(currentPlayer.money);
							//console.log("주인",item.owner);
						}
					}
					if (item.owner == currentPlayer.playerNo){
						//console.log("내땅 도착",item.owner);
						if(landId == ("villa"+currentPlayer.playerNo) && item.villabild == "0"){
							if(currentPlayer.money < Number(item.VillaConstruction)){
								return false;
							}
							console.log("1턴 빌라 구입");
							$("#bp"+currentPlayer.location).children("#"+currentPlayer.location+"land").remove();
							$("#bp"+currentPlayer.location).append("<span id='"+currentPlayer.location+"villa'>🏡</span>");
							item.villabild = "1";
							currentPlayer.money -= Number(item.VillaConstruction);
							//console.log(currentPlayer.money);
						}
					}
					else {
						console.log(item)
						console.log("1턴 구매못함");
						return false;
					}
				}
			})
		}
		else if(currentPlayer.turn == 2){
			//console.log("2턴",landId);
			$(NomalLand).each(function(index, item){
				if(land == item.LandNo){
					if(item.owner == "0"){
						if(landId == ("land"+currentPlayer.playerNo)){
							if(currentPlayer.money < Number(item.LandFee)){
								return false;
							}
							console.log("2턴 땅구입");
							$("#bp"+currentPlayer.location).append("<span id='"+currentPlayer.location+"land'>🚩</span>");
							item.owner = String(currentPlayer.playerNo);
							currentPlayer.money -= Number(item.LandFee);
							//console.log(currentPlayer.money);
							//console.log("주인",item.owner);
							return false;
						}
					}
					else if(item.owner == currentPlayer.playerNo){
						if(landId == ("villa"+currentPlayer.playerNo) && item.villabild == "0"){
							if(currentPlayer.money < Number(item.VillaConstruction)){
								return false;
							}
							console.log("2턴 빌라 구입");
							$("#bp"+currentPlayer.location).children("#"+currentPlayer.location+"land").remove();
							$("#bp"+currentPlayer.location).append("<span id='"+currentPlayer.location+"villa'>🏡</span>");
							item.villabild = "1";
							currentPlayer.money -= Number(item.VillaConstruction);
							//console.log(currentPlayer.money);
						}
						if(landId == ("building"+currentPlayer.playerNo) && item.buildingbild == "0"){
							if(currentPlayer.money < Number(item.buildingConstruction)){
								return false;
							}
							console.log("2턴 빌딩구입");
							$("#bp"+currentPlayer.location).children("#"+currentPlayer.location+"land").remove();
							$("#bp"+currentPlayer.location).append("<span id='"+currentPlayer.location+"bilding'>🏦 </span>");
							item.buildingbild = "1";
							currentPlayer.money -= Number(item.buildingConstruction);
							//console.log(currentPlayer.money);
						}
						console.log(item)
					}
					else{
						//console.log(item)
						console.log("2턴 구매못함");
						return false;
					}
				}
			})
		}
		else if(currentPlayer.turn >= 3){
			//console.log("3턴",landId);
			$(NomalLand).each(function(index, item){
				if(land == item.LandNo){
					if(item.owner == "0"){
						if(landId == ("land"+currentPlayer.playerNo)){
							if(currentPlayer.money < Number(item.LandFee)){
								return false;
							}
							console.log("3턴 땅구입");
							$("#bp"+currentPlayer.location).append("<span id='"+currentPlayer.location+"land'>🚩</span>");
							item.owner = String(currentPlayer.playerNo);
							currentPlayer.money -= Number(item.LandFee);
							//console.log(currentPlayer.money);
							//console.log("주인",item.owner);
							return false;
						}
					}
					else if(item.owner == currentPlayer.playerNo){
						if(landId == ("villa"+currentPlayer.playerNo) && item.villabild == "0"){
							if(currentPlayer.money < Number(item.VillaConstruction)){
								return false;
							}
							console.log("3턴 빌라 구입");
							$("#bp"+currentPlayer.location).children("#"+currentPlayer.location+"land").remove();
							$("#bp"+currentPlayer.location).append("<span id='"+currentPlayer.location+"villa'>🏡 </span>");
							item.villabild = "1";
							currentPlayer.money -= Number(item.VillaConstruction);
							//console.log(currentPlayer.money);
						}
						if(landId == ("building"+currentPlayer.playerNo) && item.buildingbild == "0"){
							if(currentPlayer.money < Number(item.buildingConstruction)){
								return false;
							}
							console.log("3턴 빌딩구입");
							$("#bp"+currentPlayer.location).children("#"+currentPlayer.location+"land").remove();
							$("#bp"+currentPlayer.location).append("<span id='"+currentPlayer.location+"building'>🏦 </span>");
							item.buildingbild = "1";
							currentPlayer.money -= Number(item.buildingConstruction);
							//console.log(currentPlayer.money);
						}
						if(landId == ("hotel"+currentPlayer.playerNo) && item.hotelbild == "0"){
							if(currentPlayer.money < Number(item.hotelConstruction)){
								return false;
							}
							console.log("3턴 호텔구입");
							$("#bp"+currentPlayer.location).children("#"+currentPlayer.location+"land").remove();
							$("#bp"+currentPlayer.location).append("<span id='"+currentPlayer.location+"hotel'>🏰</span>");
							item.hotelbild = "1";
							currentPlayer.money -= Number(item.hotelConstruction);
							//console.log(currentPlayer.money);
						}
						//console.log(item)
					}
					else{
						//console.log(item)
						console.log("3턴 구매못함");
						return false;
					}
				}
			})
		}
	}