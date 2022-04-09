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
                        <h3 class="mb-0">Add Buku</h3>
                        <router-link to="/book" class="btn btn-primary"
                            >Back</router-link
                        >
                    </div>
                    <div class="card-body">
                        <form @submit.prevent="addBooks">
                            <b-form-group label="Name" label-for="name-input">
                                <b-form-input
                                    id="name-input"
                                    v-model="book.name"
                                ></b-form-input>
                            </b-form-group>

                            <b-form-group label="Creator" label-for="creator-input">
                                <b-form-input
                                    id="creator-input"
                                    v-model="book.creator"
                                ></b-form-input>
                            </b-form-group>

                            <b-form-group label="Rating" label-for="rating-input">
                                <b-form-input
                                    id="rating-input"
                                    v-model="book.rating"
                                ></b-form-input>
                            </b-form-group>

                            <b-form-group label="Category" label-for="category-input">
                                <b-form-input
                                    id="category-input"
                                    v-model="book.category"
                                ></b-form-input>
                            </b-form-group>

                            <b-form-group label="Detail" label-for="detail-input">
                                <b-form-input
                                    id="detail-input"
                                    v-model="book.detail"
                                ></b-form-input>
                            </b-form-group>
                            <button type="submit" class="btn btn-primary">Add</button>
                        </form>
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
            book: {},
        };
    },
    methods: {
        addBooks() {
            this.axios
                .post("http://localhost:8000/api/books", this.book)
                .then((response) => this.$router.push({ name: "book" }))
                .catch((err) => console.log(err))
                .finally(() => (this.loading = false));
        },
    },
};
</script>
