import dynamic from 'next/dynamic'
const CounterUp = dynamic(() => import('@/components/elements/CounterUp'), {
    ssr: false,
})

const Funfact = () => {
  return (
  <>
  <section className="funfact_section section_space_md">
    <div className="container">
      <div className="funfact_wrapper decoration_wrap" >
        <div className="funfact_item">
          <div className="item_icon">
            <img src="/images/icon/icon_pets.svg" alt="Pets Icon"/>
          </div>
          <div className="item_content">
            <h3 className="counter_text ">
              <span className="counter_value"><CounterUp count={120} time={3} /></span>
              <span className="plus_text">+</span>
            </h3>
            <p className="item_title  mb-0">Sutisfide Cliens</p>
          </div>
        </div>
        <div className="funfact_item">
          <div className="item_icon">
            <img src="/images/icon/icon_medal.svg" alt="Pets Icon"/>
          </div>
          <div className="item_content">
            <h3 className="counter_text ">
              <span className="counter_value"><CounterUp count={20} time={3} /></span>
              <span className="plus_text">+</span>
            </h3>
            <p className="item_title  mb-0">Years Experience</p>
          </div>
        </div>
        <div className="funfact_item">
          <div className="item_icon">
            <img src="/images/icon/icon_canned_food.svg" alt="Pets Icon"/>
          </div>
          <div className="item_content">
            <h3 className="counter_text ">
              <span className="counter_value"><CounterUp count={70} time={3} /></span>
              <span className="plus_text">+</span>
            </h3>
            <p className="item_title  mb-0">Brands Available</p>
          </div>
        </div>
        <div className="funfact_item">
          <div className="item_icon">
            <img src="/images/icon/icon_shopping_bag.svg" alt="Pets Icon"/>
          </div>
          <div className="item_content">
            <h3 className="counter_text ">
              <span className="counter_value"><CounterUp count={200} time={3} /></span>
              <span className="plus_text">+</span>
            </h3>
            <p className="item_title  mb-0">Products for pets</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  </>
  );
};
export default Funfact
