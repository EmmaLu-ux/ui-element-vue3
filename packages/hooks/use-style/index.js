export const useStyle = () => {

    const normalizeUnit = (value, unit = 'px') => {
        if (value === undefined || value === null || value === '') return ''
        if (typeof value === 'number') return `${value}${unit}`
        const v = String(value).trim()
        // 纯数字字符串
        if (/^\d+(\.\d+)?$/.test(v)) return `${v}${unit}`
        // 已带常见单位
        if (/(%|px|rem|em|vw|vh)$/.test(v)) return v
        return v
    }

    const fontSize = (value) => {
        const v = normalizeUnit(value)
        return v ? { 'font-size': v } : {}
    }
    const color = (value) => {
        return value ? { 'color': value } : {}
    }
    const width = (value) => {
        const v = normalizeUnit(value)
        return v ? { 'width': v } : {}
    }
    const height = (value) => {
        const v = normalizeUnit(value)
        return v ? { 'height': v } : {}
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
