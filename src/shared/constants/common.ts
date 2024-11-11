import { FaBehanceSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { IconList } from "../models/common";
import { TbBrandFiverr } from "react-icons/tb";
import { FaSquareUpwork } from "react-icons/fa6";

export class NotifyType {
    public static readonly ERROR = 1;
    public static readonly SUCCESS = 2;
}

export class SocialLinks {
    public static readonly list : IconList[] = [
        {
            id : 'GitHub',
            value : 'https://github.com/Nawod',
            icon : FaGithubSquare
        },
        {
            id : 'LinkedIn',
            value : 'https://www.linkedin.com/in/madhuvantha-kan/',
            icon : FaLinkedin
        },
        {
            id : 'Behance',
            value : 'https://www.behance.net/madhuvantha',
            icon : FaBehanceSquare
        },
        {
            id : 'Fiverr',
            value : 'https://www.fiverr.com/nawod25',
            icon : TbBrandFiverr
        },
        {
            id : 'UpWork',
            value : 'https://www.upwork.com/freelancers/~01d22ed1705194364c',
            icon : FaSquareUpwork
        },
    ]
}