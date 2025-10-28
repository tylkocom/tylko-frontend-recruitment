
export default defineEventHandler(async (event): Promise<string[]> => {

    return [
        'wallstorage',
        'bookcase',
        'sideboard',
    ]

});
