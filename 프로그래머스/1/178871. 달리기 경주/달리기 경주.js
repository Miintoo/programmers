function solution(players, callings) {
    const playersRank = {};
    const rankPlayers = {};
    
    players.forEach((player, index) => {
        playersRank[player] = index + 1;
        rankPlayers[index + 1] = player;
    });
    
    callings.forEach(calling => {
        const rank = playersRank[calling];
        
        const previosPlayer = rankPlayers[rank - 1];
        
        playersRank[calling] -= 1;
        playersRank[previosPlayer] += 1;
        rankPlayers[rank - 1] = calling;
        rankPlayers[rank] = previosPlayer;
    })
    
    return Object.values(rankPlayers);
    
}


