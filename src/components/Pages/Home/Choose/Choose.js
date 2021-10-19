import React from 'react';
import chooseImg from '../../../../images/choose.jpg'

const Choose = () => {
    return (
        <div className='mb-3'>
            <div className='container'>
                <h3 className='text-primary text-center mb-3'>WHY CHOOSE LIFECARE</h3>
                <div className="row">
                    <div className="col-md-8">
                        <div>
                            <h4>We believe movement matters.</h4>
                            <p className='text-gray'>
                                We’ve made it our mission to support all kinds of movement: for every body, at every stage. Movement matters when it comes to enjoying life, regardless of whether you’re an elite athlete or hoping to alleviate every day pain.
                                <br />
                                We want to guide your performance, or recovery, so you can achieve your movement goals—’personal best’ is just that, personalised to suit your fitness level and lifestyle. Whether it’s improving, maintaining or optimising your movement, we’re here to help.
                            </p>
                            <h4>We use our experience to support your needs.</h4>
                            <p>
                                We believe that every patient, and their movement, is unique. It’s why we leverage the varied skills of our team when assessing a specific injury or focus area. This allows you to be paired with the practitioner whose expertise best suits your needs.
                                <br />
                                Our people are some of the most knowledgeable in the field, with leading expertise across spinal, pregnancy, and sports, through to chronic pain and aging. Our network connects you with experienced allied health professionals that share their knowledge during your sessions and through our online blog and injury resources.
                            </p>
                            <h4>We’re there when you need us</h4>
                            <p>
                                We know it’s important to be available when you need us. It’s why we’ve built a network of practices all around Australia and filled them with the most supportive and experienced professionals in the industry.
                                <br />
                                We maintain flexible appointment times across our clinics, and a range of locations in each state that support our allied health services across physiotherapy, sports medicine, massage therapy, exercises classes, and podiatry.
                            </p>


                        </div>
                    </div>
                    <div className="col-md-4">
                        <div>
                            <img src={chooseImg} className='img-fluid w-100' alt="" />
                        </div>
                    </div>
                </div>


            </div>
        </div>

    );
};

export default Choose;