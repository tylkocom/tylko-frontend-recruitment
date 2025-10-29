import { useBreakpoints } from '@vueuse/core'

const tailwindBreakpoints = {
      sm: 0, // optional
      md: 768,
      lg: 1024,
      xl: 1440,
}

export default () => {

    const breakpoints = useBreakpoints(tailwindBreakpoints, { ssrWidth: 375 });

    const isMobile = breakpoints.smaller('md')

    return {
        isMobile
    };
};
