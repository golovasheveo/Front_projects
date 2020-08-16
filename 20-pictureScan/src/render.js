import $ from 'jquery';

class Render {
    constructor(section, division) {
        this.$section = $(section);
    }

    addPicture(object,division) {

        let $division = $(division);

        /*
        ​<picture>
            <img src="https://ichef.bbci.co.uk/news/1024/cpsprodpb/151AB/production/_111434468_gettyimages-1143489763.jpg"
                 class="img-fluid img-thumbnail" alt="Hello">
        </picture>
         */

        console.log("Children rendered #", $division);
        const link = object.link;
        $division.children().remove()

        // <div class="spinner-border text-primary invisible p-3" style="position: absolute; top: 50%; left: 50%; margin-top: -1.5rem; margin-left: -1.5rem; width: 3rem; height: 3rem; " role="status" id="spinnerId" >
        //     <span class="sr-only">Loading...</span>
        // </div>

        const $PictureElement = $('<picture>');

        // const $ImageElement = $(`<img src="${link}"class="img-fluid img-thumbnail m-0 p-0" alt="Image not loading">`)

        const $ImageElement = $('<img>',{
            src: link,
            class: "img-fluid img-thumbnail m-0 p-0",
            alt: "Image not loading"
        });

        $PictureElement.append($ImageElement);
        $division.append($PictureElement);
        console.log('Render picture')

        // console.log("Children rendered #", this.$division.children());
        // this.$division.children().remove()
        // const link = object.link;
        // const $ImageElement = $(`<img src="${link}"class="img-fluid img-thumbnail m-0 p-0" alt="Image not loading">`)
        // this.$division.append($ImageElement);
        // console.log('Render picture')
    }

    addTags(object, division) {
        let $division = $(division);
        $division.children().remove()
        let $listGroup=$('<ul class="list-group list-group-flush">');
        $division.append($listGroup);

        for (let i = 0; i <= 4; i++) {

            let tag = `${Object.values(object.result.tags[i].tag).toString().toLowerCase()}`;
            let confidence = Math.round(object.result.tags[i].confidence);

            let badgeClass = "badge badge-primary p-1 m-1";

            if (confidence<98) {
                badgeClass = "badge badge-secondary p-1 m-1"
            }

            const $listElement=$('<li>',{
                class: badgeClass,
                style: "font-size: medium"
            })

            $listElement.append(`${tag}`);
            $listGroup.append($listElement);
        }
    }

    addColors(object, division) {
        let $division = $(division);
        $division.children().remove()
        let $listGroup=$('<ul class="list-group list-group-flush">');
        $division.append($listGroup);

        object.result.colors.image_colors.forEach (colorObj => {
            let colorRGB = {
                b : colorObj.b,
                g : colorObj.g,
                r : colorObj.r
            }

            let colorHtmlCode = colorObj.html_code
            let colorName = colorObj.closest_palette_color
            console.log("color in colorName", colorName);

            let colorText = this.checkColor(colorRGB.r, colorRGB.g, colorRGB.b);

            let $listElement=$('<li>',{
                class: `badge ${colorText} p-1 m-1`,
                style: `background-color:${colorHtmlCode};font-size: medium`
            });
            $listElement.append(`${colorName}`);
            $listGroup.append($listElement);
        })


/*        for (let i = 0; i < object.result.colors.image_colors.length; i++) {
            let colorRGB = {
                b : object.result.colors.image_colors[i].b,
                g : object.result.colors.image_colors[i].g,
                r : object.result.colors.image_colors[i].r
            }
            let colorHtmlCode = object.result.colors.image_colors[i].html_code
            let colorName = object.result.colors.image_colors[i].closest_palette_color
            console.log("color in colorName", colorName);

            let colorText = this.checkColor(colorRGB.r, colorRGB.g, colorRGB.b);

            let $listElement=$('<li>',{
                class: `badge ${colorText} p-1 m-1`,
                style: `background-color:${colorHtmlCode};font-size: medium`
            });
            $listElement.append(`${colorName}`);
            $listGroup.append($listElement);
        } */
    }

    checkColor(red, green, blue) {
        let res = 1 - (0.299 * red + 0.587 * green + 0.114 * blue) / 255;
        if (res > 0.5) {
            // white
            return 'text-light';
        } else {
            // black
            return 'text-dark';
        }
    }
}

export {Render}