import React, { useState } from 'react';

const images = [
  {
    // label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath:
      'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    // label: 'Bird',
    imgPath:
      'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    // label: 'Bali, Indonesia',
    imgPath:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250',
  },
  {
    // label: 'Goč, Serbia',
    imgPath:
      'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
  },
];

function SwipeableTextMobileStepper() {
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep + 1) % maxSteps);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep - 1 + maxSteps) % maxSteps);
  };

  return (
    <div style={{ maxWidth: 400, textAlign: 'center' }}>
      <div>{images[activeStep].label}</div>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 10 }}>
        {images.map((step, index) => (
          <div key={step.label} style={{ flex: '0 0 auto', marginRight: 10 }}>
            {index === activeStep && (
              <img
                src={step.imgPath}
                alt={step.label}
                style={{ height: 200, width: 300, objectFit: 'cover' }}
              />
            )}
          </div>
        ))}
      </div>
      <div>
        <button style={{ marginRight: 10 }} onClick={handleBack}>Back</button><></>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
}

export default SwipeableTextMobileStepper;
