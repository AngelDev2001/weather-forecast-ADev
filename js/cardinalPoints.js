const degree = (degreeRotation) => {

    let degreeValue = '';

    if (degreeRotation == 0) {

        degreeValue = 'N';
    
    } else if (degreeRotation > 0 && degreeRotation <= 90) {
        
        degreeValue = degreeRotation <= 22.5 ? 'NNE' : degreeRotation <= 67.4 ? 'NE' : degreeRotation <= 89 ? 'ENE': degreeRotation <= 90 ? 'E': '';
        
    } else if (degreeRotation > 90 && degreeRotation <= 180) {
    
        degreeValue = degreeRotation <= 112.5 ? 'ESE' : degreeRotation <= 157.4 ? 'SE' : degreeRotation <= 179 ? 'SSE': degreeRotation <= 180 ? 'S': '';
        
    } else if (degreeRotation > 180 && degreeRotation <= 270) {
        
        degreeValue = degreeRotation <= 202.5 ? 'SSW' : degreeRotation <= 247.4 ? 'SW' : degreeRotation <= 269 ? 'WSW': degreeRotation <= 180 ? 'W': '';
        
    } else if (degreeRotation > 270 && degreeRotation <= 360) {
        
        degreeValue = degreeRotation <= 292.5 ? 'WNW' : degreeRotation <= 337.4 ? 'NW' : degreeRotation <= 359 ? 'NNW': degreeRotation <= 360 ? 'N': '';
    
    }else{
    
        degreeValue = '+360';
    
    }
    
    return degreeValue

}

