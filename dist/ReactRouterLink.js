// react:
import { default as React, } from 'react'; // base technology of our nodestrap components
import * as reactRouter from 'react-router';
// doesn't work:
// import {
//     // hooks:
//     useLinkClickHandler,
// }                        from 'react-router-dom'
import * as reactRouterDom from 'react-router-dom';
const { useHref, } = reactRouter;
const { useLinkClickHandler, } = reactRouterDom;
/**
 * The public API for rendering a history-aware <a>.
 */
export const ReactRouterLink = React.forwardRef(function LinkWithRef(props, ref) {
    // rest props:
    const { 
    // react router links:
    reloadDocument, replace = false, state, to, component, passHref = false, 
    // links:
    target, ...restProps } = props;
    // fn props:
    const href = useHref(to);
    // handlers:
    const internalHandleClick = useLinkClickHandler(to, { replace, state, target });
    const handleClick = (e) => {
        props.onClick?.(e);
        if (!e.defaultPrevented && !reloadDocument)
            internalHandleClick(e);
    };
    // jsx:
    if (component) {
        return React.cloneElement(component, {
            // essentials:
            ref,
            // links:
            ...(passHref ? {
                href,
                target,
            } : {}),
            // events:
            onClick: handleClick,
        });
    } // if
    return (
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    React.createElement("a", { ...restProps, 
        // essentials:
        ref: ref, 
        // links:
        href: href, target: target, 
        // events:
        onClick: handleClick }));
});
export { ReactRouterLink as Link };
export default ReactRouterLink;
