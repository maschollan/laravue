<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary sticky-top">
            <div class="container">
                <router-link :to="{ name: 'home' }" class="navbar-brand">
                    Laravue
                </router-link>
                <button
                    class="navbar-toggler"
                    data-toggle="collapse"
                    data-target="#navbarCollapse"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <router-link
                                :to="{ name: 'home' }"
                                class="nav-link"
                            >
                                Home
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link
                                :to="{ name: 'book' }"
                                class="nav-link"
                            >
                                Book
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link
                                :to="{ name: 'about' }"
                                class="nav-link"
                            >
                                About
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <div class="container">
            <router-view></router-view>
        </div>

        
    </div>
</template>

<script>
export default {

}
</script>
