
function FormHandler(selector, toggleSelector){
        this.$form = $(selector)
        this.$toggleButton = $(toggleSelector)
}

FormHandler.prototype.addHandler = function (dataFn) {

    this.$toggleButton.on('click', function () {
        this.$form.toggle()
        $('form').not(this.$form).hide()
        $('.form-toggle').not(this.$toggleButton).removeClass('active')
        this.$toggleButton.toggleClass("active")
    }.bind(this))

    this.$form.on( 'submit', function (event) {
        event.preventDefault();

        let dataObj = this.$form.serializeArray()
            .reduce(function (obj, current) {
                obj[current.name] = current.value;
                return obj;
            }, {})

        let message = dataFn(dataObj);
        if(message){
            alert(message);
        }else {
            event.target.reset();
        }
    }.bind(this));

    let submitButton = this.$form.find('button:submit')
    this.$form.on('change', function(){
        submitButton.removeAttr('disabled')
        this.$form.find('input').each(function () {

            if($(this).val().length == 0){
                submitButton.attr('disabled', 'disabled')
            }

        })
    }.bind(this))
}