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
                                    data-bs-target="#adduser">
                                    Add User
                                </button>
                                <!-- ADD USER -->
                                <div class="modal fade" id="adduser" tabindex="-1" aria-labelledby="exampleModalLabel"
                                    aria-hidden="true">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="exampleModalLabel">Add User</h5>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                    aria-label="Close"></button>
                                            </div>
                                            <form @submit.prevent="upload">
                                                <div class="modal-body">

                                                    <label for="nama_user">Name:</label>
                                                    <input type="text" class="form-control" v-model="datauser.nama_user"
                                                        required autocomplete="off" placeholder="masukkan nama...">
                                                    <br>
                                                    <label for="username">Username:</label>
                                                    <input type="text" class="form-control" v-model="datauser.username"
                                                        required placeholder="masukkan username...">
                                                    <br>
                                                    <label for="role">Role: </label>
                                                    <select class="form-control" v-model="datauser.role" id="role" required>
                                                        <option value="admin">Admin</option>
                                                        <option value="manajer">Manager</option>
                                                        <option value="kasir">Kasir</option>
                                                    </select>
                                                    <br>
                                                    <label for="password">Password:</label>
                                                    <input type="password" class="form-control" v-model="datauser.password"
                                                        required placeholder="masukkan password...">
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
                                <!-- EDIT USER -->
                                <div class="modal fade" id="edituser" tabindex="-1" aria-labelledby="exampleModalLabel"
                                    aria-hidden="true">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="exampleModalLabel">User Edit</h5>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                    aria-label="Close"></button>
                                            </div>
                                            <form @submit.prevent="saveedit">
                                                <div class="modal-body">

                                                    <label for="nama_user">Name:</label>
                                                    <input type="text" class="form-control" v-model="detailuser.nama_user"
                                                        required autocomplete="off" placeholder="masukkan nama...">
                                                    <br>
                                                    <label for="username">Username:</label>
                                                    <input type="text" class="form-control" v-model="detailuser.username"
                                                        required autocomplete="off" placeholder="masukkan username...">
                                                    <br>
                                                    <label for="role">Role: </label>
                                                    <select class="form-control" v-model="detailuser.role" id="role"
                                                        required>
                                                        <option value="admin">Admin</option>
                                                        <option value="kasir">Kasir</option>
                                                        <option value="manajer">Manajer</option>
                                                    </select>
                                                    <br>
                                                    <label for="password">Password:</label>
                                                    <input type="password" class="form-control" v-model="detailuser.password"
                                                        required autocomplete="off" placeholder="masukkan password...">
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
                                <!-- END -->
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
                        <th>Nama</th>
                        <th>Username</th>
                        <th>Role</th>
                        <!-- <th>Password</th> -->
                        <th>Edit</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(user, nomor) in user" :key="nomor">
                        <td>{{ nomor + 1 }}</td>
                        <td>{{ user.nama_user }}</td>
                        <td>{{ user.username }}</td>
                        <td>{{ user.role }}</td>
                        <!-- <td>{{ user.password }}</td> -->
                        <td><button type="button" class="btn btn-warning" @click="getdetail(user)" data-bs-toggle="modal"
                                data-bs-target="#edituser">
                                Edit
                            </button></td>
                        <td><button class="btn btn-danger" @click="hapus(user)">Remove</button></td>
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
            user: {},
            datauser: {
                nama_user: '',
                username: '',
                role: '',
                password: '',
            },
            detailuser: {
                nama_user: '',
                username: '',
                role: '',
                password: '',
                id_user: ''
            }
        }
    },
    mounted() {
        this.getuser()
    },
    methods: {
        getuser() {
            axios.get('http://localhost:8000/api/getUser')
                .then(
                    ({ data }) => {
                        this.user = data
                    }
                )
        },
        getdetail(user) {
            axios.get('http://localhost:8000/api/getUser/' + user.id_user)
                .then(
                    (response) => {
                        console.log(response)
                        this.detailuser.id_user = response.data[0].id_user
                        this.detailuser.nama_user = response.data[0].nama_user
                        this.detailuser.username = response.data[0].username
                        this.detailuser.role = response.data[0].role
                        this.detailuser.password = response.data[0].password

                    }
                )
        },
        upload() {
            let form = new FormData
            form.append('nama_user', this.datauser.nama_user)
            form.append('username', this.datauser.username)
            form.append('role', this.datauser.role)
            form.append('password', this.datauser.password)

            axios.post('http://localhost:8000/api/createUser', form)
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
                            title: 'Failed Upload User',
                            button: true
                        })
                    }
                )
        },
        saveedit() {
            axios.put('http://localhost:8000/api/updateUser/' + this.detailuser.id_user, this.detailuser)
                .then(
                    (response) => {
                        console.log(response)
                        swal({
                            title: 'Success Update User',
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
                            title: 'Failed Update User',
                            icon: 'success'
                        })
                    }
                )
        },

        // Hapus Data

        hapus(user) {
            swal({
                title: "Mau hapus data ini?",
                text: "Kalo hilang gimana?",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
                .then((willDelete) => {
                    if (willDelete) {

                        var url = 'http://localhost:8000/api/deleteUser/' + user.id_user;
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
        logout(){
            swal({
                icon: 'warning',
                title: 'Log Out?',
                dangerMode: true,
                buttons: true
            }).then(
                (response) => {
                    if(response){
                        localStorage.removeItem('token')
                        localStorage.removeItem('role')
                        swal({
                            icon: 'success',
                            button: false
                        })
                        setTimeout(() => {
                            location.href= '/'
                        }, 1200);
                    }
                }
            )
}

    }
}

</script>