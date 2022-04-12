jQuery(document).ready(function() {
    // percentage per month arrays

        var get_total_amount = function() {
            jQuery('#tableData').empty();
            var month_selection = parseInt(document.getElementById('period').value);
            var current_amount = document.getElementById('slider_js').value;

            if(month_selection == 6) {
                payments = [];
                jQuery("#slider_js").attr("min", 1000);
                
                if(current_amount == 1000) {
                    initiation_fee = 1.15 * 150;
                    amount = parseInt(current_amount) + initiation_fee;

                    for (let index = 0; index < 6; index++) {
                        amount += amount*0.05;
                        payments.push(amount);
                        
                    }
                    
                    
                    var total = 0;
                    for(var i = 0; i < payments.length; i++) {
                        total += payments[i];
                    }
                    var avg = total / payments.length;
                    var monthly_installment = (avg/month_selection) + 69;
                    var total_repayment = monthly_installment * month_selection;
                    jQuery("#monthlyInstallment").html(parseFloat(monthly_installment).toFixed(2));
                    jQuery('#total_repayment').html(parseFloat(total_repayment).toFixed(2));

                } else if(current_amount == 1100) {
                    initiation_fee = 1.15 * 165;
                    amount = parseInt(current_amount) + initiation_fee;

                    for (let index = 0; index < 6; index++) {
                        
                        amount += amount*0.05;
                        payments.push(amount);
                        
                    }
                    
                    var total = 0;
                    for(var i = 0; i < payments.length; i++) {
                        total += payments[i];
                    }
                    var avg = total / payments.length;
                    var monthly_installment = (avg/month_selection) + 69;
                    var total_repayment = monthly_installment * month_selection;
                    jQuery("#monthlyInstallment").html(parseFloat(monthly_installment).toFixed(2));
                    jQuery('#total_repayment').html(parseFloat(total_repayment).toFixed(2));

                } else {
                    initiation_fee = ((current_amount - 1000)*0.1 + 165)*1.15;

                    amount = parseInt(current_amount) + initiation_fee;

                    for (let index = 0; index < 6; index++) {
                        
                        amount += amount*0.05;
                        payments.push(amount);
                        
                    }
                    
                    var total = 0;
                    for(var i = 0; i < payments.length; i++) {
                        total += payments[i];
                    }
                    var avg = total / payments.length;
                    var monthly_installment = (avg/month_selection) + 69;
                    var total_repayment = monthly_installment * month_selection;
                    jQuery("#monthlyInstallment").html(parseFloat(monthly_installment).toFixed(2));
                    jQuery('#total_repayment').html(parseFloat(total_repayment).toFixed(2));
                }

            } else {
                payments = [];
                jQuery("#slider_js").attr("min", 2000);

                if(current_amount == 2000) {
                    initiation_fee = 1.15 * 265;
                    amount = parseInt(current_amount) + initiation_fee;

                    for (let index = 0; index < 12; index++) {
                        
                        amount += amount*0.0229;
                        payments.push(amount);
                        
                    }
                    
                    
                    var total = 0;
                    for(var i = 0; i < payments.length; i++) {
                        total += payments[i];
                    }
                    var avg = total / payments.length;
                    var monthly_installment = (avg/month_selection) + 69;
                    var total_repayment = monthly_installment * month_selection;
                    jQuery("#monthlyInstallment").html(parseFloat(monthly_installment).toFixed(2));
                    jQuery('#total_repayment').html(parseFloat(total_repayment).toFixed(2));

                } else if(current_amount == 2100) {
                    initiation_fee = 1.15 * 275;
                    amount = parseInt(current_amount) + initiation_fee;

                    for (let index = 0; index < 12; index++) {
                        
                        amount += amount*0.0229;
                        payments.push(amount);
                        
                    }
                    
                    
                    var total = 0;
                    for(var i = 0; i < payments.length; i++) {
                        total += payments[i];
                    }
                    var avg = total / payments.length;
                    var monthly_installment = (avg/month_selection) + 69;
                    var total_repayment = monthly_installment * month_selection;
                    jQuery("#monthlyInstallment").html(parseFloat(monthly_installment).toFixed(2));
                    jQuery('#total_repayment').html(parseFloat(total_repayment).toFixed(2));
                } else if(current_amount <= 9800) {
                    initiation_fee = ((current_amount - 2000)*0.1 + 265)*1.15;
                    amount = parseInt(current_amount) + initiation_fee;

                    for (let index = 0; index < 12; index++) {
                        
                        amount += amount*0.0229;
                        payments.push(amount);
                        
                    }
                    
                    
                    var total = 0;
                    for(var i = 0; i < payments.length; i++) {
                        total += payments[i];
                    }
                    var avg = total / payments.length;
                    var monthly_installment = (avg/month_selection) + 69;
                    var total_repayment = monthly_installment * month_selection;
                    jQuery("#monthlyInstallment").html(parseFloat(monthly_installment).toFixed(2));
                    jQuery('#total_repayment').html(parseFloat(total_repayment).toFixed(2));
                } else {
                    initiation_fee = 1207.5;
                    amount = parseInt(current_amount) + initiation_fee;

                    for (let index = 0; index < 12; index++) {
                        
                        amount += amount*0.0229;
                        payments.push(amount);
                        
                    }
                    
                    
                    var total = 0;
                    for(var i = 0; i < payments.length; i++) {
                        total += payments[i];
                    }
                    var avg = total / payments.length;
                    var monthly_installment = (avg/month_selection) + 69;
                    var total_repayment = monthly_installment * month_selection;
                    jQuery("#monthlyInstallment").html(parseFloat(monthly_installment).toFixed(2));
                    jQuery('#total_repayment').html(parseFloat(total_repayment).toFixed(2));
                }

            }

            
        }
        
        var check_selected_button = function()
    {
        var month_selection = parseInt(document.getElementById('period').value);
        var el_six_month = document.getElementById('sixMBtn');
        var el_twelve_month = document.getElementById('twelveMBtn');

        if(month_selection == 6) {
            jQuery("#slider_js").attr("min", 1000);
            jQuery("#slider_js").attr("max", 8000);
            if(jQuery("#slider_js").val() > 8000) {
                jQuery("#slider_js").val(8000).change();
            }
            jQuery("#slider_js").rangeslider('update', true);

            el_six_month.classList.remove('button-outline-primary');
            el_six_month.classList.add('button-primary');
            el_twelve_month.classList.add('button-outline-primary');

        } else if(month_selection == 12) {
            jQuery("#slider_js").attr("min", 2000);
            jQuery("#slider_js").attr("max", 50000);
            if(jQuery("#slider_js").val() < 2000) {
                jQuery("#slider_js").val(2000).change();
            }
            jQuery("#slider_js").rangeslider('update', true);
            
            el_twelve_month.classList.remove('button-outline-primary');
            el_twelve_month.classList.add('button-primary');
            el_six_month.classList.add('button-outline-primary');
        } else {

        }
    }
    // month button functions
    jQuery('#sixMBtn').click(function() {
        jQuery("#slider_js").attr("min", 1000);
        jQuery("#slider_js").attr("max", 8000);
        if(jQuery("#slider_js").val() > 8000) {
            jQuery("#slider_js").val(8000).change();
        }
        jQuery("#slider_js").rangeslider('update', true);
        document.getElementById('period').value = 6;
        // get_table_data();
        check_selected_button();
    });

    jQuery('#twelveMBtn').click(function() {
        jQuery("#slider_js").attr("min", 2000);
        jQuery("#slider_js").attr("max", 50000);
        if(jQuery("#slider_js").val() < 2000) {
            jQuery("#slider_js").val(2000).change();
        }
        jQuery("#slider_js").rangeslider('update', true);
        document.getElementById('period').value = 12;
        // get_table_data();
        check_selected_button();
    });    
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
            // get_table_data();
            get_total_amount();
        },

        // Callback function
        onSlide: function(position, value) {
            jQuery('#slide_value').html(value);
            // get_table_data();
            get_total_amount();

        },

        // Callback function
        onSlideEnd: function(position, value) {}
    });
    check_selected_button();

  });