import $ from 'jquery';

export default class Spinner {
    //'#spinnerId'
    constructor(selector) {
        this.$selector = $(selector)
    }

    start() {
        this.$selector.removeClass('invisible');
    }

    stop() {
        this.$selector.addClass('invisible');
    }

}