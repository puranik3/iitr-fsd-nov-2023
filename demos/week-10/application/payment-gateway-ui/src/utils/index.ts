const generateArrayFromRange = ( min : number, max : number ) => {
    const result = [];

    for( let i = min; i <= max; ++i ) {
        result.push( i );
    }

    return result;
};

const getCurrentYear = () => {
    const today = new Date();
    return today.getFullYear();
};

export {
    generateArrayFromRange,
    getCurrentYear
}