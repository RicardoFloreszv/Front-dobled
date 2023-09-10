import { useContext } from "react";
import VallaContext from "../context/VallaProvider";

const useValla = () => {
    return useContext(VallaContext)
}

export default useValla