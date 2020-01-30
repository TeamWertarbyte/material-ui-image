import { ReactNode } from "react";
export interface ImageProps {
    animationDuration?: number,
    aspectRatio?: number,
    color?: string,
    disableError?: boolean,
    disableSpinner?: boolean,
    disableTransition?: boolean,
    errorIcon?: ReactNode,
    imageStyle?: object,
    loading?: ReactNode,
    onClick?: (event:React.MouseEvent<HTMLDivElement> ) => void,
    onLoad?: (event: React.SyntheticEvent<HTMLImageElement>) => void,
    onError?: (event: React.SyntheticEvent<HTMLImageElement>) => void,
    src: string,
    style?: object
}
declare const ImageComponent: React.ComponentType<ImageProps>;
export default ImageComponent;
