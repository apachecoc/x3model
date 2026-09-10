import { Injectable } from '@angular/core';
import { initializeApp, FirebaseApp } from 'firebase/app';
import { getAuth, Auth } from 'firebase/auth';
import { getFirestore, Firestore } from 'firebase/firestore';
import { getStorage, FirebaseStorage } from 'firebase/storage';
import { environment } from '@env/environment';

@Injectable({ providedIn: 'root' })
export class FirebaseClientService {
  private app?: FirebaseApp;
  private auth?: Auth;
  private firestore?: Firestore;
  private storage?: FirebaseStorage;

  get firebaseApp(): FirebaseApp {
    this.app ??= initializeApp(environment.firebase);
    return this.app;
  }

  get firebaseAuth(): Auth {
    this.auth ??= getAuth(this.firebaseApp);
    return this.auth;
  }

  get db(): Firestore {
    this.firestore ??= getFirestore(this.firebaseApp);
    return this.firestore;
  }

  get mediaStorage(): FirebaseStorage {
    this.storage ??= getStorage(this.firebaseApp);
    return this.storage;
  }
}
