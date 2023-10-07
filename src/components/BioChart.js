import { CartesianGrid, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { calculateBiorythmSeries } from "../lib/Biorhytm"
import { useEffect, useState } from "react"

const BioChart = (objectTanggal) => {
    const [series, setSeries] = useState([]);

    useEffect(() => {
        const calculatedSeries = calculateBiorythmSeries(objectTanggal.tanggalLahir, objectTanggal.targetTanggal, objectTanggal.range);
        setSeries(calculatedSeries);
    }, [objectTanggal.tanggalLahir, objectTanggal.targetTanggal, objectTanggal.range]);
    
    return (
        <>
            <ResponsiveContainer width="100%" height={200}>
                <LineChart data={series}>
                    <CartesianGrid/>
                    <XAxis dataKey="date"/>
                    <YAxis/>
                    <Line dot={false} type="natural" dataKey="fisik" stroke="green"/>
                    <Line dot={false} type="natural" dataKey="emosional" stroke="red"/>
                    <Line dot={false} type="natural" dataKey="intelektual" stroke="blue"/>
                </LineChart>
            </ResponsiveContainer>
        </>
    )
}

export default BioChart