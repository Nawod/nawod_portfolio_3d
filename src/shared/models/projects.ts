import { ListItem } from "./common";

export interface ProjectItem {
    id : string;
    title : string;
    description : string;
    technologies : ListItem[];
    link : string;
    image : string;
}