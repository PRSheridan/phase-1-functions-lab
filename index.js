function distanceFromHqInBlocks(loc){
    if(loc >= 42){
        return loc % 42;
    }else if(loc < 42){
        return 42 - loc;
    }
}

function distanceFromHqInBlocksAlt(loc, hq){
    if(loc >= hq){
        return loc % hq;
    }else if(loc < hq){
        return hq - loc;
    }
}

function distanceFromHqInFeet(loc){
    return distanceFromHqInBlocks(loc)*264;
}

function distanceTravelledInFeet(loc, hq){
    return distanceFromHqInBlocksAlt(loc, hq)*264;
}

function calculatesFarePrice(loc, hq){
    let distTravelled = distanceTravelledInFeet(loc, hq)

    if(distTravelled <= 400){
        return 0;
    }else if(distTravelled > 400 && distTravelled <= 2000){
        return ((distTravelled-400)*2)/100;
    }else if(distTravelled > 2000 && distTravelled <= 2500){
        return 25;
    } else if(distTravelled > 2500){
        return "cannot travel that far";
    }
}