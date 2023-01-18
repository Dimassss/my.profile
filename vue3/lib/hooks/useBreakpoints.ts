export type BreakpointsType = {
    [screenType in 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl' | 'subscribed']: boolean;
};

let w = 1080
const screenSize = reactive({
    xs: 480 < w,
    sm: 576 < w,
    md: 768 < w,
    lg: 992 < w,
    xl: 1200 < w,
    xxl: 1600 < w,
    xxxl: 2000 < w,
    subscribed: false
} as BreakpointsType)

export default function useBreakpoints() {
    if(typeof window !== 'undefined' && !screenSize.subscribed) {
        addEventListener('resize', (e: any) => {
            w = e.target.innerWidth
            screenSize.xs = 480 < w
            screenSize.sm = 576 < w
            screenSize.md = 768 < w
            screenSize.lg = 992 < w
            screenSize.xl = 1200 < w
            screenSize.xxl = 1600 < w
            screenSize.xxxl = 2000 < w
        })

        screenSize.subscribed = true
    }

    return screenSize
}
