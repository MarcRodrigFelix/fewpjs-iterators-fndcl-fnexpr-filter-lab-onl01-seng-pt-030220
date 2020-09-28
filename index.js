

function findMatching(drivers, string){
  return drivers.filter(driver=> driver.toLowerCase() === string.toLowerCase() )
}



function fuzzyMatch(drivers, string){
  return drivers.filter(driver=> driver[0] === string[0] )
  // return drivers.filter(driver=> driver.charAt(0) === string.charAt(0) ) 
}



function matchName(drivers, string){
  return drivers.filter(driver=> driver.name === string )
}