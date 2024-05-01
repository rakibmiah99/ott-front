export const useSliderHeaderMovie = () => {
    const headerMovieStore = useState('header_movie',() => {
        return []
    })

    return {
        headerMovieStore
    }


}