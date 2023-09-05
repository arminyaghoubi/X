import Button from '@mui/material/Button';
import { useState } from 'react';


export default function ButtonUsage() {
    const [count, setCount] = useState(0)

    return <Button variant="contained" onClick={() => setCount((count) => count + 1)}>Hello world {count}</Button>;
}