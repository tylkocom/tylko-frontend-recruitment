import { ref, readonly, computed, onMounted, watch } from '@nuxtjs/composition-api';

const breakpoints = {
  sm: { min: 0, max: 767 },
  md: { min: 768, max: 1023 },
  lg: { min: 1024, max: 1439 },
  xl: { min: 1440, max: 1909 },
  xl2: { min: 1910, max: 999999 }
};

type Breakpoint = keyof typeof breakpoints

const breakpointsArray = Object.keys(breakpoints) as Breakpoint[];

const global = ref<Breakpoint | null>(null);
const isRetina = ref(false);

if (process.browser) {
  const media = breakpointsArray.map(key => {
    const bp = breakpoints[key];
    return ({
      name: key,
      query: window.matchMedia(`(min-width: ${bp.min}px) and (max-width: ${bp.max}px)`)
    });
  });

  media.forEach(media => {
    if (media.query.matches) {
      global.value = media.name;
    }
    media.query.addEventListener && media.query.addEventListener('change', event => {
      if (event.matches) {
        global.value = media.name;
      }
    });
  });

  if (window.matchMedia) {
    const mq = window.matchMedia(`
      only screen and (min--moz-device-pixel-ratio: 1.3),
      only screen and (-o-min-device-pixel-ratio: 2.6/2),
      only screen and (-webkit-min-device-pixel-ratio: 1.3),
      only screen  and (min-device-pixel-ratio: 1.3),
      only screen and (min-resolution: 1.3dppx)
    `);

    mq.addEventListener && mq.addEventListener('change', event => {
      isRetina.value = event.matches;
    });

    isRetina.value = ((mq && mq.matches) || (window.devicePixelRatio > 1));
  } else {
    isRetina.value = false;
  }
}

export default function useMq(ssrBreakpoint: Breakpoint = 'md') {
  const current = ref<Breakpoint>(ssrBreakpoint);

  onMounted(() => {
    current.value = global.value || ssrBreakpoint;
  });

  watch(global, () => {
    current.value = global.value || ssrBreakpoint;
  });

  return {
    current: readonly(current),
    isSm: computed(() => current.value === 'sm'),
    isMd: computed(() => current.value === 'md'),
    isLg: computed(() => current.value === 'lg'),
    isXl: computed(() => current.value === 'xl'),
    isXl2: computed(() => current.value === 'xl2'),
    isMobileOrTabletViewport: computed(() => ['sm', 'md'].includes(current.value)),
    isTabletOrDesktopViewport: computed(() => ['md', 'lg', 'xl', 'xl2'].includes(current.value)),
    isDesktopViewport: computed(() => ['lg', 'xl', 'xl2'].includes(current.value)),
    isAboveXlViewport: computed(() => ['xl', 'xl2'].includes(current.value)),
    isRetina
  };
}
