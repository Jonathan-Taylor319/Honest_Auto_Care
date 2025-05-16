import { useEffect, useState } from "react";

export default function ImageSlider({ images, delay = 3000 }) {
    const [index, setIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length)
        }, delay)
        return () => clearInterval(interval)
    }, [images.length, delay])

    return(
        <img
        className="servicePhotos"
        src={images[index]}
        alt="Service Visual"
        // style={{
        //     width: '500px',
        //     height: '150px',
        //     objectFit: 'cover',
        //     borderRadius: '10px'
        //   }}
        />
    )
}