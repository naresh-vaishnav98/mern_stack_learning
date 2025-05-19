import React from 'react'

export default function FaqHead({heading, showFaq, currentIndex, FaqData}) {

    return (
        <>
            <div class="heading">                
                <h1>{heading}</h1>
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
        </>
    )
}
