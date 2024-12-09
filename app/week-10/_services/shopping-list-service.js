import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

async function getUserItems(userId) {
    try {
      const itemsRef = collection(db, 'users', userId, 'items');
  
      const querySnapshot = await getDocs(itemsRef);
  
      const items = [];
  
      querySnapshot.forEach((doc) => {
        items.push({
          id: doc.id, 
          data: doc.data() 
        });
    });
  
      return items;
    } catch (error) {
      console.error('Error fetching user items:', error);
      throw new Error('Unable to fetch user items');
    }
}

async function addItemToUser(userId, item) {
    try {
      // Reference to the 'items' subcollection under the document with userId in the 'users' collection
      const itemsRef = collection(db, 'users', userId, 'items');
  
      // Add the new item to the 'items' subcollection
      const docRef = await addDoc(itemsRef, item);
  
      // Return the ID of the newly created document
      return docRef.id;
    } catch (error) {
      console.error('Error adding item to user:', error);
      throw new Error('Unable to add item to user');
    }
}
  
getUserItems('user123')
    .then((items) => {
      console.log('User items:', items);
    })
    .catch((error) => {
      console.error('Error:', error);
    });

addItemToUser('user123', { name: 'New Item', description: 'This is a new item.' })
    .then((docId) => {
        console.log('New item added with ID:', docId);
    })
    .catch((error) => {
        console.error('Error:', error);
    });