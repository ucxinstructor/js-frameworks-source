import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

export default function BasicButtonGroup({items, onClick}) {
  return (
    <ButtonGroup variant="contained" aria-label="Basic button group">
      {items.map((item, index) => (
        <Button key={index} onClick={() => onClick(item)}>
          {item}
        </Button>
      ))}
    </ButtonGroup>
  );
}
