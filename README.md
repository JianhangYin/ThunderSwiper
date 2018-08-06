# Thunder Swiper

## Feature
1. swipe the JS element in your page
2. button click, mouse event and touch event are supported (web and wap)
3. flexible

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
2. import ThunderSwiper.js and use it in the parent component.
    ><ThunderSwiper                               <br/>
        isOpenSwiper={isOpen}                     <br/>
        isCloseSwiper={this.switchButtonClose}    <br/>
        swipePageTotalNumber={3}                  <br/>
        swiperType={'navigation'}                 <br/>
        />                                        <br/>

## Example
1. Navigation Swiper
    ![img](./src/Material/navigation.gif)
2. Web Horizontal Swiper
    ![img](./src/Material/web_horizontal.gif)
3. Web Vertical Swiper
    ![img](./src/Material/web_vertical.gif)
4. Wap Horizontal Swiper
    ![img](./src/Material/wap_horizontal.gif)
5. Wap vertical Swiper
    ![img](./src/Material/wap_vertical.gif)




