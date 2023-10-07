import { useState } from "react"

// Fungsi ini untuk mengakses local storage, jadi ketika user merefresh web/app
// Akan ada default value yg diberikan dari local storage sebelumnya

export const useStoredStorage = (storageKey, initialState) =>{

    const getInitalState = () =>{
        const storedState = localStorage.getItem(storageKey)
        return storedState ?? initialState
    }

    const [state, setState] = useState(getInitalState)
    const setAndStoreState = (state) =>{
        setState(state)
        localStorage.setItem(storageKey, state)
    }
    return [state, setAndStoreState]
}