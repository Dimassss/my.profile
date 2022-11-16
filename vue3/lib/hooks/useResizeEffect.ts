export type ScreenSizeType = {
    [screenType in 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl']: boolean;
};

const inst: {[key: string]: (e: ScreenSizeType) => void} = {};
let subscribed = false


export default function useResizeEffect(key: string, cb: (screenSize: ScreenSizeType) => void){
    if(typeof window !== 'undefined' && !subscribed) {
        addEventListener('resize', (e: any) => {
            const w = e.target.innerWidth
            const screenSize: ScreenSizeType = {
                xs: 480 < w,
                sm: 576 < w,
                md: 768 < w,
                lg: 992 < w,
                xl: 1200 < w,
                xxl: 1600 < w,
                xxxl: 2000 < w,
            }

            Object.values(inst).forEach(f => f(screenSize))
        })
    }

    inst[key] = cb
}