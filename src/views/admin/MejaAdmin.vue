<template>
    <div>
        <!--::header part start::-->
        <header class="main_menu">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-12">
                        <nav class="navbar navbar-expand-lg navbar-light">
                            <a class="navbar-brand" href="/homeadmin"> <b><a class="nav-link">Urban Spatula</a></b> </a>
                            <button class="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>

                            <div class="collapse navbar-collapse main-menu-item justify-content-end"
                                id="navbarSupportedContent">
                                <ul class="navbar-nav">
									<li class="nav-item">
										<a class="nav-link" href="/homeadmin">Home</a>
									</li>
									<li class="nav-item">
										<a class="nav-link" href="/mejaadmin">Table</a>
									</li>
									<li class="nav-item">
										<a class="nav-link" href="/menuadmin">Menu</a>
									</li>
									<li class="nav-item">
										<a class="nav-link" href="/useradmin">User</a>
									</li>
								</ul>
                            </div>
                            <div class="menu_btn">
                                <button type="button" class="single_page_btn d-none d-sm-block" data-bs-toggle="modal"
                                    data-bs-target="#addmeja">
                                    Add table
                                </button>

                                <!-- ADD MEJA-->
                                <div class="modal fade" id="addmeja" tabindex="-1" aria-labelledby="exampleModalLabel"
                                    aria-hidden="true">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="exampleModalLabel">Add Table</h5>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                    aria-label="Close"></button>
                                            </div>
                                            <form @submit.prevent="addmeja">
                                                <div class="modal-body">

                                                    <label for="nomor_meja">Number:</label>
                                                    <input type="number" class="form-control" v-model="datameja.nomor_meja"
                                                        required autocomplete="off" placeholder="masukkan nomor...">
                                                    <br>
                                                    <label for="status">Status: </label>
                                                    <select class="form-control" v-model="datameja.status" id="status"
                                                        required>
                                                        <option value="digunakan">Digunakan</option>
                                                        <option value="kosong">Kosong</option>
                                                    </select>
                                                    <br>
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-secondary"
                                                        data-bs-dismiss="modal">Close</button>
                                                    <button type="submit" class="btn btn-warning">Upload</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <!-- END -->
                                <!-- EDIT MEJA-->
                                <div class="modal fade" id="editmeja" tabindex="-1" aria-labelledby="exampleModalLabel"
                                    aria-hidden="true">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="exampleModalLabel">Table Edit</h5>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                    aria-label="Close"></button>
                                            </div>
                                            <form @submit.prevent="saveedit">
                                                <div class="modal-body">

                                                    <label for="nomor_meja">Number:</label>
                                                    <input type="number" class="form-control"
                                                        v-model="detailmeja.nomor_meja" required autocomplete="off"
                                                        placeholder="masukkan nomor...">
                                                    <br>
                                                    <label for="status">Status: </label>
                                                    <select class="form-control" v-model="detailmeja.status" id="status"
                                                        required>
                                                        <option value="digunakan">Digunakan</option>
                                                        <option value="kosong">Kosong</option>
                                                    </select>
                                                    <br>
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-secondary"
                                                        data-bs-dismiss="modal">Close</button>
                                                    <button type="submit" class="btn btn-warning">Save changes</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <!-- EDIT MEJA -->
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
        <!-- Header part end-->

        <!-- TABEL -->
        <table class="table table-hover table-striped">
            <thead>
                <tr style="background-color: #191825;" class="text-light">
                    <th>No</th>
                    <th>Table Number</th>
                    <th>Status</th>
                    <th>Update</th>
                    <th>Remove</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(meja, nomor) in meja" :key="nomor">
                    <td>{{ nomor + 1 }}</td>
                    <td>{{ meja.nomor_meja }}</td>
                    <td>{{ meja.status }}</td>
                    <td>
                        <button type="button" class="btn btn-warning" @click="getdetail(meja)" data-bs-toggle="modal"
                            data-bs-target="#editmeja">
                            Update
                        </button>
                    </td>
                    <td><button class="btn btn-danger" @click="hapus(meja)">Remove</button></td>
                </tr>
            </tbody>
        </table>
        <!-- END -->
    </div>
</template>
<script>
import axios from 'axios'
import swal from 'sweetalert'

export default {

    // Tambah Data
    data() {
        return {
            meja: {},
            datameja: {
                nomor_meja: '',
                status: '',
            },
            detailmeja: {
                nomor_meja: '',
                status: '',
                id_meja: ''
            }
        }
    },
    mounted() {
        this.getmeja()
    },
    methods: {
        getmeja() {
            axios.get('http://localhost:8000/api/getMeja')
                .then(
                    ({ data }) => {
                        this.meja = data
                    }
                )
        },
        getdetail(meja) {
            axios.get('http://localhost:8000/api/getMeja/' + meja.id_meja)
                .then(
                    (response) => {
                        console.log(response)
                        this.detailmeja.id_meja = response.data[0].id_meja
                        this.detailmeja.nomor_meja = response.data[0].nomor_meja
                        this.detailmeja.id_meja = response.data[0].id_meja
                        this.detailmeja.status = response.data[0].status

                    }
                )
        },
        addmeja() {
            let form = new FormData
            form.append('nomor_meja', this.datameja.nomor_meja)
            form.append('status', this.datameja.status)

            axios.post('http://localhost:8000/api/createMeja', form)
                .then(
                    (response) => {
                        console.log(response)
                        swal({
                            icon: 'success',
                            title: 'Success'
                        })
                        setTimeout(() => {
                            location.reload()
                        }, 1200);
                    }
                )
                .catch(
                    (err) => {
                        console.log(err)
                        swal({
                            icon: 'error',
                            title: 'Failed Upload Table',
                            button: true
                        })
                    }
                )
        },
        saveedit() {
            axios.put('http://localhost:8000/api/updateMeja/' + this.detailmeja.id_meja, this.detailmeja)
                .then(
                    (response) => {
                        console.log(response)
                        swal({
                            title: 'Success Update Meja',
                            icon: 'success'
                        })
                        setTimeout(() => {
                            location.reload()
                        }, 1200);
                    }
                )
                .catch(
                    (error) => {
                        console.log(error)
                        swal({
                            title: 'Failed Update Meja',
                            icon: 'success'
                        })
                    }
                )
        },

        // Hapus Data

        hapus(meja) {
            swal({
                title: "Mau hapus data ini?",
                text: "Kalo hilang gimana?",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
                .then((willDelete) => {
                    if (willDelete) {

                        var url = 'http://localhost:8000/api/deleteMeja/' + meja.id_meja;
                        axios.delete(url);

                        swal("Hore! Anda berhasil menghapus data ini", {
                            icon: "success",
                        });
                        setTimeout(() => {
                            window.location.reload()
                        }, 1200);
                    } else {
                        swal("Yakin gajadi ngehapus data ini?");
                    }
                });
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