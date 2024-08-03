import { useEffect, useState } from 'react';
import { Alert, Spinner } from 'react-bootstrap';
import { getLibraries } from "../services/libraries";
import type { ILibrary } from '../services/libraries';

const LibraryList = () => {
    const [ loading, setLoading ] = useState( true );
    const [ libraries, setLibraries ] = useState<ILibrary[]>( [] );
    const [ error, setError ] = useState<Error | null>( null );

    useEffect(
        () => {
            const helper = async () => {
                setLoading( true );

                try {
                    const libraries = await getLibraries();
                    setLibraries( libraries );
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
            <h1 className="h2">List of Libraries</h1>
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
                    libraries.map(
                        l => <div key={l.id}>{l.name}</div>
                    )
                )
            }
        </>
    );
}
 
export default LibraryList;