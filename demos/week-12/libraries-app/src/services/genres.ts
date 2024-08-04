import axios from 'axios';

interface IGenre {
    id: number,
    libraryId: number,
    name: string,
    description: string,
    imageUrl: string
}

const baseUrl = process.env.REACT_APP_BASE_URL;

const getGenresForLibrary = async ( id : number | string ) => {
    const response = await axios.get<IGenre[]>( `${baseUrl}/libraries/${id}/genres` );
    return response.data;
};

export {
    getGenresForLibrary
}

export type {
    IGenre
}