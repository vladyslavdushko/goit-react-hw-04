import styles from './ImageCard.module.css'
const ImageCard = ({image, handleOpen}) => {
  return (
    <li className={styles.li_gallery_item} > 
        <div className={styles.li_gallery_item_container}>
            <img src={image.urls.small} alt={image.slug} className={styles.li_gallery_item} onClick={() => handleOpen(image.urls.regular, image.slug)}/>
        </div>
    </li>
  )
}

export default ImageCard