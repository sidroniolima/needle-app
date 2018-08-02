const snapshotToArray = (snapshot) => 
{
  var returnArr = [];

  snapshot.forEach( (childSnapshot) => 
  {
      var item = childSnapshot.val();
      item.key = childSnapshot.key;

      returnArr.push(item);
  });

  return returnArr;
};

export default snapshotToArray;