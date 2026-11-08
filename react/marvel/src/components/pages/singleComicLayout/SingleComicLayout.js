import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import './singleComicLayout.scss';

const hasData = (value) =>
  value != null &&
  !['', '-', 'not available', 'no information about the number of pages'].includes(
    String(value).trim().toLowerCase()
  );

const SingleComicLayout = ({ data }) => {
  const { title, description, pageCount, thumbnail, language, price } = data;

  return (
    <div className="single-comic">
      <Helmet>
        <meta name="description" content={`${title} comics book`} />
        <title>{title}</title>
      </Helmet>
      <img src={thumbnail} alt={title} className="single-comic__img" />
      <div className="single-comic__info">
        <h2 className="single-comic__name">{title}</h2>
        <p className="single-comic__descr">{description}</p>
        {hasData(pageCount) && <p className="single-comic__descr">{pageCount}</p>}
        {hasData(language) && <p className="single-comic__descr">Language: {language}</p>}
        {hasData(price) && <div className="single-comic__price">{price}</div>}
      </div>
      <Link to="/comics" className="single-comic__back">
        Back to all
      </Link>
    </div>
  );
};

export default SingleComicLayout;
