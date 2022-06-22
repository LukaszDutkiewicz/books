import BooksList from "./components/Books/List"
import BooksShow from "./components/Books/Show"
export default {
    mode: 'history',
    routes: [
        {
            path: "/books/list",
            component: BooksList,
            name: "BooksList"
        },
        {
            path: "/books/show",
            component: BooksShow,
            name: "BooksShow"
        },

    ]
}