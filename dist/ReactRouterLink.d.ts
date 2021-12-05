import { default as React } from 'react';
import type { To } from 'react-router';
export interface ReactRouterLinkProps extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
    reloadDocument?: boolean;
    replace?: boolean;
    state?: any;
    to: To;
    component?: React.ReactElement;
    passHref?: boolean;
    children?: React.ReactNode;
}
/**
 * The public API for rendering a history-aware <a>.
 */
export declare const ReactRouterLink: React.ForwardRefExoticComponent<ReactRouterLinkProps & React.RefAttributes<HTMLAnchorElement>>;
export { ReactRouterLink as Link };
export default ReactRouterLink;
