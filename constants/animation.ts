export const animation = {
  fadeAndScaleAnimation: {
    hidden: {
      scale: 0.85,
      opacity: 0,
    },
    visible: (custom = 0) => ({
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
        delay: custom,
      },
    }),
  },
  fadeAnimation: {
    hidden: {
      opacity: 0,
    },
    visible: (custom = 0) => ({
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
        delay: custom,
      },
    }),
  },
  quickFadeAnimation: {
    hidden: {
      scale: 0.65,
      opacity: 0,
    },
    visible: (custom = 0) => ({
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
        delay: custom,
      },
    }),
  },
  fadeRightAnimation: {
    hidden: {
      x: 45,
      opacity: 0,
    },
    visible: (custom = 0) => ({
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
        delay: custom,
      },
    }),
  },
  fadeLeftAnimation: {
    hidden: {
      x: -45,
      opacity: 0,
    },
    visible: (custom = 0) => ({
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
        delay: custom,
      },
    }),
  },
  fadeTopAnimation: {
    hidden: {
      x: 45,
      opacity: 0,
    },
    visible: (custom = 0) => ({
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
        delay: custom,
      },
    }),
  },
  fadeBottomAnimation: {
    hidden: {
      y: 45,
      opacity: 0,
    },
    visible: (custom = 0) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
        delay: custom,
      },
    }),
  },
  fadeBottomWithScaleAnimation: {
    hidden: {
      y: 45,
      scale: 0.9,
      opacity: 0,
    },
    visible: (custom = 0) => ({
      y: 0,
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
        delay: custom,
      },
    }),
  },
}
