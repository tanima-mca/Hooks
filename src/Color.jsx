import React from 'react'

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect() {
  const [color, setColor] = React.useState('');

  const colorVariant = [
    { name: "Red", value: '#d50000' },
    { name: "Blue", value: '#1a237e' },
    { name: "Green", value: '#2e7d32' },
    { name: "Brown", value: '#4e342e' },
    { name: "Black", value: '#000000' },
  ];

  const handleChange = (e) => {
    setColor(e.target.value);
  };

  return (
    <>
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Color</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={color}
          label="Color"
          onChange={handleChange}
        >{colorVariant.map((item)=>(
            <MenuItem value={item.value} key={item.id}>{item.name}</MenuItem>

        ))}       
        </Select>
      </FormControl>
    </Box>
    <div style={{backgroundColor:color, height:"100px" ,width:"100px"}}></div>
    </>
  );
}