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
                        <h3 class="mb-0">Edit Buku</h3>
                        <router-link to="/book" class="btn btn-primary"
                            >Back</router-link
                        >
                    </div>
                    <div class="card-body">
                        <form @submit.prevent="editBooks">
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
                            <button type="submit" class="btn btn-primary">Edit</button>
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
                book: {}
            }
        },
        created() {
            this.axios
                .get(`http://localhost:8000/api/books/${this.$route.params.id}`)
                .then((res) => {
                    this.book = res.data;
                });
        },
        methods: {
            editBooks() {
                this.axios
                    .patch(`http://localhost:8000/api/books/${this.$route.params.id}`, this.book)
                    .then((res) => {
                        this.$router.push({ name: 'book' });
                    });
            }
        }
    }
</script>