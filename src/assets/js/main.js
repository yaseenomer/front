// /*global $, document */
//
// $(document).ready(function () {
//
//     // USE STRICT
//
//     'use strict';
//
//
//     // GRID - VIEW
//
//     $('.search-content .sort i').on('click', function () {
//
//         $(this).addClass('active').siblings().removeClass('active');
//
//         $('.row').removeClass('list-view grid-view').addClass($(this).data('class'));
//
//         console.log($(this).data('class'));
//     });
//
//     // NAV PHONE
//
//     $('.nav-phone i').click(function () {
//
//         $('.nav-phone .ul-phone').toggleClass('is-visible');
//
//         if ($('.nav-phone .ul-phone').hasClass('is-visible')) {
//
//             $('.nav-phone .ul-phone').slideDown(400);
//
//         } else {
//
//             $('.nav-phone .ul-phone').slideUp(400);
//         }
//     });
//
//     // TOGGLE CLASS ACTIVE
//
//     $('.tab-content .message-deatils .message-info').click(function () {
//
//         $(this).addClass('active').siblings().removeClass('active');
//     });
//
//     $('.tab-content .favorite .pagination ul li').click(function () {
//
//         $(this).addClass('active').siblings().removeClass('active');
//     });
//
//     $('.tab-content .queotion .parent-queotion .queotion').click(function () {
//
//         $(this).addClass('active').siblings().removeClass('active');
//     });
//
//
//     // TRIGGER NICE SCROLL
//
//     $(".tab-content .parent-box , .tab-content .message-deatils ").niceScroll({
//         cursorcolor: "#424242",
//         background: "#cccccc",
//         cursorwidth: "10px",
//         autohidemode: false,
//         cursorborder: "none",
//         scrollspeed: 40
//
//     });
//
//     $('#scroll').niceScroll({
//         cursorcolor: "#424242",
//         background: "#cccccc",
//         cursorwidth: "10px",
//         autohidemode: false,
//         cursorborder: "none",
//         scrollspeed: 40
//
//     });
//
//     $("html").niceScroll({
//         cursorcolor: "#b7b7b7",
//         background: "#efefef",
//         cursorborderradius: 0,
//         cursorwidth: "15",
//         autohidemode: false,
//         cursorborder: "none",
//
//     });
//
//     // TRIGGER SLIDER ONE
//
//     $(".slider .owl-carousel").owlCarousel({
//         items: 1,
//         loop: true,
//         autoplay: false,
//         autoplayTimeout: 6000,
//         animateOut: 'slideOutDown'
//     });
//
//     $(".slider2 .owl-carousel").owlCarousel({
//         items: 6,
//         loop: true,
//         autoplay: true,
//         autoplayTimeout: 800
//     });
//
//
//     // GALLARY
//
//
//     $('.test-popup-link').magnificPopup({
//         type: 'image',
//         gallery: {
//             enabled: true
//         }
//     });
//
//
//     // MODAL EDIT COMPANY PROFILE
//
//     $('.modal-edit .box-company .images-brand div > i, .modal-edit .comapny-button div i ').click(function () {
//
//         $(this).parent().remove();
//     });
//
//
//     // TRIGGER SWEET ALERT
//
//     $('.success').click(function () {
//
//         swal({
//             title: "Thank You!",
//             text: "Your review will be posted after moderation.",
//             icon: 'success',
//             className: "green-bg",
//             buttons: {
//                 cancel: false,
//                 confirm: 'Okay',
//             },
//         });
//     });
//
//
//
//     //UPLOAD IMAGE
//
//     var readURL = function (input) {
//         if (input.files && input.files[0]) {
//             var reader = new FileReader();
//
//             reader.onload = function (e) {
//                 $('.profile-pic').attr('src', e.target.result);
//             }
//
//             reader.readAsDataURL(input.files[0]);
//         }
//     }
//
//     $(".file-upload").on('change', function () {
//         readURL(this);
//     });
//
//     $(".upload-button").on('click', function () {
//         $(".file-upload").click();
//     });
//
//
//     // ===================================================================
//
//     $(".imgAdd").click(function () {
//         $(this).closest(".row").find('.Add').before('<div class="imgUp"><div class="imagePreview"></div><label class="fas fa-plus-circle"><input type="file" class="uploadFile img" value="Upload Photo" style="width:0px;height:0px;overflow:hidden;"></label><i class="far fa-times-circle del"></i></div>');
//     });
//     $(document).on("click", "i.del", function () {
//         $(this).parent().remove();
//     });
//     $(function () {
//         $(document).on("change", ".uploadFile", function () {
//             var uploadFile = $(this);
//             var files = !!this.files ? this.files : [];
//             if (!files.length || !window.FileReader) return;
//
//             if (/^image/.test(files[0].type)) {
//                 var reader = new FileReader();
//                 reader.readAsDataURL(files[0]);
//
//                 reader.onloadend = function () {
//
//                     uploadFile.closest(".imgUp").find('.imagePreview').css("background-image", "url(" + this.result + ")");
//                 }
//             }
//
//         });
//     });
//
// });
