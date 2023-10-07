import dayjs from "dayjs"

export const calculateBiorythms = (tanggalLahir, targetTanggal) => {
    return{
        fisik       : calculateBiorythm(tanggalLahir, targetTanggal, 23),
        emosional   : calculateBiorythm(tanggalLahir, targetTanggal, 28),
        intelektual : calculateBiorythm(tanggalLahir, targetTanggal, 33),
    }
}

export const calculateBiorythmSeries = (tanggalLahir, centerDate, range) => {
    const series = [];
    const centerDay = dayjs(centerDate)
    for (let diff = -range; diff <= range; diff++) {
        const targetDay = centerDay.add(diff, 'day');
        const biorythm = calculateBiorythms(tanggalLahir, targetDay)
        series.push({date: targetDay.format('D MMM YYYY'), ...biorythm});
    }

    return series

}

export const calculateBiorythm = (tanggalLahir, targetTanggal, TValueBio) => {
    const HariLahir = dayjs(tanggalLahir)
    const targetHari = dayjs(targetTanggal)

    const diff = targetHari.diff(HariLahir, 'day');

    return Math.sin(2 * Math.PI * diff / TValueBio)
}
