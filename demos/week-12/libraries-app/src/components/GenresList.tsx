import { useEffect, useState } from 'react';
import { Alert, Col, Row, Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { getGenresForLibrary } from "../services/genres";
import type { IGenre } from '../services/genres';
import GenresListItem from './GenresListItem';

const GenresList = () => {
    const [ loading, setLoading ] = useState( true );
    const [ genres, setGenres ] = useState<IGenre[]>( [] );
    const [ error, setError ] = useState<Error | null>( null );

    const { id } = useParams();

    useEffect(
        () => {
            const helper = async () => {
                setLoading( true );

                try {
                    const genres = await getGenresForLibrary( id as string );
                    setGenres( genres );
                    setLoading( false );
                    setError( null );
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
        <>
            <h1 className="h2">List of Genres</h1>
            <hr />

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
                loading === false && error === null && (
                    genres.map(
                        g => (
                            <GenresListItem key={g.id} genre={g} />
                        )
                    )
                )
            }
        </>
    );
}
 
export default GenresList;