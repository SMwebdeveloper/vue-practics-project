import axios from './axios'

const ArticleService = {
    articles() {
        return axios.get('/articles')
    },
    articleDetail(slug) {
        return axios.get(`/articles/${slug}`)
    },
    createArticle(article) {
        return axios.post('/articles', {article})
    },
    deleteArtcile(slug) {
        return axios.delete(`/articles/${slug}`)
    }
}

export default ArticleService