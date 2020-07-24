function Validator(options) {

    function getParent(element,selector){
        while(element.parentElement){
            if(element.parentElement.matches(selector)){
                return element.parentElement;
            }
            element = element.parentElement;
        }
    }

    var formElement = document.querySelector(options.form);
    var selectorRules = {};

    function validate(inputElement, rule) {
        var errorElement = getParent(inputElement,options.formGroupSelector).querySelector(options.errorMessage);
        var errorMessage;

        // Lấy ra các rules của selector
        var rules = selectorRules[rule.selector];
        // console.log('rules', rules);
        // Lặp qua các rule và kiểm tra
        for (var i = 0; i < rules.length; i++) {
            switch (inputElement.type){
                case 'radio':
                  
                case 'checkbox':
                    errorMessage = rules[i](
                        formElement.querySelector(rule.selector + ':checked')
                    );                  
                    break;
                default:
                    errorMessage = rules[i](inputElement.value);
            }
          
            // Có lổi thì thoát và ỉn ra
            if (errorMessage) break;
        }

        if (errorMessage) {
            errorElement.innerText = errorMessage;
            getParent(inputElement,options.formGroupSelector).classList.add('invalid');
        } else {
            errorElement.innerText = "";
            getParent(inputElement,options.formGroupSelector).parentElement.classList.remove('invalid');
        }
        // return true có lổi 
        // return false ko có lổi

        return !errorMessage;
    }
    // lưu tất cả các rules vào selectorRules

    if (formElement) {
        // Khi submit form
        formElement.onsubmit = function (e) {
            e.preventDefault();
            var isFormValid = true;
            // Lặp qua các rule validator tất cả các input
            options.rules.forEach(rule => {
                var inputElement = formElement.querySelector(rule.selector);
                var isValid = validate(inputElement, rule);
                if (!isValid) {
                    isFormValid = false;
                }
            });

            if (isFormValid) {
                // Trường hợp submit với javascript
                if (typeof options.onSubmit === 'function') {
                    var enableInputs = formElement.querySelectorAll('[name]:not([disabled])');
                    var formValues = Array.from(enableInputs).reduce(function (values, input) {
                        
                        switch(input.type){
                            case 'radio':
                                values[input.name] = formElement.querySelector('input[name="'+input.name+'"]:checked').value;
                                break;
                            case 'checkbox':
                                if(!input.matches(':checked')){
                                    values[input.name]="";
                                    return values;
                                }
                                if(!Array.isArray(values[input.name])){
                                    values[input.name] = [];
                                }

                                values[input.name].push(input.value);

                                break;
                            case 'file':
                                values[input.name] = input.files;
                                break;
                            default:
                                values[input.name] = input.value;
                        }
                        
                       
                        return values;
                    }, {});

                    options.onSubmit(formValues);
                }
                // Trường hợp submit với hành vi mặc đinh
                else{
                    formElement.submit();
                }
            }
        }

        // Lặp qua các rule và sử lý sự kiên blur input

        options.rules.forEach(rule => {

            // lưu tất cả các rules vào selectorRules

            if (Array.isArray(selectorRules[rule.selector])) {
                selectorRules[rule.selector].push(rule.test);
            } else {
                selectorRules[rule.selector] = [rule.test];
            }

            var inputElements = formElement.querySelectorAll(rule.selector);

            Array.from(inputElements).forEach(function(inputElement){
                if (inputElement) {
                    // Xử lý trường hợp blur khỏi input
                    inputElement.onblur = function () {
                        validate(inputElement, rule);
                    }
                }
    
                //Xử lý mỗi khi người dùng nhập vào input
                inputElement.oninput = function () {
                    var errorElement = getParent(inputElement,options.formGroupSelector).querySelector(options.errorMessage);
                    errorElement.innerText = "";
                    getParent(inputElement,options.formGroupSelector).classList.remove('invalid');
                }
            })

          

        });
    }

}

// Định nghĩa rules
// Khi có lổi => Trả vè mesage lổi
// Khi hợp lệ => Không trả ra cái gì cả

Validator.isRequired = function (selector, message) {
    return {
        selector: selector,
        test: function (value) {
            return value ? undefined : "Vui lòng nhập trường này"
        }
    }
}

Validator.isEmail = function (selector, message) {
    return {
        selector: selector,
        test: function (value) {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : "Bạn phải nhập email đúng định dạng";
        }
    }
}

Validator.minLength = function (selector, min, message) {
    return {
        selector: selector,
        test: function (value) {
            return value.length >= min ? undefined : `Vui lòng nhập tối thiểu ${min} kí tự`;
        }
    }
}

Validator.isConfirmed = function (selector, getConfirmValue, message) {
    return {
        selector: selector,
        test: function (value) {
            return value === getConfirmValue() ? undefined : message || "Giá trị nhập vào không chính xác";
        }
    }
}