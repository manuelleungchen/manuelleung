import { useRef, useState } from "react"

export const useIntersect = () => {
    const [entry, updateEntry] = useState({});
    const [node, setNode] = useState(null);

    const observer = useRef(
        new window.IntersectionObserver(([entry]) => updateEntry(entry))

    )

    useEffect(() => {
        const {current: currentObserver} = observer;

        currentObserver.observe(node.current)
        return () => {
            currentObserver.disconnect();
        }
    }, [node])
    return [setNode, entry];
};

