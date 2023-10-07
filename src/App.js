import { IonApp, IonContent, IonHeader, IonInput, IonTitle, IonToolbar } from '@ionic/react';
import { useState } from 'react';

import './css/extra.css'
import BioCard from './components/BioCard';
import { useStoredStorage } from './lib/Hooks';

// function getToday(){
//   new Date().toISOString().slice(0, 'yyyy-mm-dd'.length)
// }

function App() {
  let [tanggalLahir, setTanggalLahir] = useStoredStorage('tanggalLahir');
  let [targetTanggal, setTargetTanggal] = useState(new Date().toISOString().slice(0, 'yyyy-mm-dd'.length));

  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Biorythm Calculator</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <ion-list>
          <ion-item>
            <ion-label position="stacked">Tanggal Lahir: </ion-label>
            <IonInput type='date' value={tanggalLahir} onIonChange={(event)=>setTanggalLahir(event.detail.value)} />
          </ion-item>
          <ion-item>
            <ion-label position="stacked">Target</ion-label>
            <IonInput type='date' value={targetTanggal} onIonChange={(event)=> setTargetTanggal(event.detail.value)}/>
          </ion-item>
        </ion-list>
        {
          Boolean(tanggalLahir) && (
            <BioCard targetTanggal={targetTanggal} tanggalLahir={tanggalLahir}/>
          )
        }
      </IonContent>
    </IonApp>
  );
}

export default App;
