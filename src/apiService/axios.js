import axios from 'axios'
axios.defaults.baseURL = 'https://api.unsplash.com/search/photos'
const ACCESS_KEY = 'Ib8heEot_hTYW07gq1OSF_40JpI_EvCNFfPigUmas04'
// const SECRET_KEY = 'wDsy71Sr-9N2OlgxldhODFawtvzLETW-YKZsq1CZeNc'


export async function getPhotos(query, page) {
    const { data } = await axios.get(
        `?query=${query}&page=${page}&client_id=${ACCESS_KEY}`
)
return data
}


