export interface ImageProps {
    src: string,
    aspectRatio?: number,
    color?: string,
    disableError?: boolean,
    disableSpinner?: boolean,
    disableTransition?: boolean,
    errorIcon?: ReactNode,
    imageStyle?: object,
    loading?: ReactNode,
    onClick?: (event:React.MouseEvent<HTMLElement> ) => any,
    style?: object
}