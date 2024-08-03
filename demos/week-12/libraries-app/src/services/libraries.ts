import axios from 'axios';

interface ILibrary {
    id: number,
    name: string,
    location: string,
    description: string,
    opens: string,
    closes: string,
    rating: number,
    noOfRatings: number,
    imageUrl: string
};

const baseUrl = process.env.REACT_APP_BASE_URL;

const getLibraries = async () => {
    const response = await axios.get<ILibrary[]>( `${baseUrl}/libraries` );
    return response.data;
};

export {
    getLibraries,
}

export type {
    ILibrary
}