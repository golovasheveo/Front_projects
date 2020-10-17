import React from 'react';

import 'react-multi-carousel/lib/styles.css';
import Carousel from "react-multi-carousel";
import { makeStyles, Theme } from "@material-ui/core/styles";
import action1 from "./action/sale1.jpg";
import action3 from "./action/sale3.jpg";
import action5 from "./action/sale5.jpg";
import bgAcytion from "./action/bgMain3.jpeg";


const useStyles = makeStyles((theme: Theme) => ({
    sliderContainer:  (props: any) => ({
        backgroundImage: "url("+bgAcytion+")",
        marginTop: "10vh",
        backgroundColor: "white",
        height: '50vh',
        display: "flex",
    }),
    sliderStyle:  (props: any) => ({
        backgroundImage: "url("+bgAcytion+")",
        // backgroundColor: "red",
        height: '100%',
        width: "85vw",
        margin: "auto auto"
    }),
    sliderContent:  (props: any) => ({
        backgroundColor: "grey",
        width: "55vw",
        height: '40vh',
        margin: "auto auto",
        // padding: "2vw"
        // margin: "2vw 1vw"
    }),

    action1:  (props: any) => ({
        backgroundImage: "url("+action1+")",
        height: '100%',
        width: '100%',
        backgroundSize: "cover",
        // backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
    }),
    action3:  (props: any) => ({
        backgroundImage: "url("+action3+")",
        height: '100%',
        width: '100%',
        backgroundSize: "cover",
        // backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
    }),
    action5:  (props: any) => ({
        backgroundImage: "url("+action5+")",
        height: '100%',
        width: '100%',
        backgroundSize: "cover",
        // backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
    }),

}));

type Props = {

}

const CarouselDiscountMain: React.FC<Props> = (props: Props) => {

    const classes = useStyles();
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return <React.Fragment>

       <div className={classes.sliderContainer}>

        <Carousel className={classes.sliderStyle}
            swipeable={true}
            draggable={true}
            showDots={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={2000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={1000}
            containerClass="carousel-container"
            // removeArrowOnDeviceType={["tablet", "mobile"]}
            removeArrowOnDeviceType={"mobile"}
            // deviceType={this.props.deviceType}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            centerMode={false}
            // arrows={true}
        >
            <div className={classes.sliderContent} > <div className={classes.action1}></div> </div>
            <div className={classes.sliderContent}>  <div className={classes.action3}></div> </div>
            <div className={classes.sliderContent}> <div className={classes.action5}></div> </div>
        </Carousel>

       </div>

    </React.Fragment>
};

export default CarouselDiscountMain;




