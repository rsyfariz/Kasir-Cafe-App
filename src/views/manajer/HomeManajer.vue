<template>
	<div>
		<!--::header part start::-->
		<header class="main_menu home_menu">
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
							<div class="menu_btn">
								<a href="# " @click="logout" class="btn_1 d-none d-sm-block">Logout</a>
							</div>
						</nav>
					</div>
				</div>
			</div>
		</header>
		<!-- Header part end-->
		<!-- banner part start-->
		<section class="banner_part">
			<div class="container">
				<div class="row align-items-center">
					<div class="col-lg-6">
						<div class="banner_text">
							<div class="banner_text_iner">
								<h5>Expensive but the best</h5>
								<h1>We believe good food offer great smile</h1>
								<p>A new restaurant that serves a variety of western food, which might make you addicted.
									The service are excellent and will make you feel comfortable. Special
									flavors and recipes also affect the quality of our food</p>
								<div class="banner_btn">
									<div class="banner_btn_iner">
										<a href="#" class="btn_2">Reservation <img src="img/icon/left_1.svg" alt=""></a>
									</div>
									<a href="https://www.youtube.com/watch?v=pBFQdxA-apI" class="popup-youtube video_popup">
										<span><img src="img/icon/play.svg" alt=""></span> Watch our story</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<!-- banner part start-->

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
				<div class="row">
					<div class="col-sm-6 col-lg-4">
						<div class="single_blog_item">
							<div class="single_blog_img">
								<img src="img/food_item/food_item_1.png" alt="">
							</div>
							<div class="single_blog_text">
								<h3>Indian Burger</h3>
								<p>Was brean shed moveth day yielding tree yielding day were female and </p>
								<a href="#" class="btn_3">Read More <img src="img/icon/left_2.svg" alt=""></a>
							</div>
						</div>
					</div>
					<div class="col-sm-6 col-lg-4">
						<div class="single_blog_item">
							<div class="single_blog_img">
								<img src="img/food_item/food_item_2.png" alt="">
							</div>
							<div class="single_blog_text">
								<h3>Cremy Noodles</h3>
								<p>Was brean shed moveth day yielding tree yielding day were female and </p>
								<a href="#" class="btn_3">Read More <img src="img/icon/left_2.svg" alt=""></a>
							</div>
						</div>
					</div>
					<div class="col-sm-6 col-lg-4">
						<div class="single_blog_item">
							<div class="single_blog_img">
								<img src="img/food_item/food_item_3.png" alt="">
							</div>
							<div class="single_blog_text">
								<h3>Honey Meat</h3>
								<p>Was brean shed moveth day yielding tree yielding day were female and </p>
								<a href="#" class="btn_3">Read More <img src="img/icon/left_2.svg" alt=""></a>
							</div>
						</div>
					</div>
					<div class="col-sm-6 col-lg-4 d-none d-sm-block d-lg-none">
						<div class="single_blog_item">
							<div class="single_blog_img">
								<img src="img/food_item/food_item_1.png" alt="">
							</div>
							<div class="single_blog_text">
								<h3>Cremy Noodles</h3>
								<p>Was brean shed moveth day yielding tree yielding day were female and </p>
								<a href="#" class="btn_3">Read More <img src="img/icon/left_2.svg" alt=""></a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<!--::exclusive_item_part end::-->
		<!-- about part start-->
		<section class="about_part">
			<div class="container-fluid">
				<div class="row align-items-center">
					<div class="col-sm-4 col-lg-5 offset-lg-1">
						<div class="about_img">
							<img src="img/about.png" alt="">
						</div>
					</div>
					<div class="col-sm-8 col-lg-4">
						<div class="about_text">
							<h5>Our History</h5>
							<h2>Where The Food’s As Good
								As The Root Beer.</h2>
							<h4>Satisfying people hunger for simple pleasures</h4>
							<p>May over was. Be signs two. Spirit. Brought said dry own firmament lesser best sixth deep
								abundantly bearing, him, gathering you
								blessed bearing he our position best ticket in month hole deep </p>
							<a href="#" class="btn_3">Read More <img src="img/icon/left_2.svg" alt=""></a>
						</div>
					</div>
				</div>
			</div>
		</section>
		<!-- about part end-->

		<!-- intro_video_bg start-->
		<section class="intro_video_bg">
			<div class="container">
				<div class="row">
					<div class="col-lg-12">
						<div class="intro_video_iner text-center">
							<h2>Expect The Best</h2>
							<div class="intro_video_icon">
								<a id="play-video_1" class="video-play-button popup-youtube"
									href="https://www.youtube.com/watch?v=pBFQdxA-apI">
									<span class="ti-control-play"></span>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<!-- intro_video_bg part start-->

		<!-- food_menu start-->
		<section class="food_menu gray_bg">
			<div class="container">
				<div class="row justify-content-between">
					<div class="col-lg-5">
						<div class="section_tittle">
							<p>Popular Menu</p>
							<h2>Special Food Menu</h2>
						</div>
					</div>
					<div class="col-lg-6">
					</div>
					<div class="col-lg-12">
						<div class="tab-content" id="myTabContent">
							<div class="tab-pane fade show active single-member" id="Special" role="tabpanel"
								aria-labelledby="Special-tab">
								<div class="row">
									<div class="col-sm-6 col-lg-6">
										<div class="single_food_item media">
											<img src="img/food_menu/single_food_1.png" class="mr-3" alt="...">
											<div class="media-body align-self-center">
												<h3>Pork Sandwich</h3>
												<p>They're wherein heaven seed hath nothing</p>
												<h5>Rp 40.000</h5>
											</div>
										</div>
										<div class="single_food_item media">
											<img src="img/food_menu/single_food_2.png" class="mr-3" alt="...">
											<div class="media-body align-self-center">
												<h3>Roasted Marrow</h3>
												<p>They're wherein heaven seed hath nothing</p>
												<h5>Rp 40.000</h5>
											</div>
										</div>
										<div class="single_food_item media">
											<img src="img/food_menu/single_food_3.png" class="mr-3" alt="...">
											<div class="media-body align-self-center">
												<h3>Summer Cooking</h3>
												<p>They're wherein heaven seed hath nothing</p>
												<h5>Rp 60.000</h5>
											</div>
										</div>
									</div>
									<div class="col-sm-6 col-lg-6">
										<div class="single_food_item media">
											<img src="img/food_menu/single_food_4.png" class="mr-3" alt="...">
											<div class="media-body align-self-center">
												<h3>Easter Delight</h3>
												<p>They're wherein heaven seed hath nothing</p>
												<h5>Rp 50.000</h5>
											</div>
										</div>
										<div class="single_food_item media">
											<img src="img/food_menu/single_food_5.png" class="mr-3" alt="...">
											<div class="media-body align-self-center">
												<h3>Tiener Schnitze</h3>
												<p>They're wherein heaven seed hath nothing</p>
												<h5>Rp 45.000</h5>
											</div>
										</div>
										<div class="single_food_item media">
											<img src="img/food_menu/single_food_6.png" class="mr-3" alt="...">
											<div class="media-body align-self-center">
												<h3>Chicken Roast</h3>
												<p>They're wherein heaven seed hath nothing</p>
												<h5>Rp 75.000</h5>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<!-- food_menu part end-->

		<!--::exclusive_item_part start::-->
		<section class="blog_item_section blog_section section_padding">
			<div class="container">
				<div class="row">
					<div class="col-xl-5">
						<div class="section_tittle">
							<p>Recent News</p>
							<h2>Latest From Blog</h2>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-sm-6 col-lg-4">
						<div class="single_blog_item">
							<div class="single_blog_img">
								<img src="img/blog/blog_1.png" alt="">
							</div>
							<div class="single_blog_text">
								<div class="date">
									<a href="#" class="date_item">Apr 06, 2019 </a>
									<a href="#" class="date_item"> <span>#</span> Food News </a>
								</div>
								<h3><a href="blog.html">Adama kind deep gatherin first over fter his great</a></h3>
								<a href="#" class="btn_3">Read More <img src="img/icon/left_1.svg" alt=""></a>
							</div>
						</div>
					</div>
					<div class="col-sm-6 col-lg-4">
						<div class="single_blog_item">
							<div class="single_blog_img">
								<img src="img/blog/blog_2.png" alt="">
							</div>
							<div class="single_blog_text">
								<div class="date">
									<a href="#" class="date_item">Apr 06, 2019 </a>
									<a href="#" class="date_item"> <span>#</span> Food News </a>
								</div>
								<h3><a href="blog.html">Adama kind deep gatherin first over fter his great</a></h3>
								<a href="#" class="btn_3">Read More <img src="img/icon/left_1.svg" alt=""></a>
							</div>
						</div>
					</div>
					<div class="col-sm-6 col-lg-4">
						<div class="single_blog_item">
							<div class="single_blog_img">
								<img src="img/blog/blog_3.png" alt="">
							</div>
							<div class="single_blog_text">
								<div class="date">
									<a href="#" class="date_item">Apr 06, 2019 </a>
									<a href="#" class="date_item"> <span>#</span> Food News </a>
								</div>
								<h3><a href="blog.html">Adama kind deep gatherin first over fter his great</a></h3>
								<a href="#" class="btn_3">Read More <img src="img/icon/left_1.svg" alt=""></a>
							</div>
						</div>
					</div>
					<div class="col-sm-6 col-lg-4 d-none d-sm-block d-lg-none">
						<div class="single_blog_item">
							<div class="single_blog_img">
								<img src="img/blog/blog_1.png" alt="">
							</div>
							<div class="single_blog_text">
								<div class="date">
									<a href="#" class="date_item">Apr 06, 2019 </a>
									<a href="#" class="date_item"> <span>#</span> Food News </a>
								</div>
								<h3><a href="blog.html">Adama kind deep gatherin first over fter his great</a></h3>
								<a href="#" class="btn_3">Read More <img src="img/icon/left_1.svg" alt=""></a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<!--::exclusive_item_part end::-->
		<!-- footer part start-->
		<footer class="footer-area">
			<div class="container">
				<div class="row">
					<div class="col-xl-3 col-sm-6 col-md-3 col-lg-3">
						<div class="single-footer-widget footer_1">
							<h4>About Us</h4>
							<p>Heaven fruitful doesn't over for these theheaven fruitful doe over days
								appear creeping seasons sad behold beari ath of it fly signs bearing
								be one blessed after.</p>
						</div>
					</div>
					<div class="col-xl-3 col-sm-6 col-md-2 col-lg-3">
						<div class="single-footer-widget footer_2">
							<h4>Important Link</h4>
							<div class="contact_info">
								<ul>
									<li><a href="#">WHMCS-bridge</a></li>
									<li><a href="#"> Search Domain</a></li>
									<li><a href="#">My Account</a></li>
									<li><a href="#">Shopping Cart</a></li>
									<li><a href="#"> Our Shop</a></li>
								</ul>
							</div>
						</div>
					</div>
					<div class="col-xl-3 col-sm-6 col-md-3 col-lg-3">
						<div class="single-footer-widget footer_2">
							<h4>Contact us</h4>
							<div class="contact_info">
								<p><span> Address :</span>Hath of it fly signs bear be one blessed after </p>
								<p><span> Phone :</span> +2 36 265 (8060)</p>
								<p><span> Email : </span>info@colorlib.com </p>
							</div>
						</div>
					</div>
					<div class="col-xl-3 col-sm-6 col-md-4 col-lg-3">
						<div class="single-footer-widget footer_3">
							<h4>Newsletter</h4>
							<p>Heaven fruitful doesn't over lesser in days. Appear creeping seas</p>
							<form action="#">
								<div class="form-group">
									<div class="input-group mb-3">
										<input type="text" class="form-control" placeholder='Email Address'
											onfocus="this.placeholder = ''" onblur="this.placeholder = 'Email Address'">
										<div class="input-group-append">
											<button class="btn" type="button"><i class="fas fa-paper-plane"></i></button>
										</div>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
				<div class="copyright_part_text">
					<div class="row">
						<div class="col-lg-8">
							<p class="footer-text m-0">
								<!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
								Copyright 2023 All rights reserved | This template is made with <i class="ti-heart"
									aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
								<!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
							</p>
						</div>
						<div class="col-lg-4">
							<div class="copyright_social_icon text-right">
								<a href="#"><i class="fab fa-facebook-f"></i></a>
								<a href="#"><i class="fab fa-twitter"></i></a>
								<a href="#"><i class="ti-dribbble"></i></a>
								<a href="#"><i class="fab fa-behance"></i></a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
		<!-- footer part end-->


</div>
</template>
<script>
    import swal from 'sweetalert'

    export default{
        data(){   
        },
        mounted(){
        },
        methods:{
            logout() {
                swal({
                    icon: 'warning',
                    title: 'Mau Logout?',
                    dangerMode: true,
                    buttons: true
                }).then(
                    (response) => {
                        if (response) {
                            localStorage.removeItem('role')
                            localStorage.removeItem('token')
                            swal({
                                icon: 'success'
                            })
                            setTimeout(() => {
                                location.href = '/login'
                            }, 1200);
                        }
                    }
                )
            }
        }
    }
</script>