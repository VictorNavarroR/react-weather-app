import { createContext, ReactNode, useState } from "react";
import { Coords } from "../models/coords.interface";
import { Coord } from "../models/weather.interface";

const CoordsContext = createContext({});

interface Props {
    children: ReactNode
}

export interface ICoordsContext {
    coords: Coords, 
    setCoords: (coords: Coords) => void
}

export const CoordsContextProvider = ({children}: Props)  => {
    const [coords, setCoords] = useState<Coord>();
    return <CoordsContext.Provider value={{coords, setCoords}}>{children}</CoordsContext.Provider>
}

export default CoordsContext;