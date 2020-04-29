function hasCollided(obj1,obj2)
  {
    bulletRightEdge = bullets.sprite.x+bullets.sprite.width;
    wallLeftEdge = walls.sprite.x;
    if (bulletRightEdge>wallLeftEdge)
    {
      return true
    }
    return false;
  }