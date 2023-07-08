import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from 'firebase/firestore';
import { db as firebaseDb } from './firebase';

const db = getFirestore(firebaseDb);

const checkUserExists = async (userUid: any) => {
  const q = query(collection(db, 'users'), where('uid', '==', userUid));
  const docs = await getDocs(q);
  return docs.docs.length !== 0;
};

const addUser = async (user: any) => {
  await addDoc(collection(db, 'users'), user);
};

export { db, checkUserExists, addUser };
