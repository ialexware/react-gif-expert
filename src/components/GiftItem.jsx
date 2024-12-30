import PropTypes from "prop-types";

export const GiftItem = ({ id, url, title }) => {
  return (
    <div key={id} className="card">
      <img src={url} alt={title} />
      <p>{title}</p>
      {/* Button to download the gif */}
        <a href={url} target="_blank" rel="noreferrer"> Download </a>
    </div>
  );
};

GiftItem.propTypes = {
  id: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
