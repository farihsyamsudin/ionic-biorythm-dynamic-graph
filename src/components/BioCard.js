import { IonCard, IonCardContent, IonCardHeader, IonCardTitle } from "@ionic/react"
import dayjs from 'dayjs';
import { calculateBiorythms } from "./../lib/Biorhytm";
import BioChart from "./BioChart";
import { useState } from "react";
import './../css/extra.css'

function formatDate(isoString){
    const day = dayjs(isoString);

    return day.format('D MMMM YYYY')
}

const BioCard = ({tanggalLahir, targetTanggal}) => {
    const [rangeVal, setRangeVal] = useState(2);
    const biorythmValue = calculateBiorythms(tanggalLahir, targetTanggal)
    const objectTanggal = {
        tanggalLahir: tanggalLahir,
        targetTanggal: targetTanggal,
        range: rangeVal
    }

    return(
        <>
            <IonCard>
                <IonCardHeader>
                    <IonCardTitle className="ion-text-center">Hasil</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                    <div>
                        <p className="ion-text-center">Lihat Chart</p>
                        <input onChange={(event)=>setRangeVal(event.currentTarget.value)} value={rangeVal} min="1" max="50" type="range" className="block mx-auto" />
                    </div>
                    <p>Target Tanggal : {formatDate(targetTanggal)}</p>
                    <p>Tanggal Lahir : {formatDate(tanggalLahir)}</p>
                    <br/>
                    <BioChart {...objectTanggal} />
                    <p className="text-green">Fisik : {(biorythmValue.fisik * 100).toFixed(2)}%</p>
                    <p className="text-red">Emosional : {(biorythmValue.emosional*100).toFixed(2)}%</p>
                    <p className="text-blue">Intelektual : {(biorythmValue.intelektual*100).toFixed(2)}%</p>
                </IonCardContent>
            </IonCard>
        </>
    )
}

export default BioCard