import React, { useState } from 'react'
import data from './Faqdata.js';

export default function Accordian() {
    // console.log(data);
    let [FaqData, setFaqData] = useState(data);
    let [currentIndex, setCurrentIndex] = useState(0);
    // console.log(FaqData);

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
            <div class="heading">
                <h1>Frequently Asked Questions</h1>
            </div>
            

            {
                FaqData.map((value,index) => {
                    // {console.log(value)}
                    return(
                        <div class="outer_faq" onClick={() => { showFaq(index) }}>
                            <div class="question">
                                {value.question}
                                <span>{(currentIndex == index) ? '-' : '+'}</span>
                            </div>
                            <div class={ (currentIndex == index) ? 'answer' : 'answer hidden' }>
                                {value.answer}
                            </div>
                        </div>
                    )
                    
                })  
            }

                
                        
        </div>
    </>
  )
}
