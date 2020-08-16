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

const selector = "#fileInput";

// $(selector).on('change', function () {
//     var image = $(selector);
//     console.log("selector", image[0].files[0]);
// });

// $(selector).on('change', function () {
//     var data = getFile()
//     connection.uploadFile(data)
// });
//
// function getFile() {
//
//     let file = document.getElementById('fileInput');
//     if (file.files.length > 0) {
//         let fd = new FormData();
//         fd.append('image', file.files[0]);
//         console.log("file", file.files[0])
//         console.log("fd", fd)
//         return fd
//     }
//     return null
// }


async function functionLayout(obj) {
    try {
        spinner.start();
        var tags = await connection.getProbability(obj);
        var colors = await connection.getColors(obj);
        console.log ("My tags: ", tags);
        console.log ("My colors: ", colors)
        render.addTags(tags,'#tags');
        render.addColors(colors, '#colors');
        render.addPicture(obj, '#picture');
        console.log ("object from main form",obj);
    } catch (error) {
        return error;
    } finally {
        spinner.stop();
    }
}



