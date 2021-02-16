
function hasCollided(bullet, wall){
    bulletR = bullet.x + bullet.width;

    if(bulletR >= wall.x){
        return true;
    }   else {
        return false;
    }
}
  