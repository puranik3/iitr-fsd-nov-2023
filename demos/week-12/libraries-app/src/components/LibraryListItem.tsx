import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Rating from './Rating';

import { ILibrary } from "../services/libraries";

import './LibraryListItem.css';

interface Props {
    library: ILibrary
}

const LibraryListItem = ( { library } : Props ) => {
    return (
        <Card>
            <Card.Img
                variant="top"
                src={process.env.REACT_APP_BASE_URL + library.imageUrl}
                alt={library.name}
            />
            <Card.Body>
                <Card.Title className="library-list-item-header">
                    <span>
                        <div>{library.name}</div>
                        <Rating value={library.rating} numRatings={library.noOfRatings}></Rating>
                    </span>
                    <Link to={"/libraries/" + library.id}>
                        <Button size="sm" color="primary">Know more</Button>
                    </Link>
                </Card.Title>
                <Card.Text>
                    <strong>Address:</strong> {library.location}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}
 
export default LibraryListItem;