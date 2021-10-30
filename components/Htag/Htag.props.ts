import { ReactNode } from "react";


// После объявления children мы можем использовать эти свойства в компоненте;
export interface HtagProps {
    tag: 'h1' | 'h2' | 'h3';
    children: ReactNode
}