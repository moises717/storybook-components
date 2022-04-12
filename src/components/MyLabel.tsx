
import './MyLabel.css'

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
}

export const MyLabel = ({
    label = 'No label',
    size = 'normal',
    allCaps = false,
    color = 'primary',
    fontColor,
}: MyLabelProps) => {
    return (
        <span className={`label ${size} text-${!fontColor ? color : ''}`}
            style={{
                color: fontColor
            }}
        >
            {allCaps ? label.toUpperCase() : label}
        </span>
    )
}
