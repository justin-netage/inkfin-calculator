<div class="inkfin-careers calculater-container">
        <h3>First select your loan amount on the slider below</h3>
        <p><strong>Remember to first get a quote from the Training Institution.</strong></p>
        <p><!--[if lt IE 7]><p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="#">upgrade your browser</a> to improve your experience.</p><![endif]--></p>
        <div class="calculator" style="margin-left:24px; margin-right:24px;"><input id="slider_js"type="range"min="2000"max="50000"step="1000"value="2000"data-orientation="horizontal"></div>
        <h3 class="loan-amount" align="middle">R<span id="slide_value"></span></h3>
        <p><input type="hidden" value="6" name="period" id="period"/></p>
        <p class="aligncenter">Then choose your repayment term:</p>
        <div style="width: 100%; text-align: center;"><button class="button button-primary" align="middle" id="sixMBtn">6 Months</button><button class="button button-outline-primary" align="middle" id="twelveMBtn">12 Months</button><button class="button button-outline-primary" align="middle" id="twentyFourMBtn">24 Months</button></div>
        <p style="font-size: 14px;">For a 6 month loan or shorter please choose an amount of R8000 or less</p>
        <h3 class="repayment" align="middle" style="font-weight: bold;">Repayment Amount Including Loan Fees</h3>
        <table class="table" width="100%">
        <thead>
        <tr>
        <th scope="col">Deposit</th>
        <th scope="col">Monthly Installments</th>
        </tr>
        </thead>
        <tbody id="tableData">
        <tr>
        <td id="depositAmount"></td>
        <td id="monthlyPayments"></td>
        </tr>
        </tbody>
        </table>
        <div class="repayment-total" id="repaymentTotal"><span class="total-text">Total installment payments excluding deposit</span> R <span id="total_repayment"></span><br />
        <small style="font-size: 14px;">These repayment values are estimates of what your repayments will be, including your loan initiation fee and mandatory debit order collection fees. </small>
        </div>
    </div>