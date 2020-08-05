import $ from 'jquery';


class mainMenu {
    constructor(formFunction) {
        this.$cardAddEmployee = $('#cardAddEmployee');
        this.$cardRandomEmployee = $('#cardRandomEmployee');
        this.tableEmployee = $('#tableEmployee');
        this.addEmployee = formFunction;
    }


    openAddForm(formSelector) {
        $(formSelector).on('click', function () {
            console.log("Click on add");
            this.$cardAddEmployee.toggleClass('hide');
        }.bind(this))
    }

    openRandomForm(formSelector) {
        $(formSelector).on('click', function () {
            console.log("Click on random");
            this.$cardRandomEmployee.toggleClass('hide')
        }.bind(this))
    }

    openTable(formSelector) {
        $(formSelector).on('click', function () {
            console.log("Click on table");
            this.tableEmployee.toggleClass('hide');
        }.bind(this))
    }
}

export {mainMenu}