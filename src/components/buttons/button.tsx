import React from 'react';

// Define the props type
interface ButtonProps {
  text: string;
  width?: string;   // Optional width (e.g., '100px', '50%')
  height?: string;  // Optional height (e.g., '40px', '10vh')
  fontSize?: string; // Optional font size (e.g., '16px', '1.5rem')
}

const Button = ({ text, width, height, fontSize }: ButtonProps) => {
  return (
    <div>
      <button
        style={{
          backgroundColor: '#16a34a', // Equivalent to Tailwind's bg-green-600
          fontWeight: '600',           // Equivalent to Tailwind's font-semibold
          width: width || 'auto',      // Apply dynamic width or default to 'auto'
          height: height || 'auto',    // Apply dynamic height or default to 'auto'
          fontSize: fontSize || '16px' // Apply dynamic font size or default to '16px'
        }}
      >
        {text}
      </button>
    </div>
  );
};

export { Button };
