import React, {Component} from 'react';

import flag from '../../images/icons/16.png';
import  './Toggle'


import $ from 'jquery';
import  'react-bootstrap';

class Footer extends Component {
       
             componentDidMount(){
    if ($(window).width() <= 768){	
		$('.footer-links-wrapper').addClass("someClass");
	}else{
		$('.footer-links-wrapper').removeClass("someClass");
	}
	$(window).on('resize', function(event){
		if ($(window).width() <= 768){	
			$('.footer-links-wrapper').addClass("someClass");
		}else{
			$('.footer-links-wrapper').removeClass("someClass");
			$('.footer-links-wrapper ul').show();
		}	
	});
	// Footer collapse functionality 
	$(document).on("click", ".someClass h3", function(){
		$(this).next('ul').slideToggle();
		$(this).toggleClass("expanded");
	});
	// Search bar 
	$('.search-link').click(function(event){
		event.preventDefault();
		$(".navbar-collapse.collapse").removeClass("show");
		$(".searchbox").slideToggle();
	});



 }
	render(){
		return (
			<footer className="footer-wrapper">
				<div className="container"> 
					<div className="row">
						<div className="upper-text-container">
							1. Trade In: Trade‑in values vary. iPhone 11 and iPhone 11 Pro promotional pricing is 
							after trade‑in of iPhone 8 Plus and iPhone X in good condition. Additional trade‑in values
							 require purchase of a new iPhone, subject to availability and limits. Must be at least 18. 
							 Apple or its trade-in partners reserve the right to refuse or limit any Trade In transaction 
							 for any reason. In‑store trade‑in requires presentation of a valid, government-issued photo ID 
							 (local law may require saving this information). Sales tax may be assessed on full value of new
							  iPhone. Additional terms from Apple or Apple’s trade-in partners may apply. Monthly pricing: 
							  Available to qualified customers and requires 0% APR, 24‑month installment loan with Citizens One, 
							  and iPhone activation with AT&T, Sprint, T‑Mobile, or Verizon. <a href="#"> Full terms apply</a>.
						</div>			
					</div>

			    <div className="row footer-links-wrapper">
			    	<div className="col col-12 col-sm-6 col-m-4 col-lg-2 offset1">
							<h3>Shop and Learn</h3>
							<ul>
							<li><a href="https://www.apple.com/mac/">Mac</a></li>
                            <li><a href="https://www.apple.com/iPad/">iPad</a></li>
                            <li><a href="https://www.apple.com/ipad/">iphone</a></li>
                            <li><a href="https://www.apple.com/Watch/">Watch</a></li>
                            <li><a href="https://www.apple.com/tvmac/">tvMac</a></li>
                            <li><a href="https://www.apple.com/music/">Music</a></li>
                            <li><a href="https://www.apple.com/AirPods/">AirPods</a></li>
                            <li> <a href="https://www.apple.com/HomePod/">HomePod</a></li>
                            <li><a href="https://www.apple.com/ipadtouch/">ipod touch</a></li>
                            <li><a href="https://www.apple.com/Accessories/">Accessories</a></li>
                            <li> <a href="https://www.apple.com/Giftcards/"> Gift Cards</a> </li>
							</ul>    		
			    	</div>
			    	<div className="col col-12 col-sm-6 col-m-4 col-lg-2">
							<h3>Services</h3>
							<ul>
							<li><a href="https://www.apple.com/Apple-music/">Apple Music</a></li>
                            <li> <a href="https://www.apple.com/Apple-News/">Apple News+</a></li>
                            <li><a href="https://www.apple.com/Apple-tv-plus/">Apple TV+</a></li>
                            <li><a href="https://www.apple.com/Apple-Arcade/">Apple Arcade</a></li>
                            <li><a href="https://www.apple.com/Apple-Card/">Apple Card</a></li>
                            <li><a href="https://www.apple.com/iCloud/">iCloud</a></li>
                            <li><a href="https://www.apple.com/Apple-Books/">Apple Books</a> </li>
							</ul>
							<h3>Account</h3>
							<ul>
							<li><a href="https://www.apple.com/us">Manage Your Apple ID</a></li>
                            <li><a href="htts://www.apple.com/us/shop/goto/account">Apple Store Account</a></li>
                            <li><a href="https://www.iCloud.com">iCloud.com</a></li>
                        </ul>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-4 col-lg-2">
                        <h3>Apple Store</h3>
                        <ul>
                            <li><a href="https://www.apple.com/retail/">Find a Stor</a></li>
                            <li><a href="https://www.apple.com/us/shop/goto/shop">Shop Online</a></li>
                            <li> <a href="https://www.apple.com/retail/geniusbar">Genius Bar</a></li>
                            <li><a href="https://www.apple.com/today">Today at Apple</a></li>
                            <li> <a href="https://www.apple.com/today/camp">Apple Camp</a></li>
                            <li><a href="https://www.apple.com/retzil/fieldtrip">Field Trip</a></li>
                            <li><a href="https://www.apple.com/app/apple-store/id375380948pt=2003&ct=footer&mt=8">AppleStore
                                    App</a></li>
                            <li><a href="https://www.apple.com/us/shop/goto/special_d...">Refurbished and Clearance</a>
                            </li>
                            <li><a href="https://www.apple.com/us/shop/goto/payment_plan">Financing</a></li>
                            <li><a href="https://www.apple.com/us/shop/goto/trade-in">Apple Trade In</a></li>
                            <li><a href="https://www.apple.com/us/shop/goto/order/list"> Order Status</a></li>
                            <li><a href="https://www.apple.com/us/shop/goto/help"> Shopping Help</a></li>
                        </ul>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-4 col-lg-2">
                        <h3>For Business</h3>
                        <ul>
                            <li><a href="https://www.apple.com/us/business/"> Apple and Business</a></li>
                            <li><a href="https://www.apple.com/retail/business">Shop For Business</a></li>
                        </ul>
                        <h3>For Education</h3>
                        <ul>
                            <li><a href="https://www.apple.com/education"> Apple and Education</a></li>
                            <li><a href="https://www.apple.com/education/k12/how-to-buy/">Shop For K-12</a></li>
                            <li><a href="https://www.apple.com/us/shop/goto/educationrouting">Shop For College</a></li>
                        </ul>
                        <h3>For Healthcare</h3>
                        <ul>
                            <li><a href="https://www.apple.com/healthcare"> Apple in Healthcare</a></li>
                            <li><a href="https://www.apple.com/healthcare/applewatch"> Health on Apple Watch</a></li>
                            <li><a href="https://www.apple.com/healthcare/records"> Health Records on iphone</a></li>
                        </ul>
                        <h3>For Government</h3>
                        <ul>
                            <li><a href="https://www.apple.com/r/store/government/"> Shop For Government</a></li>
                            <li><a href="https://www.apple.com/us/shop/goto/eppstore/veteransandmilitary"> Shop For
                                    Veterans
                                    and Military</a></li>
                        </ul>
                    </div>

                    <div className="col col-12 col-sm-6 col-md-4 col-lg-2">
                        <h3>Apple Values</h3>
                        <ul>
                            <li><a href="https://www.apple.com/accessibillity/"> Accessibillity</a></li>
                            <li><a href="https://www.apple.com/education/connectedED/"> Education</a></li>
                            <li> <a href="https://www.apple.com/environment/"> Environment</a></li>
                            <li><a href="https://www.apple.com/diversity/"> Inclusion and Diversity</a></li>
                            <li><a href="https://www.apple.com/privacy/"> Privacy</a></li>
                            <li> <a href="https://www.apple.com/supplier-responsibility/"> supplier Responsibility</a>
                            </li>
                        </ul>
                        <h3>About Apple</h3>
                        <ul>
                            <li><a href="https://www.apple.com/us">Newsroom</a></li>
                            <li> <a href="https://www.apple.com/us"> Apple Leadership</a></li>
                            <li> <a href="https://www.apple.com/us"> Job Opportunities</a></li>
                            <li> <a href="https://www.apple.com/us"> investors</a></li>
                            <li><a href="https://www.apple.com/us">Events</a></li>
                            <li> <a href="https://www.apple.com/us">Contact Apple</a> </li>
                        </ul>
                    </div>
                </div>
                <div className="my-apple-wrapper">
                    More ways to shop: <a href="#">Find an Apple Store</a> or <a href="#">other retailer</a> near you.
                    Or call 1-800-MY-APPLE.
                </div>
                <div className="copyright-wrapper">
                    <div className="copyright">
                        Copyright © 2019 Apple Inc. All rights reserved.
                    </div>
                    <div className="footer-links-terms">
                        <ul>
                            <li><a href="file:///C:/Users/metik/Desktop/Rebulding%20Apple%20web/index.html#">Privacy
                                    Policy</a></li>
                            <li><a href="file:///C:/Users/metik/Desktop/Rebulding%20Apple%20web/index.html#">Terms of
                                    Use</a></li>
                            <li><a href="file:///C:/Users/metik/Desktop/Rebulding%20Apple%20web/index.html#">Sales and
                                    Refunds</a></li>
                            <li><a href="file:///C:/Users/metik/Desktop/Rebulding%20Apple%20web/index.html#">Legal</a>
                            </li>
                            <li><a href="file:///C:/Users/metik/Desktop/Rebulding%20Apple%20web/index.html#">Site
                                    Map</a></li>
                        </ul>
                    </div>
                    <div className="footer-country">
                    <div className="flag-wrapper">
                         <img src={flag}/>
                    </div>

                        <div className="footer-country-name">United States</div>
                    </div>
                </div>
            </div>
        
			</footer> 
		)		
	}

}
export default Footer;