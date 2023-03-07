import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function IconCheckboxes() {
    return (
        <div>
            <Checkbox {...label} icon={<MdFavoriteBorder />} checkedIcon={<MdFavorite style={{color: "#d82b2b"}}/>} />
        </div>
    );
}