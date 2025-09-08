export const modalProps = {
    title: { type: String, default: "" },
    footer: { type: Boolean, default: true },
    cancelButtonText: { type: String, default: '取消' },
    cancelButtonShow: { type: Boolean, default: true },
    confirmButtonText: { type: String, default: '确定' },
    confirmButtonShow: { type: Boolean, default: true },
    confirmLoading: { type: Boolean, default: false },
    beforeChange: Function,
    unmountOnClose: {
        type: Boolean,
        default: true,// true则是要销毁，false为不要销毁
    },
    width: { type: String, default: '' },
    fixedScreen: { type: Boolean, default: true }
}