import $ from 'jquery';
import {FormHandler} from './form-handler';
import ClientServer from "./client-server";
import {Render} from "./render";
import Spinner from "./spinner";


const formPicture = new FormHandler('#main-form');
formPicture.addHandler(functionLayout);

const connection = new ClientServer();
const render = new Render("#picture-recognition");

var spinner = new Spinner('#spinnerId');


async function functionLayout(obj) {
    try {
        spinner.start();
        var tags = await connection.getProbability(obj);
        var colors = await connection.getColors(obj);
    } catch (error) {
        return error;
    } finally {
        console.log ("My tags: ", tags);
        console.log ("My colors: ", colors)
        render.addTags(tags,'#tags');
        render.addColors(colors, '#colors');
        render.addPicture(obj, '#picture');
        console.log (obj);
        spinner.stop();
    }
}



