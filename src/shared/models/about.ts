import { ListItem } from "./common";

export interface ExperienceItem {
    id : string;
    date : string;
    icon : string;
    designation: string;
    company: string;
    link : string;
    location ?: string;
    skills : ListItem[];
    tasks  :ListItem[];
}
