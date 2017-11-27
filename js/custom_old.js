require(['jquery', 'Magento_Ui/js/modal/modal', 'owl_carousel'], function (jquery, modal, owl) {
    jquery(document).ready(function () {
        //alert('custom welcome');

        jquery('.owl-carousel').owlCarousel({
            loop:false,
            margin:10,
            nav:true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:1
                }
            }
        });
		
		/* Ask For Price */
		var options = {
            type: 'popup',
            responsive: true,
            innerScroll: true,
            modalClass: 'get-price-modal'
        };

        jQuery(".btn-ask-for-price").on('click', function () {
            jQuery("#popup-mpdal").modal(options).modal("openModal");
            var sku = jQuery(this).attr('data-sku');
            var input = '<input type="hidden" name="sku" value="'+sku+'" />';
            jQuery("form#quickrfq_form").append(input);
        });
    });
});