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

        <!-- CART -->
        <section>
            <div class="container">
                <input type="number" class="form-control mb-4" v-model="cari_meja" placeholder="Cari nomor meja..."
                    autocomplete="off">
                <div class="row">
                    <div class="col-sm-6 col-lg-4" v-for="meja in filter_ongoing" :key="meja.id_meja">
                        <div class="single_blog_item">
                            <div class="single_blog_img box wow fadeInUp"  data-bs-toggle="modal" data-bs-target="#finish"
                                @click="handleclick(meja)">
                                <img src="img/meja.jpg" alt="">
                            </div>
                            <br>
                            <div class="single_blog_text box wow fadeInUp" data-bs-toggle="modal" data-bs-target="#finish"
                                @click="handleclick(meja)">
                                <h3>No. {{ meja.nomor_meja }}</h3>
                                <h6>{{ meja.status }}</h6>
                                <br>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- END -->

        <!-- TRANSAKSI  -->
        <div class="modal fade" id="finish" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">SELESAIKAN TRANSAKSI</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form @submit.prevent="selesaitransaksi">
                        <div class="modal-body">
                            <span style="font-family: 'Times New Roman', Times, serif;">ATAS NAMA: <b>{{
                                detail_ongoing.nama_pelanggan }}</b> </span>
                            <br>
                            <span style="font-family: 'Times New Roman', Times, serif;">TOTAL HARGA: <b>{{
                                totalharga }}</b> </span>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="submit" class="btn btn-warning">Check Out</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <!-- END -->
    </div>
</template>
<script>
import axios from 'axios'
import swal from 'sweetalert'

export default {
    data() {
        return {
            ongoing: {},
            totalharga: '',
            detail_ongoing: {},
            cari_meja: ''
        }
    },
    mounted() {
        this.getongoing()
        this.gettotalharga()
    },
    computed: {
        filter_ongoing() {
            let filtered = this.ongoing
            if (this.cari_meja) {
                filtered = filtered.filter(meja => meja.nomor_meja.toString().toLowerCase().includes(this.cari_meja.toLowerCase()))
            }
            return filtered
        }
    },
    methods: {
        getongoing() {
            axios.get('http://localhost:8000/api/getongoing')
                .then(
                    ({ data }) => {
                        console.log(data)
                        this.ongoing = data
                    }
                )
        },
        handleclick(meja) {
            this.getdetailtransaksi(meja)
            this.gettotalharga(meja)
        },
        getdetailtransaksi(meja) {
            axios.get('http://localhost:8000/api/get_ongoing_transaksi/' + meja.id_meja)
                .then(
                    ({ data }) => {
                        console.log(data)
                        this.detail_ongoing = data
                    }
                )
        },
        gettotalharga(meja) {
            axios.get('http://localhost:8000/api/gettotalharga/' + meja.id_meja)
                .then(
                    ({ data }) => {
                        console.log(data)
                        this.totalharga = data
                    }
                )
        },
        selesaitransaksi() {
            swal({
                icon: 'warning',
                title: 'Complete the transaction?',
                dangerMode: true,
                buttons: true
            }).then(
                (response) => {
                    if (response) {
                        axios.put('http://localhost:8000/api/transaksi_done/' + this.detail_ongoing.id_meja, this.detail_ongoing.id_meja)
                            .then(
                                (response) => {
                                    console.log(response)
                                    swal({
                                        icon: 'success',
                                        title: 'Success'
                                    })
                                    setTimeout(() => {
                                        location.href = '/print/' + this.detail_ongoing.id_keranjang
                                    }, 1200);
                                }
                            )
                            .catch(
                                (error) => {
                                    console.log(error)
                                    swal({
                                        title: 'Failed',
                                        icon: 'error'
                                    })
                                }
                            )
                    }
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