// 다음 플레이어
	function nextPlayer(currentPlayer) {
		// 더블이 아니거나, 클릭횟수 3번이거나, 무인도일 때 다음플레이어로 넘김
		if(currentPlayer.doubleFlag != 1 || currentPlayer.click == 3 || currentPlayer.location == 11) {
			playerNum += 1;
			currentPlayer.click = 0
			currentPlayer.doubleFlag = 0;
			if(playerNum>3) {
				playerNum = 0;
			}
		// 더블이면 플레이어 넘기지 않고 진행
		} else {
			currentPlayer.doubleFlag = 0;
		}
		//console.log("nextPlayerIdx",playerNum);
		
		// 다음 플레이어 객체 리턴
		return players[playerNum];
	}