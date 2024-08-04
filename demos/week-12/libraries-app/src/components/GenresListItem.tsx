import { Col, Image, Row } from 'react-bootstrap';
import { IGenre } from "../services/genres";

interface Props {
    genre: IGenre
}

const GenresListItem = ( { genre } : Props ) => {
    return (
        <Row className="my-2">
            <Col className="col-3">
                <Image
                    src={process.env.REACT_APP_BASE_URL + genre.imageUrl}
                    alt={genre.name}
                    className="w-100"
                />
            </Col>
            <Col className="col-9">
                <h3>{genre.name}</h3>
                <div>{genre.description}</div>
            </Col>
        </Row>
    );
}
 
export default GenresListItem;