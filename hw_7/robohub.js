//-------1-LEVEL-1-------//
do {
  north();
}
while (isFree('north'));


//-------2-LEVEL-2-------//
while (isFree('east')) {
  east();
}


//-------3-LEVEL-3-------//
do {
  south();
  if (isFree('east')) {
    east();
  }
}
while (isFree('south'));


//-------4-LEVEL-4-------//
while (isFree('south')) {
  south();
  if (isFree('east')) {
    for (i = 0; i < 3; i++) {
      east();
    }
  }
}


//-------5-LEVEL-5-------//
for(i=0; i<6; i++){east();}
while(isFree('south')){south();}
while(isFree('west')){west();}
for(i=0; i<3; i++){south();}
while(isFree('west')){west();}
for(i=0; i<3; i++){north();}
while(isFree('west')){west();}
for(i=0; i<5; i++){south();}
for(i=0; i<6; i++){east();}


//-------6-LEVEL-6-------//
while(isFree('south')){
  south();
}
for(i=0; i<6; i++){
  if(isFree('east')){
    east();
  }
  else if(isFree('north')){
    while(isFree('north')){
      north();
    }
    east();
    do{
      south();
    }
    while (isFree('south'));
  }
}
for(i=0; i<4; i++){
  south();
}
do{
  west();
}
while(isFree('west'));
for(i=0; i<3; i++){
  if(isFree('south')){
    south();
  }
  while(isFree('east')){
    east();
  }
}


//-------7-LEVEL-7-------//
