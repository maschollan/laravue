<template>
    <div class="mt-5">
        <div class="row justify-content-center">
            <div class="col-md-8 col-12 mb-4">
                <div class="card">
                    <div
                        class="
                            card-header
                            d-flex
                            justify-content-between
                            align-items-center
                        "
                    >
                        <h3 class="mb-0">Tabel Ku</h3>
                        <router-link to="/add-book" class="btn btn-primary"
                            >Add</router-link
                        >
                    </div>
                    <div class="card-body">
                        <table class="table">
                            <thead>
                                <tr>
                                    <td>ID</td>
                                    <td>Name</td>
                                    <td>Creator</td>
                                    <td>Rating</td>
                                    <td>Category</td>
                                    <td>Detail</td>
                                    <td>Action</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="book in books" :key="book.id">
                                    <td>{{ book.id }}</td>
                                    <td>{{ book.name }}</td>
                                    <td>{{ book.creator }}</td>
                                    <td>{{ book.rating }}</td>
                                    <td>{{ book.category }}</td>
                                    <td>{{ book.detail }}</td>
                                    <td>
                                        <div class="btn-group">
                                            <router-link
                                                :to="{
                                                    name: 'edit-book',
                                                    params: { id: book.id },
                                                }"
                                                class="btn btn-success"
                                                >Edit</router-link
                                            >
                                            <button
                                                class="btn btn-danger"
                                                @click="deleteProduct(book.id)"
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            books: [],
        };
    },
    created() {
        this.axios.get("http://localhost:8000/api/books").then((response) => {
            this.books = response.data;
        });
    },
    methods: {
        deleteProduct(id) {
            this.axios
                .delete(`http://localhost:8000/api/books/${id}`)
                .then((response) => {
                    let i = this.books.map((data) => data.id).indexOf(id);
                    this.books.splice(i, 1);
                });
        },
    },
};
</script>
