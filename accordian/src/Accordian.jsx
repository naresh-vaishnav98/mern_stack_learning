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
            <FaqHead heading="Freaquently Asked Questions" showFaq={showFaq} currentIndex={currentIndex} FaqData={FaqData}/>
                
        </div>
    </>
  )
}
