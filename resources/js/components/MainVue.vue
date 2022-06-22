<template>
    <div>
        <div class="nav">
            <router-link to="books/list">List</router-link>
            <router-link to="books/show">Show</router-link>
        </div>
        <div class="container">
            <router-view></router-view>
        </div>

    </div>
</template>
<script>
export default {

}
</script>