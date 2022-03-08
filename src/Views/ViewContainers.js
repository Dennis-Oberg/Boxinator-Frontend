import React from "react";
import { getAllEndPoint } from "../utils/endpoints";
import { BoxList } from "../Components/BoxList";

export const ViewContainers = () => {

    const [boxes, setBoxes] = React.useState([]);
    const [error, setError] = React.useState("");

    const fetchBoxes = React.useCallback(async () => {

        try {
            const res = await fetch(getAllEndPoint);
            const data = await res.json();
            setBoxes(data);

        } catch {
            setError("Server-error")
        };

    }, []);

    React.useEffect(() => {
        fetchBoxes();
    }, [fetchBoxes]);

    return (
        <div>
            <BoxList boxes={boxes} error={error} />
        </div>
    )
}