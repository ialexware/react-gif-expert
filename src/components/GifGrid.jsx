import PropTypes from "prop-types";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GiftItem } from "./GiftItem";

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  console.log({ images, isLoading });

  // const [images, setImages] = useState([]);
  // const getImages = async () => {
  //   const gifs = await getGifts(category);
  //   setImages(gifs);
  // };

  // useEffect(() => {
  //   getImages();
  // }, []);

  return (
    <>
      <h3>{category}</h3>
      {/* List of gifs */}
      {isLoading && (
        <h2 className="animate__animated animate__flash">Loading...</h2>
      )}

      <div className="card-grid">
        {images.map((img) => (
          <GiftItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};
