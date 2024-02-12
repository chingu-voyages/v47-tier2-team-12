import { useState, useEffect, useContext } from "react";
import { Todo_context } from "../../components/Context/Context";

const useWindowSize = () => {
    const {showSidebar,setshowSidebar } = useContext(Todo_context);

    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined
    });

    useEffect(() => {
        if (typeof window !== "undefined") {
            function handleResize() {
                setWindowSize({
                    width: window.innerWidth,
                    height: window.innerHeight
                });
                console.log("condition",window.innerWidth > 1024)
                window.innerWidth > 1024 ? setshowSidebar(true) : setshowSidebar(false) 

            }
            window.addEventListener("resize", handleResize);
            handleResize();
            return () => window.removeEventListener("resize", handleResize);
        }

    }, []);
    return windowSize;
};

export default useWindowSize;