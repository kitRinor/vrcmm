import { push } from "expo-router/build/global-state/routing";

export const routeToUser = (id:string) => push(`/other/user/${id}`);
export const routeToWorld = (id:string) => push(`/other/world/${id}`);
export const routeToAvatar = (id:string) => push(`/other/avatar/${id}`);
export const routeToGroup = (id:string) => push(`/other/group/${id}`);

