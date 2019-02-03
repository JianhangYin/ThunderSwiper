# Thunder Swiper

   ![img](./public/Img/example.gif)

## Feature
1. An great tool displaying the react components on the swiper.
2. Both web and wap are supported.
3. 5 types of swiper are available.

(Switch the type of swiper by changing the value of "swiperType")
* Navigation Swiper -> ("_navigation_")
* Web Horizontal Swiper -> ("_web_horizontal_")
* Web Vertical Swiper -> ("_web_vertical_")
* Wap Horizontal Swiper -> ("_wap_horizontal_")
* Wap Vertical Swiper -> ("_wap_vertical_")

## How to use

1. import the react components you want to swipe on your page into ComponentList.js file
    >import Page1 from '../Example/Page1';        <br/>
    import Page2 from '../Example/Page2';         <br/>
    import Page3 from '../Example/Page3';         <br/>
 
    >export {                                     <br/>
        Page1 as Component1,                      <br/>
        Page2 as Component2,                      <br/>
        Page3 as Component3                       <br/>
    }                                             <br/> 
2. import the Thunder Swiper into the parent component and use it with the proper parameters.
    ><ThunderSwiper                               <br/>
        isOpenSwiper={isOpen}                     <br/>
        isCloseSwiper={this.switchButtonClose}    <br/>
        swipePageTotalNumber={3}                  <br/>
        swiperType={'navigation'}                 <br/>
        moduleImported={path of ComponentList.js} <br/>
        />                                        <br/>
3. Rock and Roll!

## Props

| name | definition | default |
| :---: | :----: | :---: |
| isOpenSwiper | Open this swiper or not | |
| isCloseSwiper  | Control switch button | |
| swipePageTotalNumber | Number of the components | |
| swiperType | Type of the swiper | 'navigation' |
| moduleImported | Modules imported in the swiper | |
