import './MyLabel.css';
export interface MyLabelProps {
    /**
  * Text  para el label
  */
    label: string;
    /**
  * Tamaños disponibles para el label
  */
    size: 'normal' | 'h1' | 'h2' | 'h3';
    allCaps: boolean;
    color: 'primary' | 'secondary' | 'tertiary';
    fontColor?: string;
    backgroundColor?: string;
}
export declare const MyLabel: ({ label, size, allCaps, color, fontColor, backgroundColor }: MyLabelProps) => JSX.Element;
