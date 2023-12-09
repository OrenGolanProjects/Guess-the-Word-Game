/**
 * Asynchronous function that fetches a word puzzle from an external API.
 *
 * @function
 * @async
 * @param {number} wordCount - The number of words in the puzzle.
 * @returns {Promise<string>} A promise that resolves to the fetched puzzle.
 * @throws {Error} Throws an error if the API request is unsuccessful.
 */
export const getPuzzle = async (wordCount) => {
    try {
        // Make an asynchronous request to the external API to fetch a puzzle
        const response = await fetch(`https://puzzle.mead.io/puzzle?wordCount=${wordCount}`);

        // Check if the API request was successful (status code 200)
        if (response.status === 200) {
            // Parse the JSON data from the response and return the puzzle
            const data = await response.json();
            return data.puzzle;
        } else {
            // If the API request was not successful, throw an error
            throw new Error('Unable to fetch puzzle');
        }
    } catch (error) {
        // Handle any errors that occur during the fetch operation
        throw new Error('Unable to fetch puzzle');
    }
};
