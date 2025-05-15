import React, { useState } from 'react'
import data from './Faqdata.js';
import FaqHead from './FaqHead.jsx';

export default function Accordian() {
    let [FaqData, setFaqData] = useState(data);
    let [currentIndex, setCurrentIndex] = useState(0);

    var showFaq = (i) => {
        if(currentIndex == i){
            setCurrentIndex()
        } else {
            setCurrentIndex(i)
        }
    }


  return (
    <>
        <div class="outer" id="outer">
            <FaqHead heading="Freaquently Asked Questions" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt facilis inventore, eveniet repellendus repudiandae exercitationem cupiditate atque qui vel aut voluptas adipisci fugit corporis dolorum quo delectus laboriosam nisi quas." showFaq={showFaq} currentIndex={currentIndex} FaqData={FaqData}/>
                
        </div>
    </>
  )
}
