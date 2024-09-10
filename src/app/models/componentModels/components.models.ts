import { ReactNode } from "react";

export interface SelectBoxInterface {
    value: string,
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export interface ContainerInterface {
    children: ReactNode
}

export interface ActiveHoverInterface {
    active: boolean,
    hover: boolean
}

export interface FingerComponentInterface {
    dipActive: boolean;
    mcpActive: boolean;
    pipActive: boolean;
    onDipClick?: (e: React.MouseEvent<SVGRectElement>) => void;
    onMcpClick?: (e: React.MouseEvent<SVGRectElement>) => void;
    onPipClick?: (e: React.MouseEvent<SVGRectElement>) => void;
    showLabel: boolean;
}

export interface LabelComponentInterface {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
    message: string;
    classes?: string;
    ref?: any
}

export interface StyleTextInterface {
    message: string;
}

export interface AbsComponentInterface {
    onEpgasClick?: () => void;
    epgasActive: boolean;
    onLuqClick?: () => void;
    luqActive: boolean;
    onLlqClick?: () => void;
    llqActive: boolean
    onSupraClick?: () => void;
    supraActive: boolean;
    onRlqClick?: () => void;
    rlqActive: boolean;
    onRuqClick?: () => void;
    ruqActive: boolean;
    onUmbilClick?: () => void;
    umbilActive: boolean;
    showLabel?: boolean
}

export interface HighlightButtonInterface {
    isHighlight: boolean;
    message: string;
    onClick: () => void;
}