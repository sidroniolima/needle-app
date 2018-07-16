import firebase from 'firebase';

export const createFaccao = (uid) => 
{
  return (dispatch) => 
  {
    var faccaoData = {
      user: uid,
      name: 'Tailu',
      machines: ['Overlock','Colarete','3 pontos']
    };

    // Get a key for a new Post.
    var newFaccaoKey = firebase
      .database()
      .ref()
      .child('faccoes')
      .push().key;

    var updates = {};
    
    updates['/faccoes/' + newFaccaoKey] = faccaoData;
    updates['/user-faccao/' + uid + '/' + newFaccaoKey] = faccaoData;

    firebase
      .database()
      .ref()
      .update(updates)
      .then( () => console.log('Gravou'))
      .catch( (error) => console.log('Error: ', error));
  }
}
