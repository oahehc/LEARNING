function distance(coord1, coord2) {
    function getDeg(string) {
        let tempArray = string.split('°');
        let deg = parseInt(tempArray[0].trim(), 10);
        tempArray = tempArray[1].split('′');
        deg += parseInt(tempArray[0].trim(), 10) / 60;
        tempArray = tempArray[1].split('″');
        deg += parseInt(tempArray[0].trim(), 10) / 60 / 60;
        if (tempArray[1].trim() === 'S' || tempArray[1].trim() === 'W') deg = deg * -1;
        return deg / 360 * Math.PI * 2;
    }
    const radius = 6371;
    const coord1Array = [];
    coord1 = coord1.split(',');
    coord1 = [getDeg(coord1[0]), getDeg(coord1[1])];
    console.log(coord1);
    coord2 = coord2.split(',');
    coord2 = [getDeg(coord2[0]), getDeg(coord2[1])];
    console.log(coord2);
    const result = radius * Math.acos(Math.sin(coord1[0]) * Math.sin(coord2[0]) + Math.cos(coord1[0]) * Math.cos(coord2[0]) * Math.cos(Math.abs(coord1[1] - coord2[1])));
    return Math.floor(result / 10) * 10;
}


console.log(distance("48° 12′ 30″ N, 16° 22′ 23″ E", "23° 33′ 0″ S, 46° 38′ 0″ W"));
// Returns 10130
console.log(distance("48° 12′ 30″ N, 16° 22′ 23″ E", "58° 18′ 0″ N, 134° 25′ 0″ W"));
// // Returns 7870
console.log(distance("48° 12′ 30″ N, 16° 22′ 23″ E", "48° 12′ 30″ N, 16° 22′ 23″ E"));
// // Returns 0