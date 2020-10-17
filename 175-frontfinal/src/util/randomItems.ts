import tv1 from './imgs/tv/images1.jpg';
import tv2 from './imgs/tv/images 2.jpg';
import tv3 from './imgs/tv/images3.jpg';
import tv4 from './imgs/tv/images4.jpg';
import tv5 from './imgs/tv/images5.jpg';
import tv6 from './imgs/tv/images6.jpg';
import tv7 from './imgs/tv/images7.jpg';
import tv8 from './imgs/tv/images8.jpg';
import tv9 from './imgs/tv/images9.jpg';
import tv10 from './imgs/tv/images10.jpg';
import tv11 from './imgs/tv/images11.jpg';
import tv12 from './imgs/tv/images12.jpg';
import tv13 from './imgs/tv/images.jpg';
import appFirebase from "../config/firebaseConf";


export function randomTV(num: number) {
    let strLinkTv: string[] = []
    let picAr = [tv1, tv2, tv3, tv4, tv5, tv6, tv7, tv8, tv9, tv10, tv11, tv12, tv13]


   function getItemToPush() {

        let file = new File([tv1], "rem")
       const uploadTask =  appFirebase.storage().ref(`images/${file.name}`).put(file);


        //
        // const arBrand = ["Sony", "Panasonic", "Phillips", "LG", "Sharp", "Samsung", "Fuji", "Toshiba"]
        // const arModel = ["ll", "ls", "py", "rt", "jr-rt", "fdxh", "eri", "iGo", "rsT"]
        //
        // function getId() {
        //     return Math.round((Math.floor(Math.random() * 10000 * num)) / 5)
        // }
        //
        // function getBrand() {
        //     return arBrand[Math.round(Math.floor(Math.random() * arBrand.length))]
        //
        // }
        //
        // function getDepartment() {
        //     return "TV"
        // }
        //
        // function getModel(): string {
        //     return ("tv -") + arModel[Math.floor(Math.random() * arModel.length)] + "-" + Math.round(Math.floor(Math.random() * arBrand.length))
        // }
        //
        // function getPrice() {
        //     return Math.round(Math.floor(Math.random() * 10000) / 10)
        // }
        //
        // function getPicture() {
        //     return strLinkTv[Math.round(Math.floor(Math.random() * strLinkTv.length))]
        // }
        //
        // for (let i = 0; i < num; i++) {
        //
        //     const itemTvTobeUploaded: ElectronicsType = {
        //         id: getId(),
        //         brand: getBrand(),
        //         model: getModel(),
        //         department: getDepartment(),
        //         price: getPrice(),
        //         picture: getPicture()
        //     }
        //     // arRes.push(itemTvTobeUploaded)
        //
        // }

    }

    getItemToPush()

}