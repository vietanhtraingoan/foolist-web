import React from 'react';
import { motion } from 'framer-motion';
import { BaseComponent } from '../../utils/types/clientTypes';
type MotionType =
  | 'fadeIn'
  | 'fadeInDown'
  | 'fadeInDownBig'
  | 'fadeInLeft'
  | 'fadeInLeftBig'
  | 'fadeInRight'
  | 'fadeInRightBig'
  | 'fadeInUp'
  | 'fadeInUpBig'
  | 'fadeInTopLeft'
  | 'fadeInTopRight'
  | 'fadeInBottomLeft'
  | 'fadeInBottomRight'
  | 'slideInDown'
  | 'slideInLeft'
  | 'slideInRight'
  | 'slideInUp';
interface AnimateOnScrollProps extends BaseComponent {
  type: MotionType;
  delay?: number;
  [key: string]: any;
}

const AnimateOnScroll = ({
  children,
  className,
  type,
  delay,
  ...props
}: AnimateOnScrollProps) => {
  const motions: Record<
    MotionType,
    {
      initial?: Record<string, any>;
      whileInView?: Record<string, any>;
    }
  > = {
    fadeIn: {
      initial: {
        opacity: 0,
      },
      whileInView: {
        opacity: 1,
      },
    },
    slideInDown: {
      initial: {
        y: -100,
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
    },
    slideInLeft: {
      initial: {
        x: -100,
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },
    slideInRight: {
      initial: {
        x: 100,
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },
    slideInUp: {
      initial: {
        translateY: 100,
        opacity: 0,
      },
      whileInView: {
        translateY: 0,
        opacity: 1,
      },
    },

    fadeInDown: {
      initial: {
        opacity: 0,
        translateY: -100,
      },
      whileInView: {
        opacity: 1,
        translateY: 0,
      },
    },
    fadeInDownBig: {
      initial: {
        opacity: 0,
        translateY: -200,
      },
      whileInView: {
        opacity: 1,
        translateY: 0,
      },
    },
    fadeInLeft: {
      initial: {
        opacity: 0,
        translateX: -100,
      },
      whileInView: {
        opacity: 1,
        translateX: 0,
      },
    },
    fadeInLeftBig: {
      initial: {
        opacity: 0,
        translateX: -200,
      },
      whileInView: {
        opacity: 1,
        translateX: 0,
      },
    },
    fadeInRight: {
      initial: {
        opacity: 0,
        translateX: 100,
      },
      whileInView: {
        opacity: 1,
        translateX: 0,
      },
    },
    fadeInRightBig: {
      initial: {
        opacity: 0,
        translateX: 200,
      },
      whileInView: {
        opacity: 1,
        translateX: 0,
      },
    },
    fadeInUp: {
      initial: {
        opacity: 0,
        translateY: 100,
      },
      whileInView: {
        opacity: 1,
        translateY: 0,
      },
    },
    fadeInUpBig: {
      initial: {
        opacity: 0,
        translateY: 200,
      },
      whileInView: {
        opacity: 1,
        translateY: 0,
      },
    },
    fadeInTopLeft: {
      initial: {
        opacity: 0,
        translateY: -100,
        translateX: -100,
      },
      whileInView: {
        opacity: 1,
        translateY: 0,
        translateX: 0,
      },
    },
    fadeInTopRight: {
      initial: {
        opacity: 0,
        translateY: -100,
        translateX: 100,
      },
      whileInView: {
        opacity: 1,
        translateY: 0,
        translateX: 0,
      },
    },
    fadeInBottomLeft: {
      initial: {
        opacity: 0,
        translateY: 100,
        translateX: -100,
      },
      whileInView: {
        opacity: 1,
        translateY: 0,
        translateX: 0,
      },
    },
    fadeInBottomRight: {
      initial: {
        opacity: 0,
        translateY: 100,
        translateX: 100,
      },
      whileInView: {
        opacity: 1,
        translateY: 0,
        translateX: 0,
      },
    },
  };
  return (
    <motion.div
      className={className}
      initial={{
        ...motions[type]?.initial,
      }}
      transition={{ duration: 0.5, type: 'spring', delay: delay }}
      whileInView={motions[type]?.whileInView}
      viewport={{ once: true }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default AnimateOnScroll;
