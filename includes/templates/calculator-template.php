<div class="calculator-column">
    <div class="calculator-text"><h2 style="text-align: center;" data-fontsize="30" data-lineheight="36">Calculate Your Payments</h2>
    <p style="text-align: center;">First select your loan amount on the slider below:</p>
    <p style="text-align: center;"><em><small>“Remember to first get a quote from the studio.”</small></em></p>
    </div>
    <div class="inkfin-tattoos" style="margin-left:24px; margin-right:24px;"><input
            id="slider_js"
            type="range"
            min="1000"                    
            max="30000"                  
            step="100"                   
            value="1000"                 
            data-orientation="horizontal"
        ></div>
        <h3 class="loan-amount" align="middle">R<span id="slide_value"></span></h3>
        <input type="hidden" value="6" name="period" id="period"/>
        <p class="aligncenter">Then choose your repayment term:</p>
        <div style="width: 100%; text-align: center;">
            <button class="btn btn-lg btn-success" align="middle" id="sixMBtn">6 Months</button>
            <button class="btn btn-lg btn-outline-success" align="middle" id="twelveMBtn">12 Months</button>
        </div>
        <p class="aligncenter"><small style="font-size: 14px;">For a 6 month loan or shorter please choose an amount of R8000 or less</small></p>
        <h3 class="repayment" align="middle" style="font-weight: bold;">Monthly Tattoo Repayment Amount Including Loan Fees</h3>       
        
        <div class="repayment-total">
            <span class="total-text">Monthly Installments </span> R <span id="monthlyInstallment"></span>
            <span class="total-text">Total</span> R <span id="total_repayment"></span><br />
            <small style="font-size: 14px;">These repayment values are estimates of what your repayments will be</small>
        </div>
</div>
