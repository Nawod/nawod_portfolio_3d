import { IconType } from "react-icons";

export interface ListItem {
    id : string;
    value : string;
}

export interface IconList extends ListItem {
    icon : string | IconType;
}