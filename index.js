
function distanceFromHqInBlocks(block) {
    const hqBlock = 42; 
    return Math.abs(block - hqBlock); 
  }
  
  function distanceFromHqInFeet(block) {
    const feetPerBlock = 264; 
    return Math.abs(block - 42) * feetPerBlock;
  }
  function distanceTravelledInFeet(start, destination) {
    const feetPerBlock = 264; 
    return Math.abs(destination - start) * feetPerBlock;
  }
  function calculatesFarePrice(start, destination) {
    const feetPerBlock = 264;
    const distanceInFeet = Math.abs(destination - start) * feetPerBlock;
  
    if (distanceInFeet <= 400) {
      return 0; 
    } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
      return (distanceInFeet - 400) * 0.02; 
    } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
      return 25; 
    } else {
      return 'cannot travel that far'; 
    }
  }