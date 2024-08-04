import { useEffect, useState } from 'react';
import { Alert, Col, Image, Row, Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import GenresList from './GenresList';
import Rating from './Rating';

import { getLibraryById } from "../services/libraries";
import type { ILibrary } from '../services/libraries';

const LibraryDetails = () => {
    const [ loading, setLoading ] = useState( true );
    const [ library, setLibrary ] = useState<ILibrary | null>( null );
    const [ error, setError ] = useState<Error | null>( null );

    // const params = useParams(); // { id: "1" }
    // console.log( params );

    const { id } = useParams();

    useEffect(
        () => {
            const helper = async () => {
                setLoading( true );

                try {
                    const library = await getLibraryById(id as string);
                    setLibrary( library );
                    setLoading( false );
                    setError( null );
                    console.log(library);
                } catch( error ) {
                    setError( error as Error );
                    setLoading( false );
                }
            }
            helper();
        },
        [] // Please do not forget to give the dependencies array
    )

    return (
        <div>
            {loading === true && (
                <div className="text-center">
                    <Spinner animation="border" />
                </div>
            )}
            {
                loading === false && error !== null && (
                    <Alert variant="danger">
                        {error.message}
                    </Alert>
                )
            }
            {
                loading === false && error === null && library !== null && (
                    <>
                        <h1>{library.name}</h1>
                        <hr />
                        <Row>
                            <Col className="col-12 col-md-4">
                                <Image 
                                    src={process.env.REACT_APP_BASE_URL + library.imageUrl}
                                    alt={library.name}
                                    fluid
                                />
                            </Col>
                            <Col className="col-12 col-md-8">
                                {library.description}
                                <Row className="my-3">
                                    <Col className="col-4">
                                        <FontAwesomeIcon icon={faClock} className="me-2" />
                                        <span>{library.opens} - {library.closes}</span>
                                    </Col>
                                    <Col className="col-4">
                                        <Rating value={library.rating} numRatings={library.noOfRatings} />
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </>
                )
            }

            <div className="my-4">
                <GenresList />
            </div>
        </div>
    );
};
 
export default LibraryDetails;