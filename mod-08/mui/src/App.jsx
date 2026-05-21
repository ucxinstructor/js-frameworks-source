import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import Button from '@mui/material/Button';

function ButtonUsage() {
    return <Button variant="contained">Hello world</Button>;
}

function ContinuousSlider({value, setValue}) {
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: 200 }}>
            <Stack spacing={2} direction="row" sx={{ alignItems: 'center', mb: 1 }}>
                <Slider aria-label="Volume" 
                min={10}
                step={2}
                max={100}
                value={value} onChange={handleChange} />
            </Stack>
        </Box>
    );
}

export default function App() {
    const [value, setValue] = React.useState(30);
    return (
        <div>
            <h1>My App</h1>
            <ButtonUsage />
            <ContinuousSlider value={value} setValue={setValue} />
            <p>{value}</p>
        </div>
    );
}




