import React, { useEffect, useRef } from 'react';
import styles from './FireCursor.module.scss'; // Importing SCSS module

const FireCursor = () => {
  const circlesRef = useRef([]); // Reference for circles
  const coords = useRef({ x: 0, y: 0 }); // Coordinates

  useEffect(() => {
    const circles = circlesRef.current; // Get circles from the ref

    // Define colors for the circles
    const colors = [
      "#ffb56b",
      "#fdaf69",
      "#f89d63",
      "#f59761",
      "#ef865e",
      "#ec805d",
      "#e36e5c",
      "#df685c",
      "#d5585c",
      "#d1525c",
      "#c5415d",
      "#c03b5d",
      "#b22c5e",
      "#ac265e",
      "#9c155f",
      "#950f5f",
      "#830060",
      "#7c0060",
      "#680060",
      "#60005f",
      "#48005f",
      "#3d005e",
    ];

    // Set initial styles for circles only when all are populated
    const setInitialStyles = () => {
      circlesRef.current.forEach((circle, index) => {
        if (circle) {
          // Ensure circle is defined
          circle.x = 0;
          circle.y = 0;
          circle.style.backgroundColor = colors[index % colors.length];
          circle.style.position = "absolute";
        }
      });
    };

    setInitialStyles();

    // Handle mouse movement
    const handleMouseMove = (e) => {
      coords.current.x = e.clientX;
      coords.current.y = e.clientY + window.scrollY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const animateCircles = () => {
      if (circlesRef.current.every((circle) => circle)) {
        // Check that all circles are populated
        let x = coords.current.x;
        let y = coords.current.y;

        circlesRef.current.forEach((circle, index) => {
          if (circle) {
            // Ensure circle is defined before accessing
            circle.style.left = `${x - 12}px`;
            circle.style.top = `${y - 12}px`;
            circle.style.transform = `scale(${
              (circlesRef.current.length - index) / circlesRef.current.length
            })`;

            circle.x = x;
            circle.y = y;

            const nextCircle =
              circlesRef.current[index + 1] || circlesRef.current[0];
            if (nextCircle) {
              // Ensure nextCircle is defined
              x += (nextCircle.x - x) * 0.55;
              y += (nextCircle.y - y) * 0.55;
            }
          }
        });
      }

      requestAnimationFrame(animateCircles); // Request next animation frame
    };


    animateCircles(); // Start the animation

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);


  return (
    <div className={styles.circlesContainer}>
      {Array.from({ length: 12 }).map((_, index) => (
        <div
          key={index}
          className={styles.circle}
          ref={(el) => (circlesRef.current[index] = el)}
        />
      ))}
    </div>
  );
};

export default FireCursor;
