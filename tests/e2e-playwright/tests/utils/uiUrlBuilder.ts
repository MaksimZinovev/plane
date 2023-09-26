import { error } from "console";
import uiPages from "./uiPages";

export type uiPagesType = keyof typeof uiPages;

export function buildUrl(
    workspaceName: string,
    targetPage: string,
    projectId?: string | unknown,
    id?: string | unknown
) {
    let url;
    if (projectId) {
        // Pages under specific project
        url = [workspaceName, uiPages['projects'], projectId, uiPages[targetPage], id]
    } else { url = [workspaceName, targetPage] }   // Pages under specific workspace
    return url
        .filter(Boolean)
        .join('/');
}

/*

* dashboard 'http://localhost/beta'
* analytics 'http://localhost/beta/analytics'
* issues  'http://localhost/beta/projects/7c15c65c-0bd0-497b-979d-7b705c06dfcb/issues'
* issue 'http://localhost/beta/projects/7c15c65c-0bd0-497b-979d-7b705c06dfcb/issues/db243181-3be0-444a-97be-88bd92fe8754'
 */
