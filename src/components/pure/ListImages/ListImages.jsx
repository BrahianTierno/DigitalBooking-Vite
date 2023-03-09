import  React,{useContext} from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';



export default function StandardImageList({img}) {
 
    return (
        <ImageList sx={{ width: 1200, height: "auto"}} cols={3} gap={10} >
            {img?.map((item) => (
                <ImageListItem key={item.id}>
                    <img
                        src={`${item.urlImagen}`}
                        alt="imagenes del hotel"
                        loading="lazy"
                    />
                </ImageListItem>
            ))}
        </ImageList>
    );
}