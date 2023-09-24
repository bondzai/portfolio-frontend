export interface SkillItemType {
    name: string;
    url: string;
    image_url: string;
    topic: string;
    is_showing: boolean;
}

export interface SkillCardType {
    data: SkillItemType[];
    topic: string;
}