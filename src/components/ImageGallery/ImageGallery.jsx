import styles from './ImageGallery.module.css'
import ImageCard from '../ImageCard/ImageCard';
export const ImageGallery = ({images, handleOpen}) => {
  return (
    <ul className={styles.ul_gallery}>
        {
            images.map(image => 
            <ImageCard image={image} key={image.id} handleOpen={handleOpen}/>
            )
        }
    </ul>
  )
}
