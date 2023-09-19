<template>
    <div>
        <!--::header part start::-->
        <header class="main_menu">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-12">
                        <nav class="navbar navbar-expand-lg navbar-light">
                            <a class="navbar-brand" href="/homekasir"> <b><a class="nav-link">Urban Spatula</a></b> </a>
                            <button class="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>

                            <div class="collapse navbar-collapse main-menu-item justify-content-end"
                                id="navbarSupportedContent">
                                <ul class="navbar-nav">
                                    <li class="nav-item">
                                        <a class="nav-link" href="/homekasir">Home</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="/menukasir">Menu</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="/keranjang">Shopping</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="/ongoing">Ongoing</a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
        <!-- Header part end-->
        <!-- breadcrumb start-->
        <section class="breadcrumb breadcrumb_bg">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="breadcrumb_iner text-center">
                            <div class="breadcrumb_iner_item">
                                <h2>Food Menu</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- breadcrumb start-->
        <br>
        <br>
        <br>
        <!--::exclusive_item_part start::-->
        <section class="exclusive_item_part blog_item_section">
            <div class="container">
                <div class="row">
                    <div class="col-xl-5">
                        <div class="section_tittle">
                            <p>Popular Dishes</p>
                            <h2>Our Exclusive Items</h2>
                        </div>
                    </div>
                </div>
                <input type="text" class="form-control mb-4" v-model="carimenu" placeholder="Search menu...">
                <div class="row">
                    <div class="col-sm-6 col-lg-4" v-for="menu in filter_menu" :key="menu.id_menu">
                        <div class="single_blog_item">
                            <div class="single_blog_img">
                                <img src="img/food_item/food_item_1.png" alt="">
                            </div>
                            <div class="single_blog_text">
                                <h3>{{ menu.nama_menu }}</h3>
                                <p>{{ menu.deskripsi }}</p>
                                <h6>
                                    Rp {{ menu.harga }}
                                </h6>
                                <br>
                                <button type="button" class="btn btn-warning" data-bs-toggle="modal"
                                    @click="getdetail(menu)" data-bs-target="#addpesanan">
                                    <i class="bi bi-basket3-fill"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!--::exclusive_item_part end::-->

        <!-- ADD PESANAN -->
        <div class="modal fade" id="addpesanan" tabindex="-1" aria-labelledby="addpesanan" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form @submit.prevent="addtocart">
                            <div class="modal-body">
                                <label for="nama">Nama:</label>
                                <input type="text" class="form-control" v-model="detailmenu.nama_menu">
                                <input type="hidden" v-model="detailmenu.id_menu">

                                <label for="jumlah">Jumlah:</label>
                                <input type="number" class="form-control" v-model="jumlah" required>

                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="submit" class="btn btn-warning">Add to cart</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <!-- END -->

    </div>
</template>
<script>
import axios from 'axios'
import swal from 'sweetalert';


export default {
    data() {
        return {

            menu: {},
            datamenu: {},
            detailmenu: {
                nama_menu: '',
                id_menu: ''
            },
            jumlah: '',
            gambar: '',
            image: '',
            carimenu: ''
        }
    },
    mounted() {
        this.getmenu()
        this.getdetail()
        this.getcart()
    },
    computed: {
        filter_menu() {
            let filter_data = this.datamenu
            if (this.carimenu) {
                filter_data = filter_data.filter(menu => menu.nama.toString().toLowerCase().includes(this.carimenu.toLowerCase()))
            }
            return filter_data
        }
    },
    methods: {

        getmenu() {
            axios.get('http://localhost:8000/api/getMenu')
                .then(
                    ({ data }) => {
                        this.datamenu = data
                    }
                )
        },
        getdetail(menu) {
            axios.get('http://localhost:8000/api/getMenu/' + menu.id_menu)
                .then(
                    (response) => {
                        console.log(response)
                        this.detailmenu.id_menu = response.data[0].id_menu
                        this.detailmenu.nama_menu = response.data[0].nama_menu
                        // this.image = response.data[0].foto
                        this.detailmenu.type = response.data[0].type
                        this.detailmenu.harga = response.data[0].harga
                    }
                )
        },
        addtocart() {
            let datamenu = {
                id_menu: this.detailmenu.id_menu,
                total_pesanan: this.jumlah
            }

            axios.post('http://localhost:8000/api/createtransaksi', datamenu)
                .then(
                    (response) => {
                        console.log(response)
                        swal({
                            icon: 'success',
                            title: 'success',
                            button: true
                        })
                        setTimeout(() => {
                            location.href = '/menukasir'
                        }, 1100);
                    }
                )
        },
        logout() {
            swal({
                icon: 'warning',
                title: 'Log Out?',
                dangerMode: true,
                buttons: true
            }).then(
                (response) => {
                    if (response) {
                        localStorage.removeItem('token')
                        localStorage.removeItem('role')
                        swal({
                            icon: 'success',
                            button: false
                        })
                        setTimeout(() => {
                            location.href = '/'
                        }, 1200);
                    }
                }
            )
        }

    }
}
</script>