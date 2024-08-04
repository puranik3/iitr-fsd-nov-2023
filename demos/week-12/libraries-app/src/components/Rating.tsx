import { faStar as faFullStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarEmpty } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Props {
    color?: string
    numRatings: number,
    value: number,
}

const Rating = (
        {
            color = 'goldenrod',
            numRatings,
            value
        } : Props
    ) => {
    const numFullStars = Math.floor( value ); // 4.3 -> 4
    const numHalfStars = value - numFullStars >= 0.5 ? 1 : 0; // 4.3 - 4 -> 0.3 < 0.5 -> 0 half stars
    const numEmptyStars = 5 - numFullStars - numHalfStars; // the ones remaining (out of 5)

    const style = {
        color: color,
        fontSize: '0.75em'
    };

    return (
        <div>
            {
                Array(numFullStars).fill(1).map( ( i, idx ) => <FontAwesomeIcon icon={faFullStar} key={idx} style={style} /> )
            }
            {
                Array(numHalfStars).fill(1).map( ( i, idx ) => <FontAwesomeIcon icon={faStarHalfStroke} key={idx} style={style} /> )
            }
            {
                Array(numEmptyStars).fill(1).map( ( i, idx ) => <FontAwesomeIcon icon={faStarEmpty} key={idx} style={style} /> )
            }
            <span style={{ fontSize: '0.75em', marginLeft: '8px' }}>{value} ({numRatings})</span>
        </div>
    );
};

// old way for providing prop defaults
// Rating.defaultProps = {
//     color: "gold"
// }
 
export default Rating;