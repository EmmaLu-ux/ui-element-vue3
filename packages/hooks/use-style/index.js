export const useStyle = () => {

    const fontSize = (value) => {
        return value ? { 'font-size': `${value}px` } : {}
    }
    const color = (value) => {
        return value ? { 'color': value } : {}
    }
    const width = (value) => {
        return value ? { 'width': `${value}px` } : {}
    }
    const height = (value) => {
        return value ? { 'height': `${value}px` } : {}
    }
    const bgColor = (value) => {
        return value ? { 'background-color': value } : {}
    }
    const opacity = (value) => {
        return { 'opacity': value || 1 }
    }
    const align = (value) => {
        return value ? { 'text-align': value } : {}
    }
    return {
        fontSize,
        color,
        width,
        height,
        bgColor,
        opacity,
        align
    }
}