import React from 'react'
import Featurebox from './Featurebox'
import fimage1 from '../images/1.svg'
import fimage2 from '../images/2.svg'
import fimage3 from '../images/3.svg'
import fimage4 from '../images/4.svg'


function Feature() {
  return (
    <div id='features'>
      <h1>FEATURES</h1>
      <div className='a-container'>
        <Featurebox image={fimage1} title="WeightLifting" content="Strength training can help you manage or lose weight, and it can increase your metabolism to help you burn more calories."/>
        <Featurebox image={fimage2} title="Specific Muscle" content="Can you train specific muscles?
If you're training for general fitness, you can follow a program that balances all the different muscle groups. If you're training for a sport, you may benefit from emphasizing certain muscle groups frequently used in your sport."/>
        <Featurebox image={fimage3} title="Flex Your Muscle" content ="Muscle flexing is more accurately known as muscle contraction, because when you flex your muscles, you're creating tension that's temporarily making the muscle fibers smaller or contracted."/>
        <Featurebox image={fimage4} title="Cardio Exercises" content="Is it OK to do cardio everyday?
Is it safe to do cardio every day? In a 2012 study published in the British Journal of Pharmacology, researchers found that doing up to 60 minutes of cardio exercise daily is safe and appropriate, particularly if weight loss is a goal."/>
      </div>
    </div>
  )
}

export default Feature
