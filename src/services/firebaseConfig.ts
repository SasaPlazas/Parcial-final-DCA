
let db: any;
let auth: any;

const getFirebaseInstance = async () => {
	if (!db) {
		const { getFirestore } = await import('firebase/firestore');
		const { initializeApp } = await import('firebase/app');
		const { getAuth } = await import('firebase/auth');

		const firebaseConfig = {

                apiKey: "AIzaSyANQd1emE1nicKj1hPI9AF5xljq1gE-ZV0",
                authDomain: "parciales-4f6e9.firebaseapp.com",
                projectId: "parciales-4f6e9",
                storageBucket: "parciales-4f6e9.firebasestorage.app",
                messagingSenderId: "506542549253",
                appId: "1:506542549253:web:ae94d03feebe28033d2f6c",
                measurementId: "G-7ZV3G6RR75"
  
		};

		const app = initializeApp(firebaseConfig);
		db = getFirestore(app);
		auth = getAuth(app);
	}
	return { db, auth };
};

export const addUser= async (user: any) => {
	try {
		const { db } = await getFirebaseInstance();
		const { collection, addDoc } = await import('firebase/firestore');

		const where = collection(db, 'products');
		await addDoc(where, user);
		console.log('Se añadió con exito');
	} catch (error) {
		console.error('Error adding document', error);
	}
};

export const getLetter = async () => {
	try {
		const { db } = await getFirebaseInstance();
		const { collection, getDocs } = await import('firebase/firestore');

		const where = collection(db, 'products');
		const querySnapshot = await getDocs(where);
		const data: any[] = [];

		querySnapshot.forEach((doc) => {
			data.push(doc.data());
		});

		return data;
	} catch (error) {
		console.error('Error getting documents', error);
	}
};

export const registerUser = async (email: string, password: string) => {
	try {
		const { auth } = await getFirebaseInstance();
		const { createUserWithEmailAndPassword } = await import('firebase/auth');

		const userCredential = await createUserWithEmailAndPassword(auth, email, password);
		console.log(userCredential.user);
		return true;
	} catch (error) {
		console.error(error);
		return false;
	}
};
