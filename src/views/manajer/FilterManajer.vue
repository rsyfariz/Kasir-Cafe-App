<template>
    <div>
        <!--::header part start::-->
        <header class="main_menu">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-12">
                        <nav class="navbar navbar-expand-lg navbar-light">
                            <a class="navbar-brand" href="/homemanajer"> <b><a class="nav-link">Urban Spatula</a></b> </a>
                            <button class="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>

                            <div class="collapse navbar-collapse main-menu-item justify-content-end"
                                id="navbarSupportedContent">
                                <ul class="navbar-nav">
                                    <li class="nav-item">
                                        <a class="nav-link" href="/homemanajer">Home</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="/filter">Filter</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="/profit">Profit</a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
        <!-- Header part end-->
        <br>
        <br>
        <!-- START -->
        <section>
            <div class="container">
                <div class="row">
                    <div class="col-xl-5">
                        <div class="section_tittle">
                            <h2>Transaction</h2>
                        </div>
                    </div>
                </div>
                <div class="row mt-2">
                    <div class="col">
                        <input type="text" class="form-control" v-model="cari_kasir" autocomplete="off"
                            placeholder="Cari nama kasir...">
                    </div>
                    <div class="col">
                        <input type="date" class="form-control" v-model="tgl_pesan" placeholder="Cari tanggal transaksi...">
                    </div>
                </div>

                <div class="card mt-4" v-for="t in filterdata" :key="t.id_history">
                    <div class="card-header">
                        Transaksi pada tanggal {{ t.tgl_pesan }}
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Pelanggan atas nama {{ t.nama_pelanggan }}</h5>
                        <p class="card-text">Di layani oleh kasir {{ t.nama_user }}</p>
                        <a href="#" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#detail"
                            @click="getfunction(t)">See detail</a>
                    </div>
                </div>
            </div>
        </section>
        <!-- END -->
        <!-- DETAIL -->
        <div class="modal fade" id="detail" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Detail</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <table class="table table-hover table-striped">
                            <thead>
                                <tr style="background-color: #191825;" class="text-light">
                                    <th>No</th>
                                    <th>Menu</th>
                                    <th>Jumlah</th>
                                    <th>Harga</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(t, nomor) in detail" :key="nomor">
                                    <td>{{ nomor + 1 }}</td>
                                    <td>{{ t.nama_menu }}</td>
                                    <td>{{ t.total_pesanan }}</td>
                                    <td>{{ t.total_harga }}</td>
                                </tr>
                            </tbody>
                        </table>
                        <p>Total Harga: <b>{{ total }}</b></p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- END -->
    </div>
</template>
<script>
import axios from 'axios';
import swal from 'sweetalert'


export default {
    data() {
        return {
            cari_kasir: '',
            tgl_pesan: '',
            datatransaksi: {},
            detail: {},
            total: '',
            role: ''
        }
    },
    mounted() {
        this.gethistory()
        this.role = localStorage.getItem('role')
    },
    computed: {
        filterdata() {
            let filterdata = this.datatransaksi
            if (this.cari_kasir) {
                filterdata = filterdata.filter(t => t.nama_user.toLowerCase().toString().includes(this.cari_kasir.toLowerCase()))
            }
            if (this.tgl_pesan) {
                filterdata = filterdata.filter(t => t.tgl_pesan.includes(this.tgl_pesan))
            }

            if (!this.cari_kasir && !this.tgl_pesan) {
                filterdata = false
            }
            return filterdata
        }
    },
    methods: {
        getfunction(history) {
            this.gettotal(history)
            this.getdetail(history)
        },
        gettotal(history) {
            axios.get('http://localhost:8000/api/gettotal/' + history.id_keranjang)
                .then(
                    ({ data }) => {
                        console.log(data)
                        this.total = data
                    }
                )
        },
        getdetail(history) {
            axios.get('http://localhost:8000/api/gethistory/' + history.id_keranjang)
                .then(
                    ({ data }) => {
                        console.log(data)
                        this.detail = data
                    }
                )
        },
        gethistory() {
            axios.get('http://localhost:8000/api/gethistory')
                .then(
                    ({ data }) => {
                        console.log(data)
                        this.datatransaksi = data
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