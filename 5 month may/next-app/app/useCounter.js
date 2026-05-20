import { useState } from "react";

export default function useCounter() {

    const [count, setCount] = useState(0);

    const increase = () => {
        setCount(count + 1);
    };

    return { count, increase };
}