const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'adc562a55ccf921233a9c23b460a6b48',
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`
}

export default apiConfig