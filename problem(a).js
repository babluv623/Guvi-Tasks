let cat = {
    name: 'Fluffy',
    activities: ['play', 'eat cat food'],
    catFriends: [
    {
    name: 'bar',
    activities: ['be grumpy', 'eat bread omblet'],
    weight: 8,
    furcolor: 'white'
    }, 
    {
    name: 'foo',
    activities: ['sleep', 'pre-sleep naps'],
    weight: 3
    }
    ]
   }
   cat.height='25cm';
   cat.weight='10lbs';
   cat.name='Fluffyy';
   console.log(cat.catFriends[0].activities.concat(cat.catFriends[1].activities));
   for (i in cat){
       for (j in cat[i]){
           let key=cat[i][j];
           console.log(key.name);
           
       }
   } 
   let total_weight=(cat.catFriends[0].weight + cat.catFriends[1].weight );
   console.log(total_weight);
   console.log(cat.activities.concat(cat.catFriends[0].activities,cat.catFriends[1].activities));
   cat.catFriends[0].activities.push('playing', 'dancing');
   cat.catFriends[1].activities.push('playing', 'dancing');
   cat.catFriends[0].furcolor='green';
   