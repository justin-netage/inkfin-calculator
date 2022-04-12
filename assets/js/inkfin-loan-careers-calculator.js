jQuery(document).ready(function() {
            
    // percentage per month arrays
    //var currentUrl = window.location.href;

    // regex pattern for detecting querystring
    //var pattern = new RegExp(/?.+=.*/g);


        var get_total_amount = function() {

        var month_selection = parseInt(document.getElementById('period').value);
        var current_amount = document.getElementById('slider_js').value;

        var admin_fee = 0;
        var interest = 0;
        var loan_fee = 265 * 1.15;
        var actual_loan_amount = current_amount - (current_amount*0.1);
        var deposit = current_amount - actual_loan_amount;
        var total_amount = 0;
        var averages = [];
        var average = 0;
        var repayment_pm = 0;
        
        if(month_selection == 6) {

            if(current_amount == 2000) {
                loan_fee = 265 * 1.15;
            } else if(current_amount == 2100) {
                loan_fee = 275 * 1.15;
            } else {
                loan_fee = (((current_amount - 2000)*0.1) + 265)*1.15;
            }

            total_amount = parseInt(actual_loan_amount) + loan_fee
    
            for(i = 0; i < 6; i++) {
                if(i == 0) {
                    amount = total_amount + (total_amount * 0.05);
                    averages.push(amount);
                    average += amount;
                } else {
                    amount = averages[i-1] + (averages[i-1] * 0.05);
                    averages.push(amount);
                    average += amount;
                }
            }

            repayment_pm = parseFloat((average / 6) /6) + 69;
            total_amount = parseFloat(repayment_pm) * 6;

        } else if(month_selection == 12) {

            if(current_amount == 2000) {
                loan_fee = 265 * 1.15;
            } else if(current_amount == 2100) {
                loan_fee = 275 * 1.15;
            } else if(current_amount < 9900) {
                loan_fee = (((current_amount - 2000)*0.1) + 265)*1.15;
            } else {
                loan_fee = 1207.5;
            }

            total_amount = parseInt(actual_loan_amount) + loan_fee
            
            for(i = 0; i < 12; i++) {
                if(i == 0) {
                    amount = total_amount + (total_amount * 0.0229);
                    averages.push(amount);
                    average += amount;
                } else {
                    amount = averages[i-1] + (averages[i-1] * 0.0229);
                    averages.push(amount);
                    average += amount;
                }
            }

            repayment_pm = parseFloat((average / 12) /12) + 69;
            total_amount = parseFloat(repayment_pm) * 12;

        } else if(month_selection == 24) {

            if(current_amount == 2000) {
                loan_fee = 265 * 1.15;
            } else if(current_amount == 2100) {
                loan_fee = 275 * 1.15;
            } else if(current_amount < 9900) {
                loan_fee = (((current_amount - 2000)*0.1) + 265)*1.15;
            } else {
                loan_fee = 1207.5;
            }

            total_amount = parseInt(actual_loan_amount) + loan_fee;

            for(i = 0; i < 24; i++) {
                if(i == 0) {
                    amount = total_amount + (total_amount * 0.0229);
                    averages.push(amount);
                    average += amount;
                } else {
                    amount = averages[i-1] + (averages[i-1] * 0.0229);
                    averages.push(amount);
                    average += amount;
                }
            }

            repayment_pm = parseFloat((average / 24) /24) + 69;
            total_amount = parseFloat(repayment_pm) * 24;

        } 
        
        
        return total_amount;

    }

    var get_monthly_payments = function() {
        
        var month_selection = parseFloat(document.getElementById('period').value);
        var capital_loan = get_total_amount();
        var monthly_payments = 0;

        if(month_selection == 6) {
            monthly_payments = capital_loan/6;
        } else if(month_selection == 12) {
            monthly_payments = capital_loan/12;
        } else if(month_selection == 24) {
            monthly_payments = capital_loan/24;
        } else {
            monthly_payments = capital_loan/6;
        }

        jQuery('#depositAmount').html("R" + document.getElementById('slider_js').value * 0.1);
        jQuery('#monthlyPayments').html("R" + monthly_payments.toFixed(2));
        jQuery('#total_repayment').html(capital_loan.toFixed(2));
    }

    var check_selected_button = function()
    {
        var month_selection = parseInt(document.getElementById('period').value);
        var el_six_month = document.getElementById('sixMBtn');
        var el_twelve_month = document.getElementById('twelveMBtn');
        var el_twenty_four_month = document.getElementById('twentyFourMBtn');

        if(month_selection == 6) {

            jQuery("#slider_js").attr("min", 2000);
            jQuery("#slider_js").attr("max", 8000);
            if(jQuery("#slider_js").val() > 8000) {
                jQuery("#slider_js").val(8000).change();
            }
            jQuery("#slider_js").rangeslider('update', true);

            el_six_month.classList.remove('button-outline-primary');
            el_six_month.classList.add('button-primary');
            el_twelve_month.classList.add('button-outline-primary');
            el_twenty_four_month.classList.add('button-outline-primary');

        } else if(month_selection == 12) {
            jQuery("#slider_js").attr("min", 2000);
            jQuery("#slider_js").attr("max", 50000);
            jQuery("#slider_js").rangeslider('update', true);

            el_twelve_month.classList.remove('button-outline-primary');
            el_twelve_month.classList.add('button-primary');
            el_six_month.classList.add('button-outline-primary');
            el_twenty_four_month.classList.add('button-outline-primary');

        } else if(month_selection == 24) {
            jQuery("#slider_js").attr("min", 2000);
            jQuery("#slider_js").attr("max", 50000);
            jQuery("#slider_js").rangeslider('update', true);

            el_twenty_four_month.classList.remove('button-outline-primary');
            el_twenty_four_month.classList.add('button-primary');
            el_six_month.classList.add('button-outline-primary');
            el_twelve_month.classList.add('button-outline-primary');
            
        } 
    }
    // month button functions
    jQuery('#sixMBtn').click(function() {
        document.getElementById('period').value = 6;
        get_monthly_payments();
        check_selected_button();
    });

    jQuery('#twelveMBtn').click(function() {
        document.getElementById('period').value = 12;
        get_monthly_payments();
        check_selected_button();
    });    
    
    jQuery('#twentyFourMBtn').click(function() {
        document.getElementById('period').value = 24;
        get_monthly_payments();
        check_selected_button();
    })
    // Slider
    jQuery('input[type="range"]').rangeslider({
        polyfill: false,

        // Default CSS classes
        rangeClass: 'rangeslider',
        disabledClass: 'rangeslider--disabled',
        horizontalClass: 'rangeslider--horizontal',
        verticalClass: 'rangeslider--vertical',
        fillClass: 'rangeslider__fill',
        handleClass: 'rangeslider__handle',

        // Callback function
        onInit: function() {
            var slider_value = document.getElementById('slider_js').value;
            jQuery('#slide_value').html(slider_value);
            get_monthly_payments();
        },

        // Callback function
        onSlide: function(position, value) {
            jQuery('#slide_value').html(value);
            get_monthly_payments();

        },

        // Callback function
        onSlideEnd: function(position, value) {}
    });
    check_selected_button();



    jQuery("#ReferAFriend_BoxContainerBody").appendTo("body");
            jQuery("#ReferAFriend_Open").appendTo("body");
            
            jQuery("#ReferAFriend_Open").click(function(event) {
                event.preventDefault();
                jQuery("#ReferAFriend_BoxContainerBody").animate({right: "0px"});
                jQuery(this).animate({right: "-112px"});
            });
            
            jQuery("#TellAFriend_BoxClose").click(function(event) {
                event.preventDefault();
                jQuery("#ReferAFriend_BoxContainerBody").animate({right: "-320px"});
                jQuery("#ReferAFriend_Open").animate({right: "0px"});
            });
            
            jQuery("#wrapper").click(function() {
                jQuery("#ReferAFriend_BoxContainerBody").animate({right: "-320px"});
                jQuery("#ReferAFriend_Open").animate({right: "0px"}); 
            });

});

