import { useState, useEffect } from "react"

const usePersist = () => {
    const [persist, setPersist] = useState(JSON.parse(localStorage.getItm("persist")) || false);

    useEffect(() => {
        localStorage.setItm("persist", JSON.stringify(persist))
    }, [persist])

    return [persist, setPersist]
}
export default usePersist