function validate() {

    let userNameCheck = /^[a-zA-Z0-9]{3,20}$/;
    let passwordCheck = /^[a-zA-Z0-9_]{5,15}$/;
    let emailCheck = /[@.]{1}/;

    $('#submit').on('click', function (e) {
        e.preventDefault();
        let username = $('#username').val();
        let email = $('#email').val();
        let password = $('#password').val();
        let confPassword = $('#confirm-password').val();
        let isCompanyChecked = $('#company').prop('checked');
        let companyNumber = Number($('#companyNumber').val());
        let valid = $('#valid');




        if(!username.match(userNameCheck)){
            $('#username').css('border', '2px solid red');
        }else {
            $('#username').css('border', '');
        }

        if(!email.match(emailCheck)){
            $('#email').css('border', '2px solid red');
        }else {
            $('#email').css('border', '');
        }

        if(password.match(passwordCheck) == null){
            $('#password').css('border', '2px solid red');
        }else {
            $('#password').css('border', '');
        }

        if(password != confPassword){
            $('#confirm-password').css('border', '2px solid red');
        }else {
            $('#confirm-password').css('border', '');
        }

        if(isCompanyChecked){
            $('#valid').hide();
            // $('#companyInfo').show();
            $('#companyInfo').css('display' , '');

            let cmpNumber = companyNumber < 1000 || companyNumber > 9999;

            if(cmpNumber){
                $('#companyNumber').css('border', '2px solid red');

                if(username.match(userNameCheck) && email.match(emailCheck) && password.match(passwordCheck) != null && password === confPassword ){
                    $(valid).show();
                }
            }else {
                $('#companyNumber').css('border', '');
                $(valid).hide();
            }






        }else {
            //$('#companyInfo').hide();
            $('#companyInfo').css('display', 'none');

            if(username.match(userNameCheck) && email.match(emailCheck) && password.match(passwordCheck) != null && password === confPassword  ){
                $(valid).show();
            }else {
                $(valid).hide();
            }
        }





















        // alert(`username: ${username}\n email: ${email}\n password: ${password}\n confirm password: ${confPassword}\n is Company: ${isCompanyChecked}\n`);
    });
}
