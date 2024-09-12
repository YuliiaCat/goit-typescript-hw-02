import { Image } from '../../types/image';
import style from './ImageCard.module.css';

type Props = {
  image: Image;
  onOpen: () => void;
};

const ImageCard: React.FC<Props> = ({ image, onOpen }) => {
  const { urls, description } = image;
  
  return (
    <div className={style.card} onClick={onOpen}>
      <img 
        className={style.img}
        src={urls.small} 
        alt={description}
      />
    </div>
  );
}

export default ImageCard