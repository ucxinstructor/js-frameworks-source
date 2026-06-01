import { Select, MenuItem } from '@mui/material';

export default function MessageSelect({ items = [], value, onChange }) {
  if (!items.length) return null; // Don't render if there are no options

  return (
    <Select
      value={value}
      onChange={onChange}
      variant="standard"
      disableUnderline
      inputProps={{ 'aria-label': 'Select Message' }}
      sx={{
        color: 'primary.main',
        fontSize: '2rem',
        fontWeight: '800',
        width: '100%',
        '& .MuiSelect-select': {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          paddingRight: '0px !important', // Removes the default padding that offsets centering
          textAlign: 'center',
        },
        '& .MuiSelect-icon': {
          color: 'text.secondary',
          fontSize: '1.5rem',
        },

      }}
    >
      {items.map((item, index) => (
        <MenuItem key={index} value={item}>
          {item}
        </MenuItem>
      ))}
    </Select>
  );
}

