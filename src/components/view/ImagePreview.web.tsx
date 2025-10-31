
interface Props {
  imageUrls: string[]; // array of image URLs
  initialIdx?: number; // initial index to show
  open: boolean;
  onClose: () => void;
}
/**
 * fullscreen preview of images
 * @returns 
 */
const ImagePreview = ({
  imageUrls,
  initialIdx = 0,
  open,
  onClose,
}: Props) => {
  return null;
}

export default ImagePreview;
