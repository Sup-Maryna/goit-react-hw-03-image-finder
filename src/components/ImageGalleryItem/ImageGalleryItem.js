// import css from "./ImageGalleryItem.module.css";

export default function ImageGalleryItem({ item, onClick }) {
  return (
    <li onClick={onClick}>
      <img src={item.webformatURL} alt={item.tags} />
    </li>
  );
}
