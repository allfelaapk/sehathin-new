import React from 'react'
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ImageList, ImageListItem } from '@mui/material';

export default function CardList() {
  return (
    <>
        <ImageList cols={4} gap={2}>
        {doctorsList.map((item) => (
          <ImageListItem key={item.img} sx={{ p: 2, border: 1 }}>
            <img
              src={`${item.img}?w=50&fit=cover&auto=format`}
              srcSet={`${item.img}?w=50&fit=cover&auto=format&dpr=2 2x`}
              alt={item.author}
              loading="lazy"
            />
            <Typography variant="h6">
              dr. {item.name}
            </Typography>
            <Typography gutterBottom variant="body2" color="text.secondary">
              5 Review
            </Typography>
            <Button variant="contained" size="medium">Chat</Button>
          </ImageListItem>
        ))}
        </ImageList>
    </>
  )
}

const doctorsList = [
  {
    id: 1,
    img: 'https://source.unsplash.com/pTrhfmj2jDA',
    title: 'Usman Yousaf',
    name: 'Ladusing',
    author: '@usmanyousaf ',
  },
  {
    id: 2,
    img: 'https://source.unsplash.com/FVh_yqLR9eA',
    title: 'humberto chavez',
    name: 'Rohayah',
    author: '@betoframe',
  },
  {
    id: 3,
    img: 'https://source.unsplash.com/rm7rZYdl3rY',
    title: 'Rian Ramirez',
    name: 'Mumun',
    author: '@rrianramirez',
  },
  {
    id: 4,
    img: 'https://source.unsplash.com/279xIHymPYY',
    title: 'Bruno Rodrigues',
    name: 'Frengky',
    author: '@naosougagliasso',
  },
  {
    id: 5,
    img: 'https://source.unsplash.com/ZCztndOWdjs',
    title: 'Dalton Ngangi',
    name: 'Usman',
    author: '@daltonngangi ',
  },
  {
    id: 6,
    img: 'https://source.unsplash.com/OwLvUXlCgdY',
    title: 'Studio Michael França',
    name: 'rumi',
    author: '@studiomikefranca',
  },
  {
    id: 7,
    img: 'https://source.unsplash.com/lnlSIsiSjjc',
    title: 'Siednji Leon',
    name: 'beatkarbu',
    author: '@siednji',
  },
  {
    id: 8,
    img: 'https://source.unsplash.com/NpMkXyabVH8',
    title: 'Adi Coco',
    name: 'tumini',
    author: '@adicoco',
  },
];